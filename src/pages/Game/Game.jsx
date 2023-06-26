import React from "react";
import Players from "../../components/Players/Players";
import Table from "../../components/Table/Table";
import { Container } from "@mui/material";
import UserCards from "../../components/Card/UserCards";

const Game = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Table />
      <Players />
      <UserCards />
    </Container>
  );
};

export default Game;
