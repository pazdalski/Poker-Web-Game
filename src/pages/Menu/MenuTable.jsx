import React from "react";
import logo from "../../assets/logo-white.png";
import "./menu.css";

const MenuTable = () => {
  return (
    <div className="table-menu">
      <div className="inner-table">
        <img
          src={logo}
          style={{
            position: "absolute",
            opacity: "0.05",
            width: "450px",
          }}
        />
      </div>
    </div>
  );
};

export default MenuTable;
