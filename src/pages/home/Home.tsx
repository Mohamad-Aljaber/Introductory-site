import { Box } from "@mui/material";
import SingleSlider from "./SingleSlider";
// import DomainSearch from "./DomainSearch";
import Services from "./Services";
import About from "./About";
import AskQuestions from "./AskQuestions";
import PersonalCards from "./PersonalCards";
const Home = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <SingleSlider />
      <Services />
      <About />
      <AskQuestions />
      <PersonalCards />
    </Box>
  );
};

export default Home;
