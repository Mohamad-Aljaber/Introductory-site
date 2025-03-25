import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const GoToWhatsApp: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 999,
        backgroundColor: "#46c559",
        borderRadius: "50%",
        boxShadow: 3,
      }}
    >
      <Tooltip
        title="WhatsApp"
        arrow
      >
        <IconButton
          component="a"
          href="https://wa.me/+31637718553"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 35 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default GoToWhatsApp;
