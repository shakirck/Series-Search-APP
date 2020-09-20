import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
  Grid,
} from "@material-ui/core";
import { useAsyncResource } from "use-async-resource";
import Rating from "react-rating";
import ModalLoading from "./ModalLoading";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "90%",
    // marginBottom: ,
    backgroundColor: "#222a39",
    position: "relative",
    padding: 10,
  },

  media: {
    // paddingTop: "56.25%", // 16:9,
    // marginTop: "30",
    width: "100%",
  },
  cardTitle: {
    color: "orange",
    fontWeight: "300",
    textAlign: "center",
  },
  textStyle: {
    fontSize: "1rem",
    color: "orange",
  },
  imageContainer: {
    width: "20%",
  },
  closeButton: {
    position: "absolute",
  },
}));

export default function SimpleModal(props) {
  const { showSelected, setshowSelected, selectedSeries } = props;
  const [seriesReader, getSeries] = useAsyncResource(
    fetchSeriesById,
    selectedSeries.imdbID
  );

  //   const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setshowSelected(true);
  };

  const handleClose = () => {
    setshowSelected(false);
  };
  console.log("selected series", selectedSeries);

  return (
    <div>
      <Modal open={showSelected} onClose={handleClose}>
        <Suspense fallback={<ModalLoading />}>
          <ModalBody seriesReader={seriesReader} />
          <Grid container justify="center">
            <Button variant="contained" onClick={() => setshowSelected(false)}>
              {" "}
              Go Back
            </Button>
          </Grid>
        </Suspense>
      </Modal>
    </div>
  );
}

const fetchSeriesById = (id) =>
  fetch(`http://www.omdbapi.com/?apikey=d1927cda&i=${id}`).then((res) =>
    res.json()
  );
function ModalBody({ seriesReader }) {
  const seriesData = seriesReader();
  const classes = useStyles();
  console.log("IDDDDD", seriesData);

  return (
    <div>
      <Grid container className={classes.root} spacing={1}>
        <div className={classes.imageContainer}>
          <img className={classes.media} src={seriesData.Poster} />
        </div>
        <Grid item xs={12} md={8} className={classes.textStyle}>
          <h4>Title : {seriesData.Title}</h4>
          <h4>Year : {seriesData.Year}</h4>
          <h4>Rated : {seriesData.Rated}</h4>
          <h4>Director : {seriesData.Director}</h4>
          <h4>Writer : {seriesData.Writer}</h4>
          <h4> Plot : {seriesData.Plot}</h4>
          <h4> Total Seasons : {seriesData.totalSeasons}</h4>
          <h4> Rating : {seriesData.imdbRating}</h4>
        </Grid>
      </Grid>
    </div>
  );
}
