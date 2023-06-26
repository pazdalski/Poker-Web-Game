import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const Bot = ({ position, name, cash, img }) => {
  return (
    <div className="player" style={position}>
      <Avatar className="avatar" src={img}></Avatar>
      <Stack
        className="player-info"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h6" fontWeight={"bold"} color="white">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="white">
          ${cash}
        </Typography>
      </Stack>
    </div>
  );
};

export default Bot;
