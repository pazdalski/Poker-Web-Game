const BotCard = ({ left }) => {
  return (
    <div className="bot-card" style={left ? { left: 40 } : { right: 20 }}></div>
  );
};

export default BotCard;
