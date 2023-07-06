const Card = ({ card, revealed }) => {
  return (
    <div
      className={`card ${revealed && "card-animated-reveal"}`}
      style={{ position: "relative", zIndex: "150" }}
    >
      <img
        src={card?.img && process.env.PUBLIC_URL + `${card.img}`}
        alt={card?.img && `${card.category} ${card.card}`}
        className={`card-image ${revealed && "revealed"}`}
        style={{ width: "75px" }}
      />
    </div>
  );
};

export default Card;
