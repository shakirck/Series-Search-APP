import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "500px",
    // marginBottom: ,
    backgroundColor: "#222a39",
    position: "relative",
    padding: 10,
  },
}));
export default function ModalLoading() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container xs={12}>
      <Grid item xs={12} md={6}>
        <Skeleton variant="rect" animation="wave" height={400} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton ariant="rect" animation="wave" />
        <Skeleton ariant="rect" animation="wave" />
        <Skeleton ariant="rect" animation="wave" />
        <Skeleton ariant="rect" animation="wave" />
        <Skeleton ariant="rect" animation="wave" />
        <Skeleton ariant="rect" animation="wave" />
      </Grid>
    </Grid>
  );
}
