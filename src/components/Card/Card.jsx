const Card = ({ card, revealed }) => {
  return (
    <div className={`card ${revealed && "card-animated-reveal"}`}>
      <img
        src={card?.img && `../${card.img}`}
        alt={card?.img && `${card.category} ${card.card}`}
        className={`card-image ${revealed && "revealed"}`}
        style={{ width: "75px" }}
      />
    </div>
  );
};

export default Card;
