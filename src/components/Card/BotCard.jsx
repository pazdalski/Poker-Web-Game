const BotCard = ({ left, revealed, card, folded }) => {
  return (
    <div
      className={`bot-card ${revealed && "bot-card-animated-reveal"} ${
        folded && "folded"
      }`}
      style={left ? { left: 40 } : { right: 20 }}
    >
      <img
        src={card?.img && `../${card.img}`}
        alt={card?.img && `${card.category} ${card.card}`}
        className={`card-image ${revealed && "revealed"}`}
      />
    </div>
  );
};

export default BotCard;
