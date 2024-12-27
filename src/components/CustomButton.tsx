import { Button } from "@mui/material";
import React from "react";

interface ButtonProps {
  text: string;
  icon: JSX.Element | null;
  width?: string;
}
const CustomButton: React.FC<ButtonProps> = ({ text, icon, width }) => {
  return (
    <Button
      variant="contained"
      startIcon={icon}
      sx={{
        background: "linear-gradient(to bottom, #a077ff 0%, #ef67ff 100%);",
        fontWeight: "bold",
        borderRadius: "10px",
        padding: "15px 31px",
        textTransform: "none",
        fontSize: "18px",
        width: { width },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
