import "./players.css";
import Bot from "../Bot";
import img1 from "../../assets/bot-images/bot1.png";
import img2 from "../../assets/bot-images/bot2.png";
import img3 from "../../assets/bot-images/bot3.png";
import img4 from "../../assets/bot-images/bot4.png";

const playerPositions = {
  player1: {
    bottom: 0,
    left: "-80px",
  },
  player2: {
    top: 0,
    left: "-120px",
  },
  player3: {
    top: 0,
    right: "-120px",
  },
  player4: {
    bottom: 0,
    right: "-80px",
  },
};
const playerTransform = {
  player1: {
    bottom: 0,
    left: "-80px",
    transform: "rotateY(30deg) rotateX(10deg) scale(105%)",
    transition: "0.7s all",
  },
  player2: {
    top: 0,
    left: "-120px",
    transform: "rotateY(30deg) rotateX(10deg) scale(105%)",
    transition: "0.7s all",
  },
  player3: {
    top: 0,
    right: "-80px",
    transform: "rotateY(-30deg) rotateX(10deg) scale(105%)",
    transition: "0.7s all",
  },
  player4: {
    bottom: 0,
    right: "-40px",
    transform: "rotateY(-30deg) rotateX(10deg) scale(105%)",
    transition: "0.7s all",
  },
};
const shadowPositions = {
  player1: {
    "box-shadow": "0 0 15px 5px #0c0c0c75",
  },
  player2: {
    "box-shadow": "0 0 15px 5px #0c0c0c75",
  },
  player3: {
    "box-shadow": "0 0 15px 5px #0c0c0c75",
  },
  player4: {
    "box-shadow": "0 0 15px 5px #0c0c0c75",
  },
};
const shadowTransform = {
  player1: {
    "box-shadow": "-35px 35px 15px 5px #0c0c0c50",
  },
  player2: {
    "box-shadow": "-35px 35px 15px 5px #0c0c0c50",
  },
  player3: {
    "box-shadow": "35px 35px 15px 5px #0c0c0c50",
  },
  player4: {
    "box-shadow": "35px 35px 15px 5px #0c0c0c50",
  },
};

const Players = ({ botInfo, power, botNotification }) => {
  return (
    <div className="container">
      <Bot
        position={playerPositions.player1}
        shadowPositions={shadowPositions.player1}
        transform={playerTransform.player1}
        shadowTransform={shadowTransform.player1}
        name={"Crawler"}
        id={0}
        cash={botInfo[0].credits}
        cards={botInfo[0].cards}
        img={img1}
        isRevealed={botInfo[0].isRevealed}
        isPlaying={botInfo[0].isPlaying}
        hasFolded={botInfo[0].hasFolded}
        isWinner={botInfo[0].isWinner}
        power={power[0].power}
        hand={power[0].hand}
        botNotification={botNotification[0]}
      />
      <Bot
        position={playerPositions.player2}
        shadowPositions={shadowPositions.player2}
        transform={playerTransform.player2}
        shadowTransform={shadowTransform.player2}
        name={"Ally Alien"}
        id={1}
        cash={botInfo[1].credits}
        cards={botInfo[1].cards}
        img={img2}
        isRevealed={botInfo[1].isRevealed}
        isPlaying={botInfo[1].isPlaying}
        hasFolded={botInfo[1].hasFolded}
        isWinner={botInfo[1].isWinner}
        power={power[1].power}
        hand={power[1].hand}
        botNotification={botNotification[1]}
      />
      <Bot
        position={playerPositions.player3}
        shadowPositions={shadowPositions.player3}
        transform={playerTransform.player3}
        shadowTransform={shadowTransform.player3}
        name={"Dino"}
        id={2}
        cash={botInfo[2].credits}
        cards={botInfo[2].cards}
        img={img3}
        isRevealed={botInfo[2].isRevealed}
        isPlaying={botInfo[2].isPlaying}
        hasFolded={botInfo[2].hasFolded}
        isWinner={botInfo[2].isWinner}
        power={power[2].power}
        hand={power[2].hand}
        botNotification={botNotification[2]}
      />
      <Bot
        position={playerPositions.player4}
        shadowPositions={shadowPositions.player4}
        transform={playerTransform.player4}
        shadowTransform={shadowTransform.player4}
        name={"Mummy"}
        id={3}
        cash={botInfo[3].credits}
        cards={botInfo[3].cards}
        img={img4}
        isRevealed={botInfo[3].isRevealed}
        isPlaying={botInfo[3].isPlaying}
        hasFolded={botInfo[3].hasFolded}
        isWinner={botInfo[3].isWinner}
        power={power[3].power}
        hand={power[3].hand}
        botNotification={botNotification[3]}
      />
    </div>
  );
};

export default Players;
