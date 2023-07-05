import React from "react";
import "./UI.css";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import skull from "../../assets/poker-skull.png";
import crown from "../../assets/poker-crown.png";

const GameOver = ({ message, win }) => {
  return (
    <Stack className={win ? "player-win" : "player-lost"} direction={"column"}>
      <img
        src={win ? crown : skull}
        alt="Game over"
        style={{ width: "128px" }}
      />

      <Typography
        variant="button"
        color="white"
        fontSize={60}
        fontFamily={"Oswald"}
      >
        {message}
      </Typography>
      <Link to={"/"}>
        <Button variant="contained" color="error" sx={{ width: "150px" }}>
          Menu
        </Button>
      </Link>
    </Stack>
  );
};

export default GameOver;
