import "./App.css";
import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import LetterBlock from "./components/LetterBlock/LetterBlock";
import tempPuzzle from "./puzzles/testPuzzle";

function App() {
  const [xword, setXword] = useState([]);

  useEffect(() => {}, []);

  return (
    <Container>
      <Grid container>
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
      </Grid>
    </Container>
  );
}

export default App;
