import React from "react";
import {
  Link,
  Grid,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(10),
  },
}));

export default function HomePage(props) {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h1" component="h1" className={classes.title}>
        Crosswords
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Link component={RouterLink} to="/game">
            Play
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link component={RouterLink} to="/create">
            Create Puzzle
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
