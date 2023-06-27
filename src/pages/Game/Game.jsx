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
  const [playableCards, setPlayableCards] = useState([]);

  const [botInfo, setBotInfo] = useState([
    // isReaveled is animated
    {
      name: "Crawler",
      credits: 10000,
      isRevealed: true,
      cards: [],
    },
    {
      name: "Ally Alien",
      credits: 10000,
      isRevealed: true,
      cards: [],
    },
    {
      name: "Dino",
      credits: 10000,
      isRevealed: true,
      cards: [],
    },
    {
      name: "Mummy",
      credits: 10000,
      isRevealed: true,
      cards: [],
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

      console.log(playableCards);

      console.log(randomCard);
      console.log(avaiableCards.length);
    }
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
