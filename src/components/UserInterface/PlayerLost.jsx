import React from "react";
import "./UI.css";
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import skull from "../../assets/poker-skull.png";

const PlayerLost = () => {
  return (
    <Stack className="player-lost" direction={"column"}>
      <img src={skull} alt="Poker skull" style={{ width: "128px" }} />

      <Typography
        variant="button"
        color="white"
        fontSize={52}
        fontFamily={"Oswald"}
      >
        BANKRUPT
      </Typography>
      <Link to={"/"}>
        <Button variant="contained" color="error" sx={{ width: "150px" }}>
          Menu
        </Button>
      </Link>
    </Stack>
  );
};

export default PlayerLost;
