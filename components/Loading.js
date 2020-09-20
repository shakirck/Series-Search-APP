import SeriesCard from "./SeriesCard";
import { Grid, makeStyles } from "@material-ui/core";
import LoadingCard from "./LoadingCard";
const useStyles = makeStyles({
  fontStyle: {
    fontSize: "2em",
    color: "white",
  },
});
export default function Loading() {
  return (
    <Grid container justify="center">
      {[...Array(9)].map((e, i) => (
        <Grid container item xs={12} sm={6} md={4} justify="center" spacing={1}>
          <LoadingCard />
        </Grid>
      ))}
    </Grid>
  );
}
