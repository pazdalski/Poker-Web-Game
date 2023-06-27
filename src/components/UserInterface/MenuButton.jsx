import { Button } from "@mui/material";
import React from "react";
import "./UI.css";
import { Link } from "react-router-dom";

const MenuButton = () => {
  return (
    <div className="menu-button">
      <Link to={"/"}>
        <Button
          color="primary"
          variant="contained"
          sx={{ fontFamily: "Oswald", fontSize: "28px" }}
        >
          Menu
        </Button>
      </Link>
    </div>
  );
};

export default MenuButton;
