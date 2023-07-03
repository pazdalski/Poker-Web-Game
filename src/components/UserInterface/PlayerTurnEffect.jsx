import React from "react";
import "./UI.css";

const PlayerTurnEffect = ({ isPlayerPlaying }) => {
  return (
    <div
      className={`player-turn-effect ${isPlayerPlaying && "isPlaying"}`}
    ></div>
  );
};

export default PlayerTurnEffect;
