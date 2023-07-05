import {
  Button,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Stack,
} from "@mui/material";
import React from "react";
import logo from "../../assets/logo-white.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { Link } from "react-router-dom";
import "./menu.css";
import MenuTable from "./MenuTable";

const Menu = ({
  setBotReactionTimeChoice,
  botReactionTimeChoice,
  isSoundOn,
  setIsSoundOn,
}) => {
  return (
    <Stack direction={"row"}>
      <Stack
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "#495d6f90",
          height: "100vh",
          width: "50vw",
        }}
      >
        <img
          src={logo}
          alt="placeholder logo"
          style={{ width: "450px", margin: "40px 0" }}
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
        <div className="reaction-time-button">
          BOT'S REACTION TIME
          <Stack className="reaction-time-choice">
            <ToggleButtonGroup
              color="warning"
              value={botReactionTimeChoice}
              exclusive
              aria-label="Platform"
              sx={{ width: "450px" }}
            >
              <ToggleButton
                sx={{ color: "white", width: "113px" }}
                fullWidth
                value="0"
                onClick={() => {
                  setBotReactionTimeChoice("0");
                }}
              >
                Instant
              </ToggleButton>
              <ToggleButton
                sx={{ color: "white", width: "113px" }}
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
                  width: "113px",
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
                sx={{ color: "white", width: "114px" }}
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
        </div>
        <ToggleButtonGroup
          color="primary"
          value={isSoundOn}
          exclusive
          variant="contained"
          sx={{ width: "450px", height: "60px" }}
        >
          <ToggleButton
            value={true}
            sx={{ width: "225px", color: "white" }}
            onClick={() => {
              setIsSoundOn(true);
            }}
          >
            <VolumeUpIcon sx={{ mr: "4px" }} />
            Sounds ON
          </ToggleButton>
          <ToggleButton
            value={false}
            sx={{
              width: "225px",
              color: "white",
            }}
            onClick={() => {
              setIsSoundOn(false);
            }}
          >
            <VolumeOffIcon sx={{ mr: "4px" }} />
            Sounds OFF
          </ToggleButton>
        </ToggleButtonGroup>

        <Button
          startIcon={<GitHubIcon sx={{ width: "34px", height: "34px" }} />}
          variant="contained"
          color="inherit"
          sx={{ width: "450px", fontSize: "28px", mt: "128px" }}
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
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <MenuTable />
      </Stack>
    </Stack>
  );
};

export default Menu;
