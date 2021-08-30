import "./App.css";
import React from "react";
import { Container, Grid } from "@material-ui/core";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  return (
    <Container>
      <Grid container>
        <GameBoard />
      </Grid>
    </Container>
  );
}

export default App;
