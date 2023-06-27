import { Button, Stack } from "@mui/material";
import React from "react";

const UserButtons = ({ playerChoices }) => {
  return (
    <Stack className="user-buttons-container" direction={"row"} gap={"20px"}>
      <Button
        className="user-button"
        color="success"
        variant={playerChoices.raise ? "contained" : "disabled"}
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
      >
        Raise
      </Button>
      <Button
        className="user-button"
        color="error"
        variant={playerChoices.fold ? "contained" : "disabled"}
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
      >
        Fold
      </Button>
      <Button
        className="user-button"
        color="primary"
        variant={playerChoices.call ? "contained" : "disabled"}
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
      >
        Call
      </Button>
    </Stack>
  );
};

export default UserButtons;
