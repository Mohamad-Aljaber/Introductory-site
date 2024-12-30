import { Box, Link } from "@mui/material";
import "./App.css";
import Header from "./section/Header";

import Footer from "./section/Footer";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import theme from "./theme/theme";
import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";

const textTheme = theme.palette.text.primary;

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    setIsSticky(window.scrollY > 700);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />

      {isSticky && (
        <Link
          href="#"
          sx={{
            position: "fixed",
            transition: "all 1.5s ease-in-out",
            p: 1.5,
            backgroundColor: textTheme,
            color: "#fff",
            borderRadius: "50%",
            bottom: "20px",
            right: "30px",
            zIndex: "1000",
            boxShadow: "0 0 10px 3px rgba(108,98,98,0.2)",
            display: "flex",
          }}
        >
          <CallMissedIcon sx={{ width: "2rem", height: "2rem" }} />
        </Link>
      )}
    </Box>
  );
}

export default App;
