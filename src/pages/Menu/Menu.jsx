import { Container, Button, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        backgroundColor: "#141b16",
        height: "100vh",
      }}
    >
      <img
        src={logo}
        alt="placeholder logo"
        style={{ width: "250px", margin: "40px 0" }}
      />
      <Link to={"/game"}>
        <Button
          variant="contained"
          color="success"
          sx={{ width: "450px", fontSize: "28px" }}
        >
          Play
        </Button>
      </Link>
      <Button
        startIcon={<GitHubIcon sx={{ width: "34px", height: "34px" }} />}
        variant="contained"
        color="inherit"
        sx={{ width: "450px", fontSize: "28px" }}
        href="https://github.com/pazdalski"
        target="_blank"
      >
        <Typography
          variant="button"
          color="initial"
          fontWeight={"bold"}
          fontSize={24}
        >
          GITHUB
        </Typography>
      </Button>
    </Container>
  );
};

export default Menu;
