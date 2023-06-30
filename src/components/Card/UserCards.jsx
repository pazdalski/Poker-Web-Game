import { Container, Stack } from "@mui/material";
import "./cards.css";
import { useState } from "react";

const UserCards = ({ playerCards, isPlayerOut }) => {
  const [idleAnimation, setIdleAnimation] = useState(false);

  setTimeout(() => {
    setIdleAnimation(true);
  }, 1000);

  return (
    <Container className="user-cards-container">
      <Stack direction={"row"} justifyContent={"center"}>
        <div
          className={`user-card  userCardOpeningLeftAnim ${
            (isPlayerOut && "user-card-folded",
            idleAnimation && "idleAnimationLeft")
          }`}
        >
          <img
            src={playerCards.length && `../${playerCards[0].img}`}
            className={`user-card-revealed ${
              isPlayerOut && "user-card-image-folded"
            }`}
            alt=""
          />
          <div className="shiny-texture"></div>
        </div>
        <div
          className={`user-card userCardOpeningRightAnim ${
            (isPlayerOut && "user-card-folded",
            idleAnimation && "idleAnimationRight")
          }`}
        >
          <img
            src={playerCards.length && `../${playerCards[1].img}`}
            className={`user-card-revealed ${
              isPlayerOut && "user-card-image-folded"
            }`}
            alt=""
          />
          <div className="shiny-texture"></div>
        </div>
      </Stack>
    </Container>
  );
};

export default UserCards;
