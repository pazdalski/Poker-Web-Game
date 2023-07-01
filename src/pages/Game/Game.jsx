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
import { straightCombination } from "../../components/StraightCombination";
import Blackout from "../../components/UserInterface/Blackout";

const Game = () => {
  const stableCards = JSON.parse(JSON.stringify(cardsInfo));
  const [playerCredits, setPlayerCredits] = useState(10000);
  const [playerCards, setPlayerCards] = useState([]);
  const [totalPot, setTotalPot] = useState(0);
  const [round, setRound] = useState(1);
  const [game, setGame] = useState(1);
  const [availableCards, setAvailableCards] = useState(stableCards);
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
  const [blackoutOnWinnings, setBlackoutOnWinnings] = useState(false);
  const [blackoutInfo, setBlackoutInfo] = useState("Highest card");

  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [turn, setTurn] = useState(1);

  const [turnsTillNextRound, setTurnsTillNextRound] = useState([
    5 + additionalTurns,
    9 + additionalTurns,
    13 + additionalTurns,
  ]);

  const [power, setPower] = useState([
    {
      name: "Crawler",
      hand: 0,
      kicker: 0,
      power: 0,
      index: 0,
    },
    {
      name: "Ally Alien",
      hand: 0,
      kicker: 0,
      power: 0,
      index: 1,
    },
    {
      name: "Dino",
      hand: 0,
      kicker: 0,
      power: 0,
      index: 2,
    },
    {
      name: "Mummy",
      hand: 0,
      kicker: 0,
      power: 0,
      index: 3,
    },
    // {
    //   name: "Player",
    //   hand: 19,
    //   power: 6,
    // index:4,
    // }
  ]);

  const winner = () => {
    const temp = [...power];
    //? Highest Card
    for (let i = 0; i < 4; i++) {
      const allCards = [...tableCards, ...botInfo[i].cards];
      const handCards = [...botInfo[i].cards];

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
        // If unique power has checked power
        if (uniquePowers.includes(power)) {
          // If duplicateElements doesn't contain card, then add
          if (!duplicateElements.includes(allCards[i])) {
            duplicateElements.push(allCards[i]);
          }
        } else {
          // Add to uniquePowers if its unique
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
          8; // 40-84 (Adding single pair parameters and additional 8 to make it better than 1 pair)

        console.log(
          "TWO PAIRS FOUND for: " +
            power[i].name +
            ` assigning ${givenPower} power`
        );
        temp[i].power = givenPower;
      }
      if (duplicateElements.length == 3) {
        const sorted = duplicateElements.sort((a, b) => {
          if (Number(b.power) > Number(a.power)) {
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

      // # ---------------------------------------------------------------- //

      //# THREE OF A KIND/ FOUR OF A KIND/ FULL HOUSE

      const duplicateElements3 = [];
      const uniquePowers3 = [];

      for (let i = 0; i < allCards.length; i++) {
        const power = allCards[i].power;
        // If unique power has checked power
        if (uniquePowers3.includes(power)) {
          // If duplicateElements doesn't contain card, then add
          if (!duplicateElements3.includes(allCards[i])) {
            duplicateElements3.push(allCards[i]);
          }
        } else {
          // Add to uniquePowers if its unique
          uniquePowers3.push(power);
        }
      }

      if (duplicateElements3.length >= 2) {
        if (duplicateElements3.length >= 3) {
          //? Full House
          const sorted = duplicateElements3.sort((a, b) => {
            if (Number(b.power) > Number(a.power)) {
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
              //Too many for full house, deleting one last piece
              sorted.splice(3, 1);
            }

            const givenPower = sorted[0].power * 3 + sorted[2].power * 2 + 166;
            if (temp[i].power < givenPower) {
              // If current power is less than the given power assign it
              temp[i].power = givenPower;
              console.log(
                "FULL HOUSE FOUND for: " +
                  botInfo[i].name +
                  ` Assigning ${givenPower} power`
              );
            }
          }
        }

        const counter = {};
        // Iterating through data and counting the number of times when power is detected
        duplicateElements3.forEach((item) => {
          const power = item.power;
          counter[power] = (counter[power] || 0) + 1;
        });

        // Filtering the data, leaves only elements which have at least two appearance
        const filteredData = duplicateElements3.filter(
          (item) => counter[item.power] >= 2
        );

        if (filteredData.length == 2) {
          //? THREE OF A KIND
          const givenPower = Number(filteredData[0].power) * 3 + 79; //85-121
          if (temp[i].power < givenPower) {
            // If current power is less than the given power assign it
            temp[i].power = givenPower;

            console.log(
              "THREE OF A KIND for: " +
                botInfo[i].name +
                ` Assigning ${givenPower} power`
            );
          }
        }
        if (filteredData.length == 3) {
          //? FOUR OF A KIND
          const givenPower = Number(filteredData[0].power) * 4 + 236; //244-292
          if (temp[i].power < givenPower) {
            // If current power is less than the given power assign it
            temp[i].power = givenPower;

            console.log(
              "FOUR OF A KIND for: " +
                botInfo[i].name +
                ` Assigning ${givenPower} power`
            );
          }
        }
        if (filteredData.length == 4) {
          //? 2x THREE OF A KIND
          const sorted = duplicateElements3.sort((a, b) => {
            if (Number(b.power) > Number(a.power)) {
              return 1;
            } else {
              return -1;
            }
          });
          const givenPower = Number(sorted[0].power) * 3 + 79; //85-121
          if (temp[i].power < givenPower) {
            // If current power is less than the given power assign it
            temp[i].power = givenPower;

            console.log(
              "2x THREE OF A KIND for: " +
                botInfo[i].name +
                ` Assigning ${givenPower} power`
            );
          }
        }
      }

      //# STRAIGHT / STRAIGHT FLUSH / ROYAL FLUSH
      const straightDetection = straightCombination;

      const sorted = allCards.sort((a, b) => {
        if (Number(b.power) > Number(a.power)) {
          return 1;
        } else {
          return -1;
        }
      });
      const sortedCardsArray = sorted
        .map((item) => {
          return item.power;
        })
        .join(""); // It looks like this 141312111098 just to detect if its a straight combination
      straightDetection.forEach((detection) => {
        if (sortedCardsArray.includes(detection.combination)) {
          //? Straight
          let indexOfDetection = sortedCardsArray.indexOf(
            detection.combination
          );

          if (sortedCardsArray.charAt(0) == 1) {
            // If straight detected from character "1" that means it is a 2 letter number, so index wouldn't be right without "/2"
            indexOfDetection = Math.ceil(indexOfDetection / 2);
          }

          const givenPower = Number(detection.power); //122-130
          if (temp[i].power < givenPower) {
            // If current power is less than the given power assign it
            temp[i].power = givenPower;

            console.log(
              "STRAIGHT for: " +
                botInfo[i].name +
                ` Assigning ${givenPower} power`
            );
          }

          const isStraightFlush =
            sorted[indexOfDetection].category ==
              sorted[indexOfDetection + 1].category &&
            sorted[indexOfDetection + 1].category ==
              sorted[indexOfDetection + 2].category &&
            sorted[indexOfDetection + 2].category ==
              sorted[indexOfDetection + 3].category &&
            sorted[indexOfDetection + 3].category ==
              sorted[indexOfDetection + 4].category;

          if (isStraightFlush) {
            temp[i].power = temp[i].power + 171;
            console.log(
              "STRAIGHT FLUSH for: " +
                botInfo[i].name +
                ` Assigning ${temp[i].power} power`
            );
          }
        }
      });

      // # ---------------------------------------------------------------- //

      setPower(temp);
    }

    const sortedPlayers = power.sort((a, b) => {
      if (Number(b.power) > Number(a.power)) {
        return 1;
      } else {
        return -1;
      }
    });

    const filteredPlayers = sortedPlayers.filter((player) => {
      if (!botInfo[player.index].hasFolded) {
        return player;
      }
    });

    // In which way the player won?
    const powerOfTheWinner = filteredPlayers[0].power;

    if (powerOfTheWinner <= 14) {
      setBlackoutInfo("HIGHEST CARD");
    } else if (powerOfTheWinner <= 39) {
      setBlackoutInfo("ONE PAIR");
    } else if (powerOfTheWinner <= 84) {
      setBlackoutInfo("TWO PAIRS");
    } else if (powerOfTheWinner <= 121) {
      setBlackoutInfo("THREE OF A KIND");
    } else if (powerOfTheWinner <= 130) {
      setBlackoutInfo("STRAIGHT");
    } else if (powerOfTheWinner <= 186) {
      setBlackoutInfo("FLUSH");
    } else if (powerOfTheWinner <= 243) {
      setBlackoutInfo("FULL HOUSE");
    } else if (powerOfTheWinner <= 292) {
      setBlackoutInfo("FOUR OF A KIND");
    } else if (powerOfTheWinner <= 300) {
      setBlackoutInfo("STRAIGHT FLUSH");
    } else if (powerOfTheWinner <= 301) {
      setBlackoutInfo("ROYAL FLUSH");
    }

    // Decide who is the winner
    const tempBotInfo = [...botInfo];
    const indexOfWinner = filteredPlayers[0].index;

    tempBotInfo[indexOfWinner].isWinner = true;
    tempBotInfo[indexOfWinner].credits =
      tempBotInfo[indexOfWinner].credits + totalPot;
    tempBotInfo[0].isRevealed = true;
    tempBotInfo[1].isRevealed = true;
    tempBotInfo[2].isRevealed = true;
    tempBotInfo[3].isRevealed = true;

    setTimeout(() => {
      setBlackoutOnWinnings(true);
      setBotInfo(tempBotInfo);
      setAvailableCards([...stableCards]);
      notificate(
        `${tempBotInfo[indexOfWinner].name} is the winner! $${totalPot} in winnings`
      );
    }, 1000);

    setTimeout(() => {
      nextGame();
    }, 6000);
  };

  const nextGame = () => {
    const temp = [...botInfo];
    for (let i = 0; i < 4; i++) {
      temp[i].isRevealed = false;
      temp[i].isPlaying = false;
      temp[i].hasFolded = false;
      temp[i].isWinner = false;
    }
    setBotInfo(temp);

    setBlackoutInfo("");
    setBlackoutOnWinnings(false);

    setPower([
      {
        name: "Crawler",
        hand: 0,
        kicker: 0,
        power: 0,
        index: 0,
      },
      {
        name: "Ally Alien",
        hand: 0,
        kicker: 0,
        power: 0,
        index: 1,
      },
      {
        name: "Dino",
        hand: 0,
        kicker: 0,
        power: 0,
        index: 2,
      },
      {
        name: "Mummy",
        hand: 0,
        kicker: 0,
        power: 0,
        index: 3,
      },
    ]);

    console.warn(round);
    setRound(1);
    setTurn(1);
    setAdditionalTurns(0);
    setTotalPot(0);
    setIsPlayerOut(false);
    setTableCards([]);
    setPlayableCards([]);

    setGame((prevGame) => prevGame + 1);
  };

  const setHandPower = () => {
    for (let i = 0; i < 4; i++) {
      const cards = botInfo[i].cards;

      for (let j = 0; j < 2; j++) {
        const temp = [...power];

        temp[i].hand = temp[i].hand + Number(cards[j].power);
        setPower(temp);
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
      cards: [], //Placeholder
      isRevealed: false,
      isPlaying: false,
      hasFolded: false,
      isWinner: false,
    },
    {
      name: "Ally Alien",
      credits: 10000,
      cards: [],
      isRevealed: false,
      isPlaying: false,
      hasFolded: false,
      isWinner: false,
    },
    {
      name: "Dino",
      credits: 10000,
      cards: [],
      isRevealed: false,
      isPlaying: false,
      hasFolded: false,
      isWinner: false,
    },
    {
      name: "Mummy",
      credits: 10000,
      cards: [],
      isRevealed: false,
      isPlaying: false,
      hasFolded: false,
      isWinner: false,
    },
  ]);

  const randomCards = () => {
    setAvailableCards([...cardsInfo]);

    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * availableCards.length);
      let randomCard = availableCards[randomNumber];

      const temporaryCards = availableCards;
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
        const randomNumber = Math.floor(Math.random() * availableCards.length);
        const randomCard = availableCards[randomNumber];

        const temporaryCards = availableCards;
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
      const randomNumber = Math.floor(Math.random() * availableCards.length);
      const randomCard = availableCards[randomNumber];

      const temporaryCards = availableCards;
      temporaryCards.splice(randomNumber, 1);
      setAvailableCards(temporaryCards);

      tableCards.push(randomCard);

      notificate("Next card on the table!");

      setCurrentCall(10); //! resets current call
    }
    if (round == 3 && tableCards.length == 4) {
      const randomNumber = Math.floor(Math.random() * availableCards.length);
      const randomCard = availableCards[randomNumber];

      const temporaryCards = availableCards;
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
    console.error(round);
    let randomTimeout = Math.floor(Math.random() * 1000) + 500;
    const resetHighlighting = () => {
      const temp = [...botInfo];

      temp[0].isPlaying = false;
      temp[1].isPlaying = false;
      temp[2].isPlaying = false;
      temp[3].isPlaying = false;
      setBotInfo(temp);
    };

    console.log("Turns till next round:");
    console.log(turnsTillNextRound[0] - turn);
    console.log("turn:");
    console.log(turn);

    // Show available choices
    if (currentPlayer == 4) {
      resetHighlighting();

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

        if (turnsTillNextRound[round - 1] - turn == 4) {
          anotherTurn();
          console.log("turnsTillNextRound[round - 1] - turn == 4");
          console.log("additional turns to next round 0");

          return;
        } else if (turnsTillNextRound[round - 1] - turn == 0) {
          setAdditionalTurns((prevTurns) => prevTurns + 3);
          console.log("turnsTillNextRound[round - 1] - turn == 0");
          console.log("additional turns to next round 3");
        }

        // setAdditionalTurns((prevTurns) => prevTurns + 3);

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
      resetHighlighting();
      const temp = [...botInfo];
      temp[currentPlayer].isPlaying = true;
      setBotInfo(temp);
    }
    if (round == 1) {
      notificate(botInfo[currentPlayer].name + " is deciding...");

      // Taking 10$ at the beginning of the game
      setTimeout(() => {
        //  setCurrentCall(50); // This will change later, when bots can calculate %
        const temp = [...botInfo];
        temp[currentPlayer].credits = temp[currentPlayer].credits - currentCall;
        setTotalPot((prevPot) => prevPot + currentCall);
        setBotInfo(temp);
        anotherTurn();
      }, randomTimeout);

      // Players have 35% chance of folding if their cards are bad
      if (power[currentPlayer].hand <= 10) {
        const random = Math.floor(Math.random() * 50);
        if (random < 35) {
          const temp = [...botInfo];
          temp[currentPlayer].hasFolded = true;
          setBotInfo(temp);
        }
        notificate(botInfo[currentPlayer].name + " has folded!");
      }
    }
    if (round == 2) {
      randomTimeout = Math.floor(Math.random() * 2000) + 500;
      notificate(botInfo[currentPlayer].name + " is deciding...");

      // Taking 10$ at the beginning of the game
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
      randomTimeout = Math.floor(Math.random() * 2000) + 500;
      notificate(botInfo[currentPlayer].name + " is deciding...");

      // Taking 10$ at the beginning of the game
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
      resetHighlighting();
      notificate("Who is the winner?");
      winner();
    }
  };
  const checkWhichRound = () => {
    if (turn > 13 + additionalTurns) {
      console.warn("set to round 4");
      setRound(4);
    } else if (turn > 9 + additionalTurns) {
      console.warn("round 3");
      setRound(3);
    } else if (turn > 4 + additionalTurns) {
      console.warn("round 2");
      setRound(2);
      // todo figure out how to handle additional turns
    }
  };

  const anotherTurn = () => {
    setTurn((prevTurn) => prevTurn + 1);
    setCurrentPlayer((prevPlayer) => prevPlayer + 1);
    checkWhichRound();
    if (currentPlayer > 3) {
      setCurrentPlayer(0);
      return;
    }
  };

  useEffect(() => {
    if (power[0].hand == 0) {
      setTimeout(() => {
        currentBotAI();
      }, 1000);
    } else {
      currentBotAI();
    }
  }, [turn]);

  useEffect(() => {
    // New random cards on new game
    randomCards();
  }, [game]);
  useEffect(() => {
    assignTableCards();
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
      <Players botInfo={botInfo} power={power} />
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
      <Blackout
        blackoutOnWinnings={blackoutOnWinnings}
        blackoutInfo={blackoutInfo}
      />
      {notificationStatus && <Notification msg={notificationMessage} />}
    </Container>
  );
};

export default Game;
