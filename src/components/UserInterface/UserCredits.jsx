import React from "react";
import "./UI.css";
import { Card, Container, Stack, Typography } from "@mui/material";

const UserCredits = () => {
  return (
    <Card
      elevation={20}
      className="user-credits-container"
      sx={{ background: "#162738" }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        color={"white"}
      >
        <Typography variant="h6" color="white" fontFamily={"Oswald"}>
          Your Credits
        </Typography>
        <Typography variant="h3" color="#e8cba0" fontFamily={"Oswald"}>
          $12600
        </Typography>
      </Stack>
    </Card>
  );
};

export default UserCredits;
