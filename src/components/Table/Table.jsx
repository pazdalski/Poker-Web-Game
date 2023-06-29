import React from "react";
import "./table.css";
import Card from "../Card/Card";
import StyleIcon from "@mui/icons-material/Style";
import logo from "../../assets/logo.png";

const Table = ({ tableCards }) => {
  return (
    <div className="table">
      <div className="inner-table">
        <img
          src={
            "https://www.vgw.co/wp-content/uploads/2021/07/global-pocker.png"
          }
          style={{ position: "absolute", opacity: "0.02", width: "450px" }}
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
