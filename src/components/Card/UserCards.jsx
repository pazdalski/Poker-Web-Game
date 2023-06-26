import { Container, Stack } from "@mui/material";
import "./cards.css";
import testcard from "../../assets/PNG-cards-1.3/10_of_clubs.png";

const UserCards = () => {
  return (
    <Container className="user-cards-container">
      <Stack direction={"row"} justifyContent={"center"}>
        <div className="user-card" style={{ transform: "rotate(-12deg)" }}>
          <img src={testcard} className="user-card-revealed" alt="" />
        </div>
        <div className="user-card" style={{ transform: "rotate(12deg)" }}>
          <img src={testcard} className="user-card-revealed" alt="" />
        </div>
      </Stack>
    </Container>
  );
};

export default UserCards;
