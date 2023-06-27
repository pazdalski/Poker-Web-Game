import "./players.css";
import Bot from "../Bot";
import img1 from "../../assets/bot-images/bot1.png";
import img2 from "../../assets/bot-images/bot2.png";
import img3 from "../../assets/bot-images/bot3.png";
import img4 from "../../assets/bot-images/bot4.png";
import { useState } from "react";

const playerPositions = {
  player1: { bottom: 0, left: "-80px" },
  player2: { top: 0, left: "-80px" },
  player3: { top: 0, right: "-80px" },
  player4: { bottom: 0, right: "-80px" },
};

// todo Tutaj zapisz całą logikę pokazywania kart i przerzucaj niżej.

const Players = () => {
  const [botInfo, setBotInfo] = useState([
    {
      name: "Crawler",
      credits: 10000,
      isRevealed: false,
    },
    {
      name: "Ally Alien",
      credits: 10000,
      isRevealed: false,
    },
    {
      name: "Dino",
      credits: 10000,
      isRevealed: true,
    },
    {
      name: "Mummy",
      credits: 10000,
      isRevealed: false,
    },
  ]);

  return (
    <div className="container">
      <Bot
        position={playerPositions.player1}
        name={"Crawler"}
        id={0}
        cash={botInfo[0].credits}
        img={img1}
        isRevealed={botInfo[0].isRevealed}
      />
      <Bot
        position={playerPositions.player2}
        name={"Ally Alien"}
        id={1}
        cash={botInfo[1].credits}
        img={img2}
        isRevealed={botInfo[1].isRevealed}
      />
      <Bot
        position={playerPositions.player3}
        name={"Dino"}
        id={2}
        cash={botInfo[2].credits}
        img={img3}
        isRevealed={botInfo[2].isRevealed}
      />
      <Bot
        position={playerPositions.player4}
        name={"Mummy"}
        id={3}
        cash={botInfo[3].credits}
        img={img4}
        isRevealed={botInfo[3].isRevealed}
      />
    </div>
  );
};

export default Players;
