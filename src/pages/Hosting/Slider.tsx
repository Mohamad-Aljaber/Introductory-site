import { Box, Container, Typography } from "@mui/material";
import theme from "../../../public/theme/theme";
import PricingSection from "./PricingSection";

const Slider = () => {
  const primaryTheme = theme.palette.primary.main;
  return (
    <Box
      sx={{
        backgroundColor: primaryTheme,
      }}
    >
      <Container>
        <Box textAlign="center">
          <Typography
            variant="h2"
            sx={{
              animation: "fadeInLeft 0.6s ease-in-out",
              fontWeight: "bold",
              color: "white",
              py: 4,
            }}
          >
            Choose plan which fit for you
          </Typography>
          <Typography color="white">
            Supercharge your WordPress hosting with detailed website analytics,
            marketing tools. Our experts are just part of the reason Bluehost is
            the ideal home for your WordPress website. We're here to help you
            succeed!
          </Typography>
        </Box>
        <PricingSection />
      </Container>
    </Box>
  );
};

export default Slider;
