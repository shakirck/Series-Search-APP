import React, { lazy, Suspense, useState, useCallback } from "react";
import Search from "./Search";
import { useAsyncResource } from "use-async-resource";
import SeriesList from "./SeriesList";
import Loading from "./Loading";
import { Grid, makeStyles, Button } from "@material-ui/core";
import Layout from "./Layout";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#0f1828",
  },
  headingColor: {
    color: "#ffa500",
  },
});
function HomePage(props) {
  const classes = useStyles(); // classes
  const [searchState, setsearchState] = useState(); //storing search state
  const [seriesReader, getNewSeries] = useAsyncResource(fetchSeries); // async resource
  const [page, setPage] = useState(1); //page number state

  //fetching api
  const selectSearchParamsHandle = useCallback((series, year, page) => {
    setPage(page);
    getNewSeries(series, year, page);
  }, []);
  return (
    <Layout>
      <h2 className={classes.headingColor}>SERIES SEARCH OMDB</h2>
      <Search
        searchState={searchState}
        setsearchState={setsearchState}
        handleSearch={selectSearchParamsHandle}
      />
      <Suspense fallback={<Loading />}>
        <Grid container className={classes.root} justify="center">
          <SeriesList
            seriesReader={seriesReader}
            searchState={searchState}
            handleSearch={selectSearchParamsHandle}
            page={page}
          />
        </Grid>
      </Suspense>
    </Layout>
  );
}

export default HomePage;

//api url
const fetchSeries = (searchName, year, page) =>
  fetch(
    `https://www.omdbapi.com/?apikey=d1927cda&s=${searchName}&&type=series&page=${page}&y=${year}`
  ).then((res) => res.json());
