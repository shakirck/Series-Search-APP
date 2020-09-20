import React from "react";
import styles from "../styles/Home.module.css";
import { Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    backgroundColor: "#0f1828",
    height: "100vh",
    overflowX: "hidden",
    alignItems: "flex-start",console.log
  },
});
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
