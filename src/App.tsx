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

function App() {
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
      <Box border="1px solid green">
        <Link
          href="#"
          
          sx={{
            border: "1px solid red",
            p: 1,
            backgroundColor: "red",
            borderRadius: "50%",
          }}
        >
          <CallMissedIcon />
        </Link>
      </Box>
    </Box>
  );
}

export default App;
