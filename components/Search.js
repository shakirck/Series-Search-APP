import React, { useState } from "react";

import { Grid, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "300px",
    backgroundColor: "orange",
    marginBottom: "50px",
    paddingTop: "60px",
  },
  searchInput: {
    width: "80%",
    border: "none",
    height: "30px",
    padding: "20px",
    fontSize: "1em",

    transition: "all .2s ease-in-out",
    "&:focus": {
      borderLeft: "5px solid #0f1828",
    },
    "&::placeholder": {
      fontSize: "1em",
    },
  },
  searchButtonStyle: {
    backgroundColor: "#0f1828",
    "&:hover": {
      backgroundColor: "#222a39",
    },
  },
});
function Search(props) {
  const classes = useStyles();
  const { searchState, setsearchState, handleSearch } = props;
  const [error, seterror] = useState(null);
  const handleOnSearch = () => {
    if (!searchState || !searchState.series) {
      seterror("Series Field Cannot Be Empty");
      return;
    }
    handleSearch(searchState.series, searchState.year, 1);
  };
  //For Searching Input Boxes and Functionality
  return (
    <Grid
      container
      item
      xs={12}
      justify="center"
      alignItems="center"
      className={classes.root}
      spacing={2}
    >
      <Grid container item xs={12} sm={4} justify="center">
        <input
          className={classes.searchInput}
          placeholder="series"
          name="series"
          onChange={(e) =>
            setsearchState({ ...searchState, series: e.target.value })
          }
          required
        />
      </Grid>
      <Grid container item xs={12} sm={4} justify="center">
        <input
          className={classes.searchInput}
          placeholder="year"
          name="year"
          onChange={(e) =>
            setsearchState({ ...searchState, year: e.target.value })
          }
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOnSearch}
          className={classes.searchButtonStyle}
        >
          Search
        </Button>
      </Grid>
      <Grid container item xs={12} justify="center">
        {error && <p style={{ color: "red" }}> Search Field Cannot Be Empty</p>}
      </Grid>
    </Grid>
  );
}

export default Search;
