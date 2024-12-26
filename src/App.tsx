import { Box } from "@mui/material";
import "./App.css";
// import Header from "./components/Header";
import SingleSlider from "./components/SingleSlider";
import Header from "./components/Header";
import DomainSearch from "./components/DomainSearch";
import Services from "./components/Services";
import About from "./components/About";
import AskQuestions from "./components/AskQuestions";

function App() {
  return (
    <Box>
      <Header />
      <SingleSlider />
      <DomainSearch />
      <Services />
      <About />
      <AskQuestions />
    </Box>
  );
}

export default App;
