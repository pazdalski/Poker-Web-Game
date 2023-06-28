import { Container, Stack } from "@mui/material";
import "./cards.css";

const UserCards = ({ playerCards, isPlayerOut }) => {
  return (
    <Container className="user-cards-container">
      <Stack direction={"row"} justifyContent={"center"}>
        <div
          className={`user-card ${isPlayerOut && "user-card-folded"}`}
          style={{ transform: "rotate(-12deg)" }}
        >
          <img
            src={playerCards.length && `../${playerCards[0].img}`}
            className={`user-card-revealed ${
              isPlayerOut && "user-card-image-folded"
            }`}
            alt=""
          />
        </div>
        <div
          className={`user-card ${isPlayerOut && "user-card-folded"}`}
          style={{
            transform: "rotate(12deg)",
            boxShadow: "0 0 15px 5px #0c0c0c75",
          }}
        >
          <img
            src={playerCards.length && `../${playerCards[1].img}`}
            className={`user-card-revealed ${
              isPlayerOut && "user-card-image-folded"
            }`}
            alt=""
          />
        </div>
      </Stack>
    </Container>
  );
};

export default UserCards;
