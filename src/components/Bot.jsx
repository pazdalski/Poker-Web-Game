import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import BotCard from "./Card/BotCard";
import "./Card/cards.css";
import PlayerNotification from "./Players/PlayerNotification";

const Bot = ({
  position,
  shadowPositions,
  transform,
  shadowTransform,
  name,
  cash,
  img,
  isRevealed,
  cards,
  isPlaying,
  hasFolded,
  isWinner,
  power,
  hand,
  botNotification,
}) => {
  return (
    <>
      <div
        className={`player ${isWinner && "winner"}`}
        style={isPlaying ? transform : position}
      >
        <PlayerNotification botNotification={botNotification} />
        <Avatar className="avatar" src={img}></Avatar>
        <Stack
          className={`player-info  ${isPlaying && "shadow"}`}
          justifyContent={"center"}
          alignItems={"center"}
          style={isPlaying ? shadowTransform : shadowPositions}
        >
          <Typography variant="h6" fontWeight={"bold"} color="white">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="white">
            ${cash}
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
    </>
  );
};

export default Bot;
