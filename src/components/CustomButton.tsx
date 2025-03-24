import { Button } from "@mui/material";
import React from "react";
import theme from "../../public/theme/theme";

interface ButtonProps {
  text: string;
  icon: JSX.Element | null;
  width?: string;
}
const primaryTheme = theme.palette.primary.main;
const secondaryTheme = theme.palette.secondary.main;
const CustomButton: React.FC<ButtonProps> = ({ text, icon, width }) => {
  return (
    <Button
      variant="contained"
      startIcon={icon}
      sx={{
        background: `linear-gradient(to top,${primaryTheme}  0%, ${secondaryTheme}  100%);`,
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
