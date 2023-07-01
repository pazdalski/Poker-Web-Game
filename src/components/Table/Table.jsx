import React from "react";
import "./table.css";
import Card from "../Card/Card";
import logo from "../../assets/logo/logo-white.png";

const Table = ({ tableCards }) => {
  return (
    <div className="table">
      <div className="inner-table">
        <div className="table-light "></div>
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
