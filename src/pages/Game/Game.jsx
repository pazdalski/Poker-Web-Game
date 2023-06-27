import Players from "../../components/Players/Players";
import Table from "../../components/Table/Table";
import { Card, Container } from "@mui/material";
import UserCards from "../../components/Card/UserCards";
import TotalPot from "../../components/UserInterface/TotalPot";
import HierarchyHelp from "../../components/UserInterface/HierarchyHelp";
import UserCredits from "../../components/UserInterface/UserCredits";
import UserButtons from "../../components/UserInterface/UserButtons";
import MenuButton from "../../components/UserInterface/MenuButton";
import { useEffect, useState } from "react";
import { cardsInfo } from "../../components/CardsInfo";

const Game = () => {
  const [playerCredits, setPlayerCredits] = useState(10000);
  const [totalPot, setTotalPot] = useState(0);
  const [round, setRound] = useState(1);
  const [avaiableCards, setAvailableCards] = useState(cardsInfo);
  const [playableCards, setPlayableCards] = useState(cardsInfo);

  const [botInfo, setBotInfo] = useState([
    // isReaveled is animated
    {
      name: "Crawler",
      credits: 10000,
      isRevealed: true,
      cards: [cardsInfo[50], cardsInfo[50]],
    },
    {
      name: "Ally Alien",
      credits: 10000,
      isRevealed: true,
      cards: [cardsInfo[50], cardsInfo[50]],
    },
    {
      name: "Dino",
      credits: 10000,
      isRevealed: true,
      cards: [cardsInfo[50], cardsInfo[50]],
    },
    {
      name: "Mummy",
      credits: 10000,
      isRevealed: true,
      cards: [cardsInfo[50], cardsInfo[50]],
    },
  ]);

  const randomCards = () => {
    setAvailableCards(cardsInfo);
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * avaiableCards.length);
      let randomCard = avaiableCards[randomNumber];

      let temporaryCards = avaiableCards;
      temporaryCards.splice(randomNumber, 1);

      setAvailableCards(temporaryCards);

      playableCards.push(randomCard);
      if (playableCards.length > 10) {
        playableCards.pop();
      }
    }

    setTimeout(assignCards, 100);
  };
  const assignCards = () => {
    setBotInfo([
      {
        ...botInfo[0],
        cards: [playableCards[0], playableCards[1]],
      },
      {
        name: "Ally Alieneee",
        credits: 10000,
        isRevealed: true,
        cards: [playableCards[2], playableCards[3]],
      },
      {
        name: "Dino",
        credits: 10000,
        isRevealed: true,
        cards: [playableCards[4], playableCards[5]],
      },
      {
        name: "Mummy",
        credits: 10000,
        isRevealed: true,
        cards: [playableCards[6], playableCards[7]],
      },
    ]);
  };

  useEffect(() => {
    // New random cards on new round
    randomCards();
  }, [round]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Table />
      <Players botInfo={botInfo} />
      <UserCards />
      <TotalPot totalPot={totalPot} />
      <HierarchyHelp />
      <UserCredits playerCredits={playerCredits} />
      <UserButtons />
      <MenuButton />
    </Container>
  );
};

export default Game;
