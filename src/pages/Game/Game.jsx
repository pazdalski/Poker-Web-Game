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
      kicker: 0,
      power: 10, // Royal flush
    },
    {
      name: "Ally Alien",
      hand: 0,
      kicker: 0,
      power: 9, // Straight flush
    },
    {
      name: "Dino",
      hand: 0,
      kicker: 0,
      power: 8, // Kareta
    },
    {
      name: "Mummy",
      hand: 0,
      kicker: 0,
      power: 7, // Full House
    },
    // {
    //   name: "Player",
    //   hand: 19,
    //   power: 6, // Flush
    // }
  ]);

  const winner = () => {
    const temp = [...power];
    //Wysoka karta
    for (let i = 0; i < 4; i++) {
      const allCards = [...tableCards, ...botInfo[i].cards];
      const handCards = [...botInfo[i].cards];
      // console.log(allCards);
      // console.table(handCards);

      //# Highest card - it is also a kicker
      const highestCardSort = handCards.sort((a, b) => {
        return Number(b.power) - Number(a.power);
      });
      const highestCard = highestCardSort[0];

      temp[i].kicker = highestCard.power;
      temp[i].power = highestCard.power;

      // # ---------------------------------------------------------------- //

      //# Pair
      const duplicateElements = [];
      const uniquePowers = [];

      for (let i = 0; i < allCards.length; i++) {
        const power = allCards[i].power;
        // Jeżeli uniquePowers ma sprawdzany power
        if (uniquePowers.includes(power)) {
          // jeżeli duplateElements nie zawiera karty to dodaj
          if (!duplicateElements.includes(allCards[i])) {
            duplicateElements.push(allCards[i]);
          }
        } else {
          // Dodaj do uniquePowers jeśli jest unikalny
          uniquePowers.push(power);
        }
      }
      if (duplicateElements.length == 1) {
        const givenPower = Number(duplicateElements[0].power) * 2 + 11; // 15-39

        console.log(
          "ONE PAIR FOUND for: " +
            power[i].name +
            ` assigning ${givenPower} power`
        );
        temp[i].power = givenPower;
      }
      if (duplicateElements.length == 2) {
        const givenPower =
          Number(duplicateElements[0].power) * 2 +
          11 +
          Number(duplicateElements[1].power) * 2 +
          11 +
          8; // 40-76 (Adding single pair parameters and additional 8 to make it better than 1 pair)

        console.log(
          "TWO PAIRS FOUND for: " +
            power[i].name +
            ` assigning ${givenPower} power`
        );
        temp[i].power = givenPower;
      }
      if (duplicateElements.length == 3) {
        const sorted = duplicateElements.sort((a, b) => {
          if (b.power < a.power) {
            return 1;
          } else {
            return -1;
          }
        });
        if (sorted[0].power == sorted[1].power) {
          sorted.splice(1, 1);
        }
        const givenPower =
          Number(sorted[0].power) * 2 +
          11 +
          Number(sorted[1].power) * 2 +
          11 +
          8; // 40-76 (Adding single pair parameters and additional 8 to make it better than 1 pair)
        // It is the same as 2 pairs but there is no combination as three pairs, so i have to sort it out
        console.log(
          "THREE PAIRS FOUND (taking 2 highest) for: " +
            power[i].name +
            ` assigning ${givenPower} power`
        );
        temp[i].power = givenPower;
      }
      //todo Huge problem is when two players have the same power
      // Then kicker card (highest card excluding pairs in players hand)
      // I will add this later, lets focus on main situations
      // console.log("DUPLICATE ELEMENTS:");
      // console.log(duplicateElements.length); //? check
      // console.log(duplicateElements); //? check
      // console.log("UNIQUE POWERS:");
      // console.log(uniquePowers); //? check
      // console.log("POWER:");
      // console.table(power);
      // console.warn("Next player");
      // # ---------------------------------------------------------------- //

      //# THREE OF A KIND and FOUR OF A KIND

      const data = [
        {
          category: "spades",
          card: "2",
          power: "2",
          img: "cards/5_of_spades.png",
        },
        {
          category: "spades",
          card: "2",
          power: "2",
          img: "cards/king_of_spades.png",
        },
        {
          category: "spades",
          card: "5",
          power: "5",
          img: "cards/8_of_spades.png",
        },
        {
          category: "clubs",
          card: "2",
          power: "2",
          img: "cards/king_of_clubs.png",
        },
        {
          category: "clubs",
          card: "5",
          power: "5",
          img: "cards/jack_of_clubs.png",
        },
        {
          category: "hearts",
          card: "A",
          power: "14",
          img: "cards/king_of_hearts.png",
        },
        {
          category: "diamonds",
          card: "7",
          power: "7",
          img: "cards/9_of_diamonds.png",
        },
      ];

      const duplicateElements3 = [];
      const uniquePowers3 = [];

      for (let i = 0; i < allCards.length; i++) {
        const power = allCards[i].power;
        // Jeżeli uniquePowers ma sprawdzany power
        if (uniquePowers3.includes(power)) {
          // jeżeli duplateElements nie zawiera karty to dodaj
          if (!duplicateElements3.includes(allCards[i])) {
            duplicateElements3.push(allCards[i]);
          }
        } else {
          // Dodaj do uniquePowers jeśli jest unikalny
          uniquePowers3.push(power);
        }
      }
      console.log("duplicateElements3");
      console.log(duplicateElements3);

      if (duplicateElements3.length >= 2) {
        if (duplicateElements3.length >= 3) {
          // Full House
          const sorted = duplicateElements3.sort((a, b) => {
            if (b.power > a.power) {
              return 1;
            } else {
              return -1;
            }
          });

          if (
            (sorted[0].power == sorted[1].power &&
              sorted[1].power !== sorted[2].power) ||
            (sorted[1].power == sorted[2].power &&
              sorted[0].power !== sorted[1].power)
          ) {
            if (sorted.length == 4) {
              console.log("Too many for full house, deleting one last piece");
              sorted.splice(3, 1);
            }
            const givenPower = sorted[0].power * 3 + sorted[2].power * 2 + 166;
            console.log("FULL HOUSE FOUND: ");
            console.log(givenPower);
            console.log(sorted);
          }
        }

        const counter = {};
        // Przechodzenie przez dane i zliczanie wystąpień wartości "power"
        duplicateElements3.forEach((item) => {
          const power = item.power;
          counter[power] = (counter[power] || 0) + 1;
        });

        // Filtracja danych, pozostawienie tylko elementów, które mają przynajmniej dwa wystąpienia
        const filteredData = duplicateElements3.filter(
          (item) => counter[item.power] >= 2
        );

        if (filteredData.length == 2) {
          // THREE OF A KIND
          const givenPower = Number(filteredData[0].power) * 3 + 71;

          console.log("THREE OF A KIND FOUND: ");
          console.log(givenPower);
          console.log(filteredData);
        }
        if (filteredData.length == 3) {
          //? FOUR OF A KIND
          const givenPower = Number(filteredData[0].power) * 4 + 227;
          console.log("FOUR OF A KIND FOUND: ");
          console.log(givenPower);
          console.log(filteredData);
        }
        if (filteredData.length == 4) {
          //? 2x THREE OF A KIND
          const sorted = duplicateElements3.sort((a, b) => {
            if (b.power < a.power) {
              return 1;
            } else {
              return -1;
            }
          });
          const givenPower = Number(sorted[0].power) * 3 + 71;
          console.log("2x THREE OF A KIND FOUND: ");
          console.log(givenPower);
          console.log(sorted);
        }
      }

      console.log("DUPLICATE ELEMENTS:");
      console.log(duplicateElements3.length); //? check
      console.log(duplicateElements3); //? check
      console.log("UNIQUE POWERS:");
      console.log(uniquePowers3); //? check
      console.log("POWER:");
      console.table(power);
      console.warn("Next player");
      // # ---------------------------------------------------------------- //

      setPower(temp);
    }
  };
  const setHandPower = () => {
    for (let i = 0; i < 4; i++) {
      const cards = botInfo[i].cards;

      for (let j = 0; j < 2; j++) {
        const temp = [...power];

        if (cards[j].card == "J") {
          temp[i].hand = temp[i].hand + 11;
          setPower(temp);
        } else if (cards[j].card == "Q") {
          temp[i].hand = temp[i].hand + 12;
          setPower(temp);
        } else if (cards[j].card == "K") {
          temp[i].hand = temp[i].hand + 13;
          setPower(temp);
        } else if (cards[j].card == "A") {
          temp[i].hand = temp[i].hand + 14;
          setPower(temp);
        } else {
          temp[i].hand = temp[i].hand + Number(cards[j].card);
          setPower(temp);
        }
      }
      if (cards[0].card == cards[1].card) {
        const temp = [...power];
        temp[i].hand = 35; // PAIR IN HAND FOUNDED;
        setPower(temp);
      }
      if (cards[0].card == "K" && cards[1].card == "K") {
        const temp = [...power];
        temp[i].hand = 45; // KING PAIR IN HAND FOUNDED;
        setPower(temp);
      }
      if (cards[0].card == "A" && cards[1].card == "A") {
        const temp = [...power];
        temp[i].hand = 50; // ACE PAIR IN HAND FOUNDED;
        setPower(temp);
      }
    }
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
    let randomTimeout = Math.floor(Math.random() * 100) + 0;
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
      randomTimeout = Math.floor(Math.random() * 100) + 0;
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
      randomTimeout = Math.floor(Math.random() * 100) + 0;
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
    if (round == 4) {
      resetHighliting();
      notificate("Who is the winner?");
      winner();
    }

    if (turn >= 14 + additionalTurns) {
      setRound(4);
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
