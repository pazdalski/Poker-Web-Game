import "./players.css";
import Bot from "../Bot";
import img1 from "../../assets/bot-images/bot1.png";
import img2 from "../../assets/bot-images/bot2.png";
import img3 from "../../assets/bot-images/bot3.png";
import img4 from "../../assets/bot-images/bot4.png";

const playerPositions = {
  player1: { bottom: 0, left: "-80px" },
  player2: { top: 0, left: "-80px" },
  player3: { top: 0, right: "-80px" },
  player4: { bottom: 0, right: "-80px" },
};

const Players = () => {
  return (
    <div className="container">
      <Bot
        position={playerPositions.player1}
        name={"Crawler"}
        cash={7600}
        img={img1}
      />
      <Bot
        position={playerPositions.player2}
        name={"Ally Alien"}
        cash={12420}
        img={img2}
      />
      <Bot
        position={playerPositions.player3}
        name={"Dino"}
        cash={3700}
        img={img3}
      />
      <Bot
        position={playerPositions.player4}
        name={"Mummy"}
        cash={15100}
        img={img4}
      />
    </div>
  );
};

export default Players;
