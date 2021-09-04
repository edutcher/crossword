import React from "react";
import { Typography, Box } from "@material-ui/core";

export default function HintList(props) {
  const { hints } = props;
  return (
    <Box>
      {hints &&
        hints.map((hint) => (
          <Typography variant="subtitle1" component="span">
            {hint.position}
            {".  "}
            {hint.text}
          </Typography>
        ))}
    </Box>
  );
}
