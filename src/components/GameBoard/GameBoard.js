import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import LetterBlock from "../LetterBlock/LetterBlock";
import tempPuzzle from "../../puzzles/testPuzzle";

export default function GameBoard(props) {
  const [xword, setXword] = useState([]);
  const { createMode } = props;

  return (
    <Box>
      {tempPuzzle.board &&
        tempPuzzle.board.map((row, iter1) => {
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
                      create={createMode}
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
