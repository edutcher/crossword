import React, { useState, useEffect } from "react";
import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  letterBox: {
    height: "55px",
    width: "55px",
    outlineStyle: "solid",
    outlineWidth: "2px",
    margin: "5px",
  },
  letterArea: {
    fontSize: "1.2rem",
    textAlign: "center",
  },
  emptyBox: {
    height: "55px",
    width: "55px",
    backgroundColor: "black",
    margin: "5px",
  },
  textInput: {
    marginLeft: "21px",
    marginRight: "21px",
  },
}));

export default function LetterBlock(props) {
  const classes = useStyles();
  const [guess, setGuess] = useState("");
  const { position, letter, iter, iter1 } = props;
  const id = "block" + String.fromCharCode(97 + iter1) + iter;

  useEffect(() => {
    if (letter) {
      if (guess === letter) {
        document.getElementById(id).style.color = "black";
      } else {
        document.getElementById(id).style.color = "red";
      }
    }
  }, [guess]);

  const handleChange = (e) => {
    const newGuess = e.target.value;
    setGuess(newGuess.toUpperCase());
  };

  return (
    <Box>
      {letter && (
        <Box className={classes.letterBox}>
          <span>{position ? position : <br />}</span>
          <TextField
            id={id}
            value={guess}
            className={classes.textInput}
            onChange={handleChange}
            inputProps={{ maxLength: 1 }}
          />
        </Box>
      )}
      {!letter && <Box className={classes.emptyBox}></Box>}
    </Box>
  );
}
