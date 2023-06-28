import Players from "../../components/Players/Players";
import Table from "../../components/Table/Table";
import { Container } from "@mui/material";
import UserCards from "../../components/Card/UserCards";
import TotalPot from "../../components/UserInterface/TotalPot";
import HierarchyHelp from "../../components/UserInterface/HierarchyHelp";
import UserCredits from "../../components/UserInterface/UserCredits";
import UserButtons from "../../components/UserInterface/UserButtons";
import MenuButton from "../../components/UserInterface/MenuButton";
import { useEffect, useState } from "react";
import { cardsInfo } from "../../components/CardsInfo";
import Notification from "../../components/Notification";

const Game = () => {
  const [playerCredits, setPlayerCredits] = useState(10000);
  const [playerCards, setPlayerCards] = useState([]);
  const [totalPot, setTotalPot] = useState(0);
  const [round, setRound] = useState(1);
  const [avaiableCards, setAvailableCards] = useState(cardsInfo);
  const [playableCards, setPlayableCards] = useState([]);
  const [tableCards, setTableCards] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationStatus, setNotificationStatus] = useState(false);
  const [currentCall, setCurrentCall] = useState(10);

  const [playerChoices, setPlayerChoices] = useState({
    raise: false,
    fold: false,
    call: false,
  });
  const [isPlayerOut, setIsPlayerOut] = useState(false);
  const [playerRaise, setPlayerRaise] = useState(10);
  const [additionalTurns, setAdditionalTurns] = useState(0);

  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [turn, setTurn] = useState(1);

  const [power, setPower] = useState([
    // Jack - hand 11
    // Queen - hand 12
    // King - hand 13
    // Ace - hand 14

    {
      name: "Crawler",
      hand: 0,
      power: 10, // Royal flush
    },
    {
      name: "Ally Alien",
      hand: 0,
      power: 9, // Straight flush
    },
    {
      name: "Dino",
      hand: 0,
      power: 8, // Kareta
    },
    {
      name: "Mummy",
      hand: 0,
      power: 7, // Full House
    },
    // {
    //   name: "Player",
    //   hand: 19,
    //   power: 6, // Flush
    // }
  ]);

  const winner = () => {
    //Wysoka karta
    for (let i = 0; i < power.length - 1; i++) {
      console.log("Winner is:");

      // if (i == 4) {
      //   return;
      // }
    }
  };
  const setHandPower = () => {
    console.log("Setting hand power");
    for (let i = 0; i < 4; i++) {
      const cards = botInfo[i].cards;

      for (let j = 0; j < 2; j++) {
        const temp = [...power];

        if (cards[j].card == "J") {
          temp[i].hand = temp[i].hand + 11;
          setPower(temp);
          console.log("Jack founded:");
        }
        if (cards[j].card == "Q") {
          temp[i].hand = temp[i].hand + 12;
          setPower(temp);
          console.log("Queen founded:");
        }
        if (cards[j].card == "K") {
          temp[i].hand = temp[i].hand + 13;
          setPower(temp);
          console.log("King founded:");
        }
        if (cards[j].card == "A") {
          temp[i].hand = temp[i].hand + 14;
          setPower(temp);
          console.log("Ace founded:");
        } else {
          temp[i].hand = temp[i].hand + Number(cards[j].card);
          setPower(temp);
        }
      }
    }
    console.log(power);
  };

  const notificate = (msg) => {
    setNotificationStatus(false);

    setNotificationMessage(msg);

    setTimeout(() => {
      setNotificationStatus(true);
    }, 100);
  };

  const [botInfo, setBotInfo] = useState([
    {
      name: "Crawler",
      credits: 10000,
      cards: [cardsInfo[50], cardsInfo[50]], //Placeholder
      isRevealed: true,
      isPlaying: false,
      hasFolded: false,
    },
    {
      name: "Ally Alien",
      credits: 10000,
      cards: [cardsInfo[50], cardsInfo[50]],
      isRevealed: true,
      isPlaying: false,
      hasFolded: false,
    },
    {
      name: "Dino",
      credits: 10000,
      cards: [cardsInfo[50], cardsInfo[50]],
      isRevealed: true,
      isPlaying: false,
      hasFolded: false,
    },
    {
      name: "Mummy",
      credits: 10000,
      cards: [cardsInfo[50], cardsInfo[50]],
      isRevealed: true,
      isPlaying: false,
      hasFolded: false,
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
      notificate("Let's play");

      setHandPower();

      for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * avaiableCards.length);
        const randomCard = avaiableCards[randomNumber];

        const temporaryCards = avaiableCards;
        temporaryCards.splice(randomNumber, 1);
        setAvailableCards(temporaryCards);

        tableCards.push(randomCard);
      }
      return;
    }
    if (tableCards.length >= 5) {
      return;
    }

    if (round == 2 && tableCards.length == 3) {
      const randomNumber = Math.floor(Math.random() * avaiableCards.length);
      const randomCard = avaiableCards[randomNumber];

      const temporaryCards = avaiableCards;
      temporaryCards.splice(randomNumber, 1);
      setAvailableCards(temporaryCards);

      tableCards.push(randomCard);

      notificate("Next card on the table!");

      setCurrentCall(10); //! resets current call
    }
    if (round == 3 && tableCards.length == 4) {
      const randomNumber = Math.floor(Math.random() * avaiableCards.length);
      const randomCard = avaiableCards[randomNumber];

      const temporaryCards = avaiableCards;
      temporaryCards.splice(randomNumber, 1);
      setAvailableCards(temporaryCards);

      tableCards.push(randomCard);

      notificate("Last card on the table!");

      setCurrentCall(10); //! resets current call
    }
  };
  const assignCards = () => {
    const temp = [...botInfo];
    temp[0].cards = [playableCards[0], playableCards[1]];
    temp[1].cards = [playableCards[2], playableCards[3]];
    temp[2].cards = [playableCards[4], playableCards[5]];
    temp[3].cards = [playableCards[6], playableCards[7]];

    setBotInfo(temp);
    setPlayerCards([playableCards[8], playableCards[9]]);
  };

  const currentBotAI = (playerDecide) => {
    let randomTimeout = Math.floor(Math.random() * 2500) + 1000;
    const resetHighliting = () => {
      const temp = [...botInfo];

      temp[0].isPlaying = false;
      temp[1].isPlaying = false;
      temp[2].isPlaying = false;
      temp[3].isPlaying = false;
      setBotInfo(temp);
    };
    //round
    //CurrentPlayer
    //Turn

    // Show available choices
    if (currentPlayer == 4) {
      resetHighliting();

      if (playerDecide == "call") {
        setPlayerCredits((prevCredits) => prevCredits - currentCall);
        setTotalPot((prevPot) => prevPot + currentCall);
        anotherTurn();
        return;
      }
      if (playerDecide == "fold") {
        setIsPlayerOut(true);

        anotherTurn();
        return;
      }
      if (playerDecide == "raise") {
        setPlayerCredits((prevCredits) => prevCredits - playerRaise);
        setTotalPot((prevPot) => prevPot + playerRaise);

        setCurrentCall(playerRaise);
        setAdditionalTurns((prevTurns) => prevTurns + 4);

        anotherTurn();
        return;
      }

      if (isPlayerOut) {
        anotherTurn();
        return;
      }

      notificate("It's your turn. Good luck!");
      setPlayerChoices({
        raise: true,
        fold: true,
        call: true,
      });

      return;
    }
    //Skip player who folded
    if (botInfo[currentPlayer].hasFolded == true) {
      anotherTurn();
      return;
    }

    if (currentPlayer < 4) {
      //current player highlighting
      resetHighliting();
      const temp = [...botInfo];
      temp[currentPlayer].isPlaying = true;
      setBotInfo(temp);
    }
    if (round == 1) {
      notificate(botInfo[currentPlayer].name + " is deciding...");

      // Taking 10$ at the beggining of the game
      setTimeout(() => {
        //  setCurrentCall(50); // This will change later, when bots can calculate %
        const temp = [...botInfo];
        temp[currentPlayer].credits = temp[currentPlayer].credits - currentCall;
        setTotalPot((prevPot) => prevPot + currentCall);
        setBotInfo(temp);
        anotherTurn();
      }, randomTimeout);
    }
    if (round == 2) {
      randomTimeout = Math.floor(Math.random() * 3100) + 1000;
      notificate(botInfo[currentPlayer].name + " is deciding...");

      // Taking 10$ at the beggining of the game
      setTimeout(() => {
        const callAmount = 10; // This will change later, when bots can calculate %
        const temp = [...botInfo];
        temp[currentPlayer].credits = temp[currentPlayer].credits - callAmount;
        setTotalPot((prevPot) => prevPot + callAmount);
        setBotInfo(temp);
        anotherTurn();
      }, randomTimeout);
    }
    if (round == 3) {
      randomTimeout = Math.floor(Math.random() * 3100) + 2000;
      notificate(botInfo[currentPlayer].name + " is deciding...");

      // Taking 10$ at the beggining of the game
      setTimeout(() => {
        const callAmount = 10; // This will change later, when bots can calculate %
        const temp = [...botInfo];
        temp[currentPlayer].credits = temp[currentPlayer].credits - callAmount;
        setTotalPot((prevPot) => prevPot + callAmount);
        setBotInfo(temp);
        anotherTurn();
      }, randomTimeout);
    }

    if (turn >= 15 + additionalTurns) {
      setRound(4);
      winner();
    } else if (turn >= 10 + additionalTurns) {
      setRound(3);
    } else if (turn >= 5 + additionalTurns) {
      setRound(2);
    }
  };

  const anotherTurn = () => {
    setTurn((prevTurn) => prevTurn + 1);
    setCurrentPlayer((prevPlayer) => prevPlayer + 1);
    if (currentPlayer > 3) {
      setCurrentPlayer(0);
      return;
    }
  };

  useEffect(() => {
    currentBotAI();
  }, [turn]);

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
      <UserCards playerCards={playerCards} isPlayerOut={isPlayerOut} />
      <TotalPot totalPot={totalPot} />
      <HierarchyHelp />
      <UserCredits playerCredits={playerCredits} />
      <UserButtons
        playerChoices={playerChoices}
        currentBotAI={currentBotAI}
        setPlayerChoices={setPlayerChoices}
        currentCall={currentCall}
        setPlayerRaise={setPlayerRaise}
        playerRaise={playerRaise}
        playerCredits={playerCredits}
      />
      <MenuButton />
      {notificationStatus && <Notification msg={notificationMessage} />}
    </Container>
  );
};

export default Game;
