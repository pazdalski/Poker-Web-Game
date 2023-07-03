import { Stack, Typography } from "@mui/material";
import React from "react";
import "./players.css";

const PlayerNotification = ({ botNotification }) => {
  return (
    <>
      {botNotification.status && (
        <Stack
          className={`player-notification type-${botNotification.type} active`}
        >
          <Typography variant="button" color="white">
            {botNotification.message}
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default PlayerNotification;
