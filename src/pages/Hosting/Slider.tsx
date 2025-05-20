import { Box, Container, Typography } from "@mui/material";
import theme from "../../../public/theme/theme";
import PricingSection from "./PricingSection";
import { useTranslation } from "react-i18next";

const Slider = () => {
  const { t } = useTranslation();
  const primaryTheme = theme.palette.primary.main;
  const secondaryTheme = theme.palette.secondary.main;
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
            {t("resource_package_title")}
          </Typography>
          <Typography
            color="white"
            variant="h5"
          >
            {t("resource_package_description")}
          </Typography>
          <Typography
            sx={{ color: secondaryTheme, py: 2 }}
            variant="h5"
          >
            {t("resource_package_custom_note")}
          </Typography>
        </Box>
        <PricingSection />
      </Container>
    </Box>
  );
};

export default Slider;
