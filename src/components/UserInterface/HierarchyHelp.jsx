import { Card, Typography } from "@mui/material";
import React, { useState } from "react";
import "./UI.css";
import hierarchyImage from "../../assets/hierarchia.webp";

const HierarchyHelp = () => {
  const [helpVisible, setHelpVisible] = useState(false);

  return (
    <>
      <Card
        className="hierarchy-help-button"
        sx={{ backgroundColor: "#99d1ac", cursor: "pointer" }}
        onMouseOver={() => {
          setHelpVisible(true);
        }}
        onMouseLeave={() => {
          setHelpVisible(false);
        }}
      >
        <Typography
          variant="button"
          fontWeight={"bold"}
          lineHeight={"25px"}
          fontSize={"22px"}
          color={"black"}
          sx={{ display: "flex", justifyContent: "center", padding: "8px 0" }}
          fontFamily={"Oswald"}
        >
          H <br />I <br />
          E <br /> R <br /> A <br /> R <br /> C <br /> H <br /> Y
        </Typography>
      </Card>
      <Card
        className="hierarchy-help-card"
        sx={helpVisible && { right: "40px" }}
        elevation={20}
      >
        <img
          src={hierarchyImage}
          alt="hierarchy guide"
          style={{ width: "100%" }}
        />
      </Card>
    </>
  );
};

export default HierarchyHelp;
