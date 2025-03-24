import { Box, Container } from "@mui/material";
import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import GppGoodIcon from "@mui/icons-material/GppGood";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { motion } from "motion/react";
import AboutTemplate from "../../components/AboutTemplate";
import CustomButton from "../../components/CustomButton";
type AboutListItem = {
  text: string;
  icon: JSX.Element;
};
type AboutItem = {
  heading: string;
  text: string;
  images: string;
  Direction: "row" | "row-reverse";
  List: AboutListItem[];
};
const aboutItemes: AboutItem[] = [
  {
    heading: "Building Systems for Enterprises",
    text: "We specialize in building advanced systems for companies aiming to enhance operations, improve management, and optimize resources. Our solutions also integrate artificial intelligence to boost decision-making and streamline processes.",
    images: about1,
    Direction: "row",
    List: [
      { text: "Improve Management", icon: <SettingsOutlinedIcon /> },
      { text: "Optimize Resources", icon: <StackedBarChartOutlinedIcon /> },
      { text: "Streamline Processes", icon: <MemoryOutlinedIcon /> },
    ],
  },
  {
    heading: "Security, Trust, and Privacy",
    text: "At Skyline, we prioritize the security, trust, and privacy of our clients Our systems are designed to protect your data with advanced security measures, ensuring your business operates safely and confidently. Our commitment to privacy means your information is handled with the utmost care.",
    images: about2,
    Direction: "row-reverse",
    List: [
      {
        text: "Advanced security protocols to protect your data and systems.",
        icon: <GppGoodIcon />,
      },
      {
        text: "Building trust through reliable and transparent services.",
        icon: <ThumbUpAltIcon />,
      },
      {
        text: "Ensuring privacy and confidentiality of client information.",
        icon: <VisibilityOffIcon />,
      },
    ],
  },
];

const About: React.FC = () => {
  return (
    <Box
      sx={{ p: 3, my: 13 }}
      id="about"
    >
      <Container>
        {aboutItemes.map((item, index) => (
          <motion.section
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AboutTemplate
              key={index}
              aboutItem={[item]}
            />
          </motion.section>
        ))}

        <CustomButton
          text=" +352 681 555 826"
          icon={<PermPhoneMsgIcon />}
        />
      </Container>
    </Box>
  );
};

export default About;
