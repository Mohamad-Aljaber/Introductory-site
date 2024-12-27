import { Box } from "@mui/material";
import "./App.css";
// import Header from "./components/Header";
import SingleSlider from "./components/SingleSlider";
import Header from "./components/Header";
import DomainSearch from "./components/DomainSearch";
import Services from "./components/Services";
import About from "./components/About";
import AskQuestions from "./components/AskQuestions";
import Footer from "./components/Footer";
import PersonalCards from "./components/PersonalCards";

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
    </Box>
  );
}

export default App;
