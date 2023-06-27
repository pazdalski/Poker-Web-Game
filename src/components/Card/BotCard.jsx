import cardimg from "../../assets/cards/10_of_clubs.png";

const BotCard = ({ left, revealed }) => {
  return (
    <div className="bot-card" style={left ? { left: 40 } : { right: 20 }}>
      {revealed && <img src={cardimg} alt="card" className="card-revealed" />}
    </div>
  );
};

export default BotCard;
