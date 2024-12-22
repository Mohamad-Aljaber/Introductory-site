import { Box } from "@mui/material";
import "./App.css";
// import Header from "./components/Header";
import SingleSlider from "./components/SingleSlider";
import Header from "./components/Header";
import DomainSearch from "./components/DomainSearch";
import Services from "./components/Services";

function App() {
  return (
    <Box>
      <Header />
      <SingleSlider />
      <DomainSearch />
      <Services />
    
    </Box>
  );
}

export default App;
