import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#0f1828",
    height: "100vh",
    overflowX: "hidden",
    alignItems: "flex-start",
  },
});
//Whole  app default  layout
export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item container xs={12} justify="center" alignItems="flex-start">
        {children}
      </Grid>
    </Grid>
  );
}
