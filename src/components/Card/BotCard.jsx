import cardimg from "../../assets/cards/10_of_clubs.png";

const BotCard = ({ left, revealed }) => {
  return (
    <div
      className={`bot-card ${revealed && "bot-card-animated-reveal"}`}
      style={left ? { left: 40 } : { right: 20 }}
    >
      <img
        src={cardimg}
        alt="card"
        className={`card-image ${revealed && "revealed"}`}
      />
    </div>
  );
};

export default BotCard;
