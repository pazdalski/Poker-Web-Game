import { Card, Typography } from "@mui/material";
import React, { useState } from "react";
import "./UI.css";
import hierarchyImage from "../../assets/hierarchy.jpg";
import HelpIcon from "@mui/icons-material/Help";

const HierarchyHelp = () => {
  const [helpVisible, setHelpVisible] = useState(false);

  return (
    <>
      <Card
        className="hierarchy-help-button"
        sx={{ backgroundColor: "#162738", cursor: "pointer" }}
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
          color={"#e8cba0"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 0",
          }}
          fontFamily={"Oswald"}
        >
          H <br />E <br />
          L <br /> P <br /> <HelpIcon />
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
