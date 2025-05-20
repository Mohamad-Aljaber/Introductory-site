import { Box } from "@mui/material";
import SingleSlider from "./SingleSlider";
import Services from "./Services";
import Slider from "./Slider";
import About from "./About";
import AskQuestions from "./AskQuestions";
import CompanyOverview from "./CompanyOverview";

const Hosting = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <SingleSlider />
      <Services />
      <Slider />
      <About />
      <AskQuestions />
      <CompanyOverview />
    </Box>
  );
};

export default Hosting;
