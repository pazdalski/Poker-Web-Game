import React from "react";
import "./table.css";
import Card from "../Card/Card";

const Table = ({ tableCards }) => {
  return (
    <div className="table">
      <div className="inner-table">
        {tableCards?.length &&
          tableCards.map((card, i) => {
            return <Card key={i} card={card} />;
          })}
      </div>
    </div>
  );
};

export default Table;
