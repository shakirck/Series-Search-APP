import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "600px",
    // marginBottom: ,
    backgroundColor: "#222a39",
    padding: 10,
  },
}));
export default function ModalLoading() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      spacing={2}
      direction="row"
    >
      <Grid container className={classes.root}>
        <Grid container item xs={12} md={4}>
          <Skeleton />
        </Grid>
        <Grid container item xs={12} md={6}>
          <Grid
            item
            md={12}
            justify="center"
            sm={6}
            className={classes.textStyle}
          >
            <Skeleton />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
