import { Button } from "@mui/material";
import React from "react";
import "./UI.css";
import { Link } from "react-router-dom";

const MenuButton = ({ isMenuButtonOn }) => {
  return (
    <div className="menu-button">
      <Link to={isMenuButtonOn ? "/" : "/game"}>
        <Button
          color="primary"
          variant={isMenuButtonOn ? "contained" : "outlined"}
          className={isMenuButtonOn ? "button-on" : "Mui-disabled"}
          sx={{ fontFamily: "Oswald", fontSize: "28px" }}
        >
          Menu
        </Button>
      </Link>
    </div>
  );
};

export default MenuButton;
