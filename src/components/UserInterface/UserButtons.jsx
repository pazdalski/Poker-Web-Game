import { Button, Stack } from "@mui/material";
import React from "react";

const UserButtons = ({ playerChoices, currentBotAI, setPlayerChoices }) => {
  const resetPlayerChoices = () => {
    setPlayerChoices({
      raise: false,
      fold: false,
      call: false,
    });
  };

  return (
    <Stack className="user-buttons-container" direction={"row"} gap={"20px"}>
      <Button
        className="user-button"
        color="success"
        variant={playerChoices.raise ? "contained" : "disabled"}
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
        onClick={() => {
          resetPlayerChoices();
          currentBotAI("raise");
        }}
      >
        Raise
      </Button>
      <Button
        className="user-button"
        color="error"
        variant={playerChoices.fold ? "contained" : "disabled"}
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
        onClick={() => {
          resetPlayerChoices();
          currentBotAI("fold");
        }}
      >
        Fold
      </Button>
      <Button
        className="user-button"
        color="primary"
        variant={playerChoices.call ? "contained" : "disabled"}
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
        onClick={() => {
          resetPlayerChoices();
          currentBotAI("call");
        }}
      >
        Call
      </Button>
    </Stack>
  );
};

export default UserButtons;
