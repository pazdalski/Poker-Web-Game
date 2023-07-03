import {
  Container,
  Button,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
} from "@mui/material";
import React from "react";
import logo from "../../assets/logo/logo-color.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const Menu = ({ setBotReactionTimeChoice, botReactionTimeChoice }) => {
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
      <Stack>
        <Typography variant="button" color="white">
          Bot's reaction time
        </Typography>
        <ToggleButtonGroup
          color="success"
          value={botReactionTimeChoice}
          exclusive
          aria-label="Platform"
          sx={{ width: "450px" }}
        >
          <ToggleButton
            sx={{ color: "white", width: "112.5px" }}
            fullWidth
            value="0"
            onClick={() => {
              setBotReactionTimeChoice("0");
            }}
          >
            Instant
          </ToggleButton>
          <ToggleButton
            sx={{ color: "white", width: "112.5px" }}
            fullWidth
            value="1"
            onClick={() => {
              setBotReactionTimeChoice("1");
            }}
          >
            Fast
          </ToggleButton>
          <ToggleButton
            sx={{
              color: "white",
              width: "112.5px",
              display: "flex",
              flexDirection: "column",
            }}
            fullWidth
            value="2"
            onClick={() => {
              setBotReactionTimeChoice("2");
            }}
          >
            Human-like <br />
            <Typography variant="button" color="gold" fontSize={8}>
              Recommended
            </Typography>
          </ToggleButton>
          <ToggleButton
            sx={{ color: "white", width: "112.5px" }}
            fullWidth
            value="3"
            onClick={() => {
              setBotReactionTimeChoice("3");
            }}
          >
            Analyze
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

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
