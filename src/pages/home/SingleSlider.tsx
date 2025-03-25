import { Box, Container, Stack, Typography } from "@mui/material";
import theme from "../../../public/theme/theme.ts";
import hero from "../../assets/images/hero_right.png";
import CustomButton from "../../components/CustomButton.tsx";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useTypewriter } from "react-simple-typewriter";

const primaryTheme = theme.palette.primary.main;
const secondaryTheme = theme.palette.secondary.main;
const secondaryLightTheme = theme.palette.secondary.light;

// const sTextTheme = theme.palette.text.secondary;

const SingleSlider = () => {
  const { t, i18n } = useTranslation();

  const [text] = useTypewriter({
    words: [t("slider.title")], // جلب العنوان من ملفات الترجمة
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const highlightText = (text: string) => {
    return text.replace(
      "Skyline",
      `<span style='color: ${secondaryLightTheme};font-size:55px'>Skyline</span>`
    );
  };

  // تحديد اتجاه النص بناءً على اللغة المختارة
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <Box
      component="section"
      sx={{ p: 3, backgroundColor: primaryTheme, pb: 6 }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          sx={{ overflow: "hidden", textAlign: textAlignValue }}
        >
          <motion.section
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Box>
              <Typography
                variant="body1"
                color={secondaryTheme}
                mb={2}
              >
                {t("slider.description")}
              </Typography>
              <Box
                sx={{
                  minHeight: {
                    xs: "230px",
                    sm: "140px",
                    md: "230px",
                    lg: "120px",
                  },
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "bold",
                    color: "#fff",
                    mb: 4,
                    fontSize: "45px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: highlightText(text),
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: "#A5A7C5",
                  mb: 5,
                  fontSize: { xs: "16px", sm: "18px", lg: "20px" },
                }}
              >
                {t("slider.paragraph")}
              </Typography>

              <CustomButton
                text={t("slider.button")}
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
        </Stack>
      </Container>
    </Box>
  );
};

export default SingleSlider;
