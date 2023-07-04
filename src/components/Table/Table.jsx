import React, { useEffect, useState } from "react";
import "./table.css";
import Card from "../Card/Card";
import logo from "../../assets/logo/logo-white.png";
const CHIPS_INFO = [
  "./chips/Group0.png",
  "./chips/Group50.png",
  "./chips/Group100.png",
  "./chips/Group250.png",
  "./chips/Group500.png",
  "./chips/Group750.png",
  "./chips/Group1000.png",
];

const Table = ({ tableCards, totalPot }) => {
  const [amountOfChips, setAmountOfChips] = useState(0);
  const [animatedChips, setAnimatedChips] = useState(false);

  const checkAmountOfChips = () => {
    if (totalPot >= 1000) {
      setAmountOfChips(6);
    } else if (totalPot >= 750) {
      setAmountOfChips(5);
    } else if (totalPot >= 500) {
      setAmountOfChips(4);
    } else if (totalPot >= 250) {
      setAmountOfChips(3);
    } else if (totalPot >= 100) {
      setAmountOfChips(2);
    } else if (totalPot >= 50) {
      setAmountOfChips(1);
    } else if (totalPot >= 0) {
      setAmountOfChips(0);
    }
  };
  useEffect(checkAmountOfChips, [totalPot]);
  useEffect(() => {
    setAnimatedChips(false);

    setTimeout(() => {
      setAnimatedChips(true);
    }, 200);
  }, [amountOfChips]);

  return (
    <div className="table">
      <div className="inner-table">
        <div className="table-light"></div>
        <div className={`chips ${animatedChips && "animated"}`}>
          <img src={CHIPS_INFO[amountOfChips]} alt="chips" />
        </div>

        <img
          src={logo}
          style={{
            position: "absolute",
            opacity: "0.05",
            width: "550px",
          }}
        />
        {tableCards?.length &&
          tableCards.map((card, i) => {
            return <Card key={i} card={card} revealed={true} />;
          })}
      </div>
    </div>
  );
};

export default Table;
