import React from "react";
import "./UI.css";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

const Blackout = ({ blackoutOnWinnings, blackoutInfo }) => {
  return (
    <div className={`blackout ${blackoutOnWinnings && "blackout-true"}`}>
      <Typography
        variant="button"
        color="white"
        sx={{ transform: "translateY(100px)" }}
        fontSize={32}
        fontFamily={"Oswald"}
      >
        <StarIcon /> {blackoutInfo} <StarIcon />
      </Typography>
    </div>
  );
};

export default Blackout;
