import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const DevMode = ({
  turn,
  currentPlayer,
  nextRoundOnPlayer,
  round,
  power,
  currentCall,
}) => {
  return (
    <Stack
      direction={"column"}
      gap={2}
      sx={{
        position: "absolute",
        top: "200px",
        left: "50px",
        background: "black",
        padding: "10px",
      }}
    >
      <Box>
        <Typography variant="button" color="white">
          Turn{" "}
        </Typography>
        <Typography variant="button" color="gold">
          {turn}
        </Typography>
      </Box>
      <Box>
        <Typography variant="button" color="white">
          Current Player{" "}
        </Typography>
        <Typography variant="button" color="gold">
          {currentPlayer}
        </Typography>
      </Box>
      <Box>
        <Typography variant="button" color="white">
          Next Round After Player{" "}
        </Typography>
        <Typography variant="button" color="gold">
          {nextRoundOnPlayer}
        </Typography>
      </Box>
      <Box>
        <Typography variant="button" color="white">
          Round{" "}
        </Typography>
        <Typography variant="button" color="gold">
          {round}
        </Typography>
      </Box>
      <Box>
        <Typography variant="button" color="white">
          Power (player){" "}
        </Typography>
        <Typography variant="button" color="gold">
          {power[4].power}
        </Typography>
      </Box>
      <Box>
        <Typography variant="button" color="white">
          Current Call{" "}
        </Typography>
        <Typography variant="button" color="gold">
          {currentCall}
        </Typography>
      </Box>
    </Stack>
  );
};

export default DevMode;