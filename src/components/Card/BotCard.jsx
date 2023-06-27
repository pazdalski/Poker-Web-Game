const BotCard = ({ left, revealed, card }) => {
  console.log(card);
  return (
    <div
      className={`bot-card ${revealed && "bot-card-animated-reveal"}`}
      style={left ? { left: 40 } : { right: 20 }}
    >
      <img
        src={`../${card.img}`}
        alt={`${card.category} ${card.card}`}
        className={`card-image ${revealed && "revealed"}`}
      />
    </div>
  );
};

export default BotCard;
