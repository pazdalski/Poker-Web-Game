import { Button, Card, Stack } from "@mui/material";
import React from "react";

const UserButtons = () => {
  return (
    <Stack className="user-buttons-container" direction={"row"} gap={"20px"}>
      <Button
        className="user-button"
        color="success"
        variant="contained"
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
      >
        Raise
      </Button>
      <Button
        className="user-button"
        color="error"
        variant="contained"
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
      >
        Fold
      </Button>
      <Button
        className="user-button"
        color="primary"
        variant="contained"
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
      >
        Call
      </Button>
    </Stack>
  );
};

export default UserButtons;
