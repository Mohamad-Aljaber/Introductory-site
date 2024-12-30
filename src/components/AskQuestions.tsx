import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import theme from "../theme/theme.ts";
import CustomButton from "./CustomButton.tsx";

const primaryTheme = theme.palette.primary.main;
const questions = [
  {
    heading: "How can AI improve my company's operations?",
    text: "Skyline's AI-driven systems help automate processes, optimize decision-making, and improve resource allocation, leading to more efficient and effective business operations.",
  },
  {
    heading: "What type of cloud services does Skyline offer?",
    text: "We provide scalable cloud solutions designed to integrate seamlessly with your current systems, enhancing performance, security, and flexibility.",
  },
  {
    heading: "How does Skyline ensure data security?",
    text: "Our solutions include advanced security protocols and regular system testing to safeguard your data and ensure privacy in all your business operations.",
  },
  {
    heading: "What kind of technological consulting does Skyline provide?",
    text: "Our team of experts provides consulting services to help you choose and implement the right technological solutions to optimize your business and drive growth.",
  },
];

const AskQuestions = () => {
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
              Frequently Asked Questions
            </Typography>
            <Typography color="#A5A7C5">
              At Skyline, we offer advanced technological and software solutions
              to empower your business. From AI-driven systems to cloud
              services, our expert team is ready to support you every step of
              the way.
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
                sx={{ position: "relative" }}
                key={index}
                component={motion.div}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    fontWeight: "500",
                    mb: 2,
                    lineHeight: 1.3,
                    "&::after": {
                      content: '"Q."',
                      position: "absolute",
                      left: "-20px",
                      top: "25px",
                      fontSize: { xs: "20px", sm: "22px", md: "25px" },
                      fontWeight: 300,
                    },
                  }}
                >
                  {question.heading}
                </Typography>
                <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
                  {question.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <CustomButton
            text={"Go to Support"}
            icon={null}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default AskQuestions;
