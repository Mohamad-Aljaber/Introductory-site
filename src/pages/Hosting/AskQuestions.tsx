import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CustomButton from "../../components/CustomButton.tsx";
import theme from "../../../public/theme/theme.ts";

// تعريف الـ interface للبيانات
interface Question {
  question: string;
  answer: string;
}

const primaryTheme = theme.palette.primary.main;
const secondaryLightTheme = theme.palette.secondary.light;

const AskQuestions = () => {
  const { t } = useTranslation();

  // جلب الأسئلة مع تحديد النوع
  const questions: Question[] = t("askQuestions.questions", {
    returnObjects: true,
  }) as Question[];

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <Box
      id="help"
      sx={{
        p: 3,
        backgroundColor: primaryTheme,
        py: 10,
        pt: 15,
        color: "#fff",
        clipPath: "polygon(0 0, 100% 5rem, 100% 100%, 0% 100%); ",
      }}
    >
      <Container>
        <Stack sx={{ alignItems: "center" }}>
          <Box
            sx={{
              textAlign: "center",
              my: 10,
              width: { xs: "100%", sm: "70%" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                my: 2,
                fontWeight: "bold",
                fontSize: { xs: "26px", sm: "30px", md: "35px" },
              }}
            >
              {t("askQuestions.sectionTitle")}
            </Typography>
            <Typography color="#A5A7C5">
              {t("askQuestions.sectionDescription")}
            </Typography>
          </Box>
          <Grid
            container
            spacing={3}
            sx={{
              justifyContent: "space-around",
              pl: 4,
              mb: 16,
              gap: 7,
            }}
          >
            {questions.map((question, index) => (
              <Grid
                item
                xs={12}
                sm={5}
                sx={{ display: "flex", gap: "20px" }}
                key={index}
                component={motion.div}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
              >
                <Typography
                  variant="body1"
                  color="#fff"
                  sx={{
                    fontSize: { xs: "20px", sm: "22px", md: "25px" },
                    fontWeight: 300,
                    color: secondaryLightTheme,
                  }}
                >
                  Q
                </Typography>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      fontWeight: "500",
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {question.question}
                  </Typography>
                  <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    {question.answer}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <CustomButton
            text={t("askQuestions.buttonText")}
            icon={null}
            link="/contact"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default AskQuestions;
