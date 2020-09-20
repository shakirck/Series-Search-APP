import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  makeStyles,
  Typography,
  CardActions,
  Grid,
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    width: 300,
    marginBottom: 100,
    backgroundColor: "#222a39",
    padding: 10,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
  cardTitle: {
    color: "orange",
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0f1828",
    color: "white",
    "&:hover": {
      backgroundColor: "orange",
    },
  },
});

// Individual Card Component
export default function SeriesCard(props) {
  //   console.log(props, "props");
  const { series, handleModal } = props;

  const classes = useStyles();
  const dummyImage =
    "https://via.placeholder.com/300x300?text=Image+Not+Available";

  return (
    //   {showSelected && <div> SEriesModal </div>}

    <Grid container justify="center" alignContent="center" spacing={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={series.Poster !== "N/A" ? series.Poster : dummyImage}
            title={series.Title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.cardTitle}
            >
              {series.Title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container justify="center" alignItems="flex-end">
            <Grid item>
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => handleModal(series)}
              >
                Read Full Plot
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
