import "./players.css";

import Bot from "../Bot";

const playerPositions = {
  player1: { bottom: 0, left: "-80px" },
  player2: { top: 0, left: "-80px" },
  player3: { top: 0, right: 40 },
  player4: { bottom: 0, right: 40 },
};

const Players = () => {
  return (
    <div className="container">
      <Bot position={playerPositions.player1} name={"Bot 1"} cash={7600} />
      <Bot position={playerPositions.player2} name={"Bot 2"} cash={12420} />
      <Bot position={playerPositions.player3} name={"Bot 3"} cash={3700} />
      <Bot position={playerPositions.player4} name={"Bot 4"} cash={15100} />
    </div>
  );
};

export default Players;
