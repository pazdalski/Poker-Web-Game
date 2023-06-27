import { Container, Stack } from "@mui/material";
import "./cards.css";

const UserCards = ({ playerCards }) => {
  return (
    <Container className="user-cards-container">
      <Stack direction={"row"} justifyContent={"center"}>
        <div className="user-card" style={{ transform: "rotate(-12deg)" }}>
          <img
            src={playerCards.length && `../${playerCards[0].img}`}
            className="user-card-revealed"
            alt=""
          />
        </div>
        <div className="user-card" style={{ transform: "rotate(12deg)" }}>
          <img
            src={playerCards.length && `../${playerCards[1].img}`}
            className="user-card-revealed"
            alt=""
          />
        </div>
      </Stack>
    </Container>
  );
};

export default UserCards;
