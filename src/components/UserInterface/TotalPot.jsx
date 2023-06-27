import { Card, Container, Typography } from "@mui/material";
import "./UI.css";
import logo from "../../assets/favicon.png";

const TotalPot = ({ totalPot }) => {
  return (
    <Container
      className="total-pot-container"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        variant="elevation"
        elevation={15}
        sx={{
          width: "400px",
          backgroundColor: "#162738",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "150px",
          borderBottom: " 4px solid #051627",
          p: "10px 0",
        }}
      >
        <Typography variant="h6" color="white" fontFamily={"Oswald"}>
          Total pot
        </Typography>
        <Typography
          variant="h3"
          fontFamily={"Oswald"}
          fontWeight={"bold"}
          color="#e8cba0"
        >
          <img src={logo} alt="token" style={{ width: "35px" }} />
          {totalPot}
        </Typography>
      </Card>
    </Container>
  );
};

export default TotalPot;
