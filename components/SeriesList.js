import SeriesCard from "./SeriesCard";
import { Grid, makeStyles, Button } from "@material-ui/core";
import { useState } from "react";
import SeriesModal from "./SeriesModal";
const useStyles = makeStyles({
  fontStyle: {
    fontSize: "2em",
    color: "white",
    textAlign: "center",
  },
  pageBtn: {
    backgroundColor: "orange",
  },
});
export default function SeriesList({
  seriesReader,
  searchState,
  handleSearch,
  page,
}) {
  const classes = useStyles();
  const seriesData = seriesReader(); // start fetching api  .. returns promise
  const [selectedSeries, setselectedSeries] = useState(); // for storing the selected series for showing inmodal
  const [showSelected, setshowSelected] = useState(false); // for checking wheather a modal is to be shown or not

  //finding the total number of pages based on the result count
  let maxpage;
  if (seriesData && seriesData.totalResults) {
    maxpage = Math.ceil(seriesData.totalResults / 10);
  }
  //   console.log(maxpage, "maxpage");

  //handling modal functionality
  const handleModal = (series) => {
    setshowSelected(!showSelected);
    setselectedSeries(series);
    // console.log(showSelected);
    // console.log(selectedSeries, "*****");
  };
  //Handling pagination
  const handleNextPage = () => {
    if (page === maxpage) {
      return;
    }
    handleSearch(searchState.series, searchState.year, page + 1);
  };
  const handlePrevPage = () => {
    if (page === 1) {
      return;
    }
    handleSearch(searchState.series, searchState.year, page - 1);
  };
  //   console.log(page);
  if (seriesData === undefined) {
    return (
      <Grid item className={classes.fontStyle}>
        Search Series
      </Grid>
    );
  }
  return (
    <div>
      <Grid container justify="center">
        {showSelected && (
          <Grid container item>
            <SeriesModal
              setshowSelected={setshowSelected}
              showSelected={showSelected}
              selectedSeries={selectedSeries}
            />
          </Grid>
        )}
        {seriesData.Search &&
          seriesData.Search.slice(0, 8).map((item) => (
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              justify="center"
              spacing={1}
            >
              <SeriesCard series={item} handleModal={handleModal} />
            </Grid>
          ))}
        {seriesData.Search && (
          <Grid container justify="space-around" spacing={2}>
            <Grid>
              <Button
                className={classes.pageBtn}
                variant="contained"
                disabled={page == 1 ? true : false}
                onClick={handlePrevPage}
              >
                {" "}
                Prev
              </Button>
            </Grid>

            <Grid>
              <Button
                className={classes.pageBtn}
                variant="contained"
                onClick={handleNextPage}
                disabled={page == maxpage ? true : false}
              >
                {" "}
                Next
              </Button>
            </Grid>
          </Grid>
        )}
        {seriesData.Response === "False" && (
          <Grid
            container
            item
            xs={12}
            justify="center"
            className={classes.fontStyle}
          >
            {seriesData.Error}
          </Grid>
        )}
      </Grid>
    </div>
  );
}
