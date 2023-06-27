const BotCard = ({ left, revealed, card }) => {
  return (
    <div
      className={`bot-card ${revealed && "bot-card-animated-reveal"}`}
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
