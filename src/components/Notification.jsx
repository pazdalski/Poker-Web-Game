import { Card, Typography } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./notification.css";

const Notification = ({ msg }) => {
  return (
    <Card
      sx={{
        position: "absolute",
        top: "50px",
        right: "200px",
        height: "50px",
        width: "400px",
        backgroundColor: "#162738",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        boxShadow: "0 0 15px 5px #0c0c0c90",
      }}
      className="notificaiton-animation"
    >
      <Typography
        variant="button"
        color="#e8cba0"
        sx={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <InfoIcon sx={{ width: "20px" }} /> {msg}
      </Typography>
    </Card>
  );
};

export default Notification;
