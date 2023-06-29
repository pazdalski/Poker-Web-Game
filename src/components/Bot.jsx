import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import BotCard from "./Card/BotCard";
import "./Card/cards.css";

const Bot = ({
  position,
  name,
  cash,
  img,
  isRevealed,
  cards,
  isPlaying,
  hasFolded,
  power,
  hand,
}) => {
  return (
    <div className="player" style={position}>
      <Avatar
        className={`avatar ${isPlaying && "isPlaying"}`}
        src={img}
      ></Avatar>
      <Stack
        className="player-info"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="h6" fontWeight={"bold"} color="white">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="white">
          ${cash}{" "}
          <Typography variant="button" color="primary">
            {hand}{" "}
          </Typography>
          <Typography variant="button" color="gold">
            {power}
          </Typography>
        </Typography>
      </Stack>
      <div className="cards-container">
        <BotCard
          left
          revealed={isRevealed && true}
          card={cards.length && cards[0]}
          folded={hasFolded}
        />
        <BotCard
          revealed={isRevealed && true}
          card={cards.length && cards[1]}
          folded={hasFolded}
        />
      </div>
    </div>
  );
};

export default Bot;
