import { Box, Link } from "@mui/material";
import "./App.css";
import SingleSlider from "./components/SingleSlider";
import Header from "./components/Header";
import DomainSearch from "./components/DomainSearch";
import Services from "./components/Services";
import About from "./components/About";
import AskQuestions from "./components/AskQuestions";
import Footer from "./components/Footer";
import PersonalCards from "./components/PersonalCards";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import theme from "./theme/theme";
import { useEffect, useState } from "react";

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
      <SingleSlider />
      <DomainSearch />
      <Services />
      <About />
      <AskQuestions />
      <PersonalCards />
      <Footer />
      <Link
        href="#"
        sx={{
          position: isSticky ? "fixed" : "static",

          transition: "all 15s ease-in-out",
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
    </Box>
  );
}

export default App;
