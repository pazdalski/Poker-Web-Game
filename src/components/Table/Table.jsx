import React from "react";
import "./table.css";
import Card from "../Card/Card";

const Table = () => {
  return (
    <div className="table">
      <div className="inner-table">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Table;
