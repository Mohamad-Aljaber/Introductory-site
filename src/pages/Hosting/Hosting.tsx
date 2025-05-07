import { Box } from "@mui/material";
import SingleSlider from "../home/SingleSlider";
import Services from "../home/Services";
import About from "../home/About";
import CompanyOverview from "../home/CompanyOverview";
import AskQuestions from "../home/AskQuestions";
import Slider from "./Slider";

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
