import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import LetterBlock from "../LetterBlock/LetterBlock";
import tempPuzzle from "../../puzzles/testPuzzle";

export default function GameBoard(props) {
  const [xword, setXword] = useState([]);
  return (
    <Box>
      {tempPuzzle &&
        tempPuzzle.map((row, iter1) => {
          return (
            <Grid container>
              {row.map((block, iter) => {
                return (
                  <Grid item>
                    <LetterBlock
                      key={"block" + iter}
                      letter={block.letter}
                      position={block.position}
                      iter={iter}
                      iter1={iter1}
                    />
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
    </Box>
  );
}
