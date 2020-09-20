import React from "react";
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
import { Skeleton } from "@material-ui/lab";
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
  buttonHover: {
    "&:hover": {
      backgroundColor: "orange",
    },
  },
});

//Loading Card Item Screen for individual cards
export default function LoadingCard(props) {
  //   console.log(props, "props");
  const { series } = props;
  const classes = useStyles();

  return (
    <Grid container justify="center" alignContent="center" spacing={3}>
      <Card className={classes.root}>
        <Skeleton variant="rect" width={210} height={118} animation="wave" />
        <Skeleton variant="text" />
        <Skeleton ariant="rect" animation="wave" />
      </Card>
    </Grid>
  );
}
