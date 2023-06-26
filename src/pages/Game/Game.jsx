import React from "react";
import Players from "../../components/Players/Players";
import Table from "../../components/Table/Table";
import { Container } from "@mui/material";
import UserCards from "../../components/Card/UserCards";
import TotalPot from "../../components/UserInterface/TotalPot";
import HierarchyHelp from "../../components/UserInterface/HierarchyHelp";
import UserCredits from "../../components/UserInterface/UserCredits";
import UserButtons from "../../components/UserInterface/UserButtons";
import Menu from "../../components/UserInterface/Menu";

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
      <TotalPot />
      <HierarchyHelp />
      <UserCredits />
      <UserButtons />
      <Menu />
    </Container>
  );
};

export default Game;
