import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Grid, Typography } from "@mui/material";
import theme from "../../../public/theme/theme";

const Slider: React.FC = () => {
  const { t } = useTranslation();
  const primaryTheme = theme.palette.primary.main;
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url('/assets/img/hero/slider-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "60vh", md: "30vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: primaryTheme,
      }}
    >
      <Container>
        <Grid
          container
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            md={9}
          >
            <Box textAlign="center">
              <Typography
                variant="h2"
                sx={{
                  animation: "fadeInLeft 0.6s ease-in-out",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {t("Business")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Slider;
