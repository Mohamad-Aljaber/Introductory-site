import { Box, Container, Stack, Typography } from "@mui/material";
import theme from "../theme/theme.ts";
import hero from "../assets/images/hero_right.png";
import shape from "../assets/images/top-left-shape.png";
import CustomButton from "../components/CustomButton.tsx";
import { motion } from "motion/react";
const bgTheme = theme.palette.primary.main;
const sTextTheme = theme.palette.text.secondary;

const SingleSlider = () => {
  return (
    <Box
      component="section"
      sx={{ p: 3, backgroundColor: bgTheme, pb: 6 }}
    >
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
        >
          <motion.section
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Box>
              <Typography
                variant="body1"
                color={sTextTheme}
                mb={2}
              >
                Best provider of advanced technology and automation systems
                services
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  mb: 4,
                  fontSize: { xs: "30px", sm: "50px", lg: "70px" },
                }}
              >
                Skyline Business Technology Company{" "}
              </Typography>
              <Typography
                sx={{
                  color: "#A5A7C5",
                  mb: 5,
                  fontSize: { xs: "16px", sm: "18px", lg: "20px" },
                }}
              >
                Boost your organization's operations with detailed system
                analytics, marketing tools, security, data backups, and advanced
                technical support all in one place.
              </Typography>
              <CustomButton
                text="Start with us"
                icon={null}
              />
            </Box>
          </motion.section>
          <motion.section
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              component="img"
              src={hero}
              alt="hero_right"
              width={600}
              sx={{ display: { xs: "none", md: "block" } }}
            />
          </motion.section>
          <Box
            component="img"
            src={shape}
            alt="hero_right"
            width={600}
            sx={{
              display: { xs: "none", sm: "block" },
              position: "absolute",
              top: "-15rem",
              left: "-15rem",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default SingleSlider;
