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
  const [playerCards, setPlayerCards] = useState([]);
  const [totalPot, setTotalPot] = useState(0);
  const [round, setRound] = useState(1);
  const [avaiableCards, setAvailableCards] = useState(cardsInfo);
  const [playableCards, setPlayableCards] = useState([]);
  const [tableCards, setTableCards] = useState([]);

  const [botInfo, setBotInfo] = useState([
    // isReaveled is animated
    {
      name: "Crawler",
      credits: 10000,
      isRevealed: true,
      cards: [cardsInfo[50], cardsInfo[50]], //Placeholder
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

      const temporaryCards = avaiableCards;
      temporaryCards.splice(randomNumber, 1);

      setAvailableCards(temporaryCards);

      //!Bad practice but it is working
      playableCards.push(randomCard);
      if (playableCards.length > 10) {
        playableCards.pop();
      }
    }

    assignCards();
    assignTableCards();
  };
  const assignTableCards = () => {
    if (!tableCards?.length) {
      for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * avaiableCards.length);
        const randomCard = avaiableCards[randomNumber];

        const temporaryCards = avaiableCards;
        temporaryCards.splice(randomNumber, 1);
        setAvailableCards(temporaryCards);

        tableCards.push(randomCard);
      }
      console.log("ROUND 1, 3 cards are in stack");
      return;
    }
    if (tableCards.length > 5) {
      console.log("ALL CARDS ARE ASSIGNED, WHO IS THE WINNER?");
      return;
    }

    const randomNumber = Math.floor(Math.random() * avaiableCards.length);
    const randomCard = avaiableCards[randomNumber];

    const temporaryCards = avaiableCards;
    temporaryCards.splice(randomNumber, 1);
    setAvailableCards(temporaryCards);

    tableCards.push(randomCard);

    console.log("ROUND 2 or 3, 1 card more in stack");
  };
  const assignCards = () => {
    setBotInfo([
      {
        ...botInfo[0],
        cards: [playableCards[0], playableCards[1]],
      },
      {
        ...botInfo[1],
        cards: [playableCards[2], playableCards[3]],
      },
      {
        ...botInfo[2],
        cards: [playableCards[4], playableCards[5]],
      },
      {
        ...botInfo[3],
        cards: [playableCards[6], playableCards[7]],
      },
    ]);
    setPlayerCards([playableCards[8], playableCards[9]]);
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
      <Table tableCards={tableCards} />
      <Players botInfo={botInfo} />
      <UserCards playerCards={playerCards} />
      <TotalPot totalPot={totalPot} />
      <HierarchyHelp />
      <UserCredits playerCredits={playerCredits} />
      <UserButtons />
      <MenuButton />
    </Container>
  );
};

export default Game;
