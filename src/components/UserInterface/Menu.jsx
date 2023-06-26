import { Button } from "@mui/material";
import React from "react";
import "./UI.css";

const Menu = () => {
  return (
    <div className="menu-button">
      <Button
        color="primary"
        variant="contained"
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
      >
        Menu
      </Button>
    </div>
  );
};

export default Menu;
