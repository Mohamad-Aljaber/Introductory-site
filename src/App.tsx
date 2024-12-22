import { Box } from "@mui/material";
import "./App.css";
// import Header from "./components/Header";
import SingleSlider from "./components/SingleSlider";
import Header from "./components/Header";
import DomainSearch from "./components/DomainSearch";

function App() {
  return (
    <Box>
      <Header />
      <SingleSlider />
      <DomainSearch/>
    </Box>
  );
}

export default App;
