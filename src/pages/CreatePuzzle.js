import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import GameBoard from "../components/GameBoard/GameBoard";

export default function CreatePuzzle(props) {
  const [xword, setXword] = useState([]);
  const [hints, setHints] = useState({ across: [], down: [] });

  return (
    <Grid container>
      <Grid item container xs={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            Across
          </Typography>
          <Typography variant="h4" component="h4">
            Down
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={8}>
        <GameBoard board={xword} setBoard={setXword} />
      </Grid>
    </Grid>
  );
}
