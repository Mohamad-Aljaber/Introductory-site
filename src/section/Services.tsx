import { Box, Container, Stack, Typography } from "@mui/material";
import theme from "../theme/theme.ts";
import SecurityIcon from "@mui/icons-material/Security";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { motion } from "motion/react";

const bgTheme = theme.palette.primary.main;
const secondaryTheme = theme.palette.secondary.main;

const services = [
  {
    heading: "AI-Powered Systems Development",
    text: "Developing advanced AI-powered systems to meet your company's needs and enhance efficiency.",
    icon: (
      <MemoryOutlinedIcon sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }} />
    ),
  },
  {
    heading: "Automated Systems for Enterprises",
    text: "Providing automated systems tailored for organizations and enterprises, ensuring seamless operations.",
    icon: (
      <SettingsOutlinedIcon
        sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }}
      />
    ),
  },
  {
    heading: "Cloud and Technical Services",
    text: "Enhancing your existing systems with cloud services and advanced technical solutions.",
    icon: (
      <CloudOutlinedIcon sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }} />
    ),
  },
  {
    heading: "Security Testing Team",
    text: "Our dedicated security team ensures the safety of your organization’s systems by conducting thorough security tests.",
    icon: <SecurityIcon sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }} />,
  },
  {
    heading: "Technology Consulting",
    text: "Expert consulting services from our specialized engineers to drive innovation in your organization.",
    icon: (
      <WorkOutlineOutlinedIcon
        sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }}
      />
    ),
  },
  {
    heading: "Marketing & Media Services",
    text: "Providing marketing and media solutions to enhance your company’s visibility and outreach.",
    icon: (
      <CampaignOutlinedIcon
        sx={{ fontSize: 70, color: secondaryTheme, pb: 3 }}
      />
    ),
  },
];

const Services = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <Box
      component="section"
      sx={{ p: 3, backgroundColor: bgTheme, pb: 13, color: "#fff" }}
    >
      <Container>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          sx={{ justifyContent: "space-around", gap: 4, flexWrap: "wrap" }}
        >
          {services.map((item, index) => (
            <Box
              key={index}
              sx={{ width: "320px" }}
              component={motion.div}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true, amount: 0.5 }}
            >
              {item.icon}
              <Typography
                variant="h3"
                color="#fff"
                sx={{
                  fontSize: { xs: "22px", sm: "26px", lg: "30px" },
                  mb: 2,
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                {item.heading}
              </Typography>
              <Typography color="#A5A7C5">{item.text}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Services;
