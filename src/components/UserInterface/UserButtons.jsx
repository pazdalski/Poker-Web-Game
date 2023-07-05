import { Button, Slider, Stack, Typography, IconButton } from "@mui/material";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import React, { useState } from "react";

const UserButtons = ({
  playerChoices,
  currentBotAI,
  setPlayerChoices,
  currentCall,
  playerCredits,
  setPlayerRaise,
  playerRaise,
}) => {
  const resetPlayerChoices = () => {
    setPlayerChoices({
      raise: false,
      fold: false,
      call: false,
    });
  };

  const [toggleSlider, setToggleSlider] = useState(false);
  return (
    <Stack className="user-buttons-container" direction={"row"} gap={"20px"}>
      <Slider
        aria-label="Player's raise"
        defaultValue={30}
        valueLabelDisplay="auto"
        step={25}
        className="raise-slider"
        min={25}
        max={playerCredits}
        color="success"
        value={playerRaise}
        sx={{
          position: "absolute",
          left: "50px",
          bottom: "60px",
          width: "375px",
          backgroundColor: "#e0e0e020",
          zIndex: 100,
          visibility: `${toggleSlider ? "visible" : "hidden"}`,
          opacity: `${toggleSlider ? "1" : "0"}`,
        }}
        onChange={(e) => {
          setPlayerRaise(e.target.value);
        }}
      />
      <IconButton
        onClick={() => {
          setToggleSlider(!toggleSlider);
        }}
        color="success"
        sx={{
          position: "absolute",
          bottom: "50px",
          opacity: `${
            playerChoices.raise && playerCredits !== 0 ? "1" : "0.25"
          }`,
        }}
        disabled={playerChoices.raise && playerCredits !== 0 ? false : true}
      >
        <LinearScaleIcon
          sx={{
            color: `${toggleSlider ? "success" : "white"}`,
            background: "#0c0c0c25",
            borderRadius: "25px",
          }}
          fontSize="large"
        />
      </IconButton>
      <Button
        className="user-button raise-button"
        color="success"
        variant={
          playerChoices.raise && playerCredits !== 0 ? "contained" : "disabled"
        }
        sx={{
          fontFamily: "Oswald",
          fontSize: "28px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
        onClick={() => {
          resetPlayerChoices();
          setToggleSlider(false);
          currentBotAI("raise");
          setTimeout(() => {
            setPlayerRaise(25);
          }, 50);
        }}
      >
        Raise
        <Typography variant="h6" fontWeight={"400"} color="#e0e0e0">
          {playerChoices.raise && playerCredits !== 0 ? playerRaise : ""}
        </Typography>
      </Button>
      <Button
        className="user-button"
        color="error"
        variant={playerChoices.fold ? "contained" : "disabled"}
        sx={{ fontFamily: "Oswald", fontSize: "28px" }}
        onClick={() => {
          resetPlayerChoices();
          setToggleSlider(false);
          currentBotAI("fold");
        }}
      >
        Fold
      </Button>
      <Button
        className="user-button"
        color="primary"
        variant={playerChoices.call ? "contained" : "disabled"}
        sx={{
          fontFamily: "Oswald",
          fontSize: "28px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
        onClick={() => {
          resetPlayerChoices();
          setToggleSlider(false);
          currentBotAI("call");
        }}
      >
        Call{" "}
        <Typography variant="h6" fontWeight={"400"} color="#e0e0e0">
          {playerChoices.call && currentCall}
        </Typography>
      </Button>
    </Stack>
  );
};

export default UserButtons;
