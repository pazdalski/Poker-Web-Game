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

const Players = ({ botInfo, power }) => {
  return (
    <div className="container">
      <Bot
        position={playerPositions.player1}
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
      />
      <Bot
        position={playerPositions.player2}
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
      />
      <Bot
        position={playerPositions.player3}
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
      />
      <Bot
        position={playerPositions.player4}
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
      />
    </div>
  );
};

export default Players;
