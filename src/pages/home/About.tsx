import { Box, Container } from "@mui/material";
import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import GppGoodIcon from "@mui/icons-material/GppGood";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import AboutTemplate from "../../components/AboutTemplate";
import CustomButton from "../../components/CustomButton";
type AboutItem = {
  heading: string;
  text: string;
  images: string;
  Direction: "row" | "row-reverse";
  List: { text: string; icon: JSX.Element }[];
};
const About: React.FC = () => {
  const { t } = useTranslation();

  const aboutItemes: AboutItem[] = [
    {
      heading: t("about.title"),
      text: t("about.description"),
      images: about1,
      Direction: "row",
      List: [
        {
          text: t("about.points.systemDevelopment"),
          icon: <SettingsOutlinedIcon />,
        },
        {
          text: t("about.points.managementEfficiency"),
          icon: <StackedBarChartOutlinedIcon />,
        },
        {
          text: t("about.points.aiOptimization"),
          icon: <MemoryOutlinedIcon />,
        },
      ],
    },
    {
      heading: t("dedicatedSupport.title"),
      text: t("dedicatedSupport.description"),
      images: about2,
      Direction: "row-reverse",
      List: [
        { text: t("dedicatedSupport.points.security"), icon: <GppGoodIcon /> },
        { text: t("dedicatedSupport.points.trust"), icon: <ThumbUpAltIcon /> },
        {
          text: t("dedicatedSupport.points.privacy"),
          icon: <VisibilityOffIcon />,
        },
      ],
    },
  ];

  return (
    <Box
      sx={{ p: 3, my: 13 }}
      id="about"
    >
      <Container>
        {aboutItemes.map((item, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AboutTemplate aboutItem={[item]} />
          </motion.section>
        ))}

        <CustomButton
          text={
            t("dedicatedSupport.contactButton") +
            " " +
            t("dedicatedSupport.phoneNumber")
          }
          icon={<PermPhoneMsgIcon />}
          link="https://wa.me/+31637718553"
        />
      </Container>
    </Box>
  );
};

export default About;
