import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import GameBoard from "../components/GameBoard/GameBoard";
import HintList from "../components/HintList/HintList";
import tempPuzzle from "../puzzles/testPuzzle";

export default function GamePage(props) {
  return (
    <Grid container>
      <Grid item container xs={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            Across
          </Typography>
          <HintList hints={tempPuzzle.hints.across} />
          <Typography variant="h4" component="h4">
            Down
          </Typography>

          <HintList hints={tempPuzzle.hints.down} />
        </Grid>
      </Grid>
      <Grid item container xs={8}>
        <GameBoard board={tempPuzzle.board} />
      </Grid>
    </Grid>
  );
}
