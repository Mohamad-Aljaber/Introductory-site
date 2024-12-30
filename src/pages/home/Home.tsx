import { Box } from "@mui/material";
import SingleSlider from "../../section/SingleSlider";
import DomainSearch from "../../section/DomainSearch";
import Services from "../../section/Services";
import AskQuestions from "../../section/AskQuestions";
import About from "../../section/About";
import PersonalCards from "../../section/PersonalCards";

const Home = () => {
  return (
    <Box>
      <SingleSlider />
      <DomainSearch />
      <Services />
      <About />
      <AskQuestions />
      <PersonalCards />
    </Box>
  );
};

export default Home;
