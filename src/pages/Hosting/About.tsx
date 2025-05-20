import { Box, Container } from "@mui/material";
import React from "react";
import SpeedIcon from '@mui/icons-material/Speed';
// import SecurityIcon from '@mui/icons-material/Security';
// import BackupIcon from '@mui/icons-material/Backup';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import BackupIcon from '@mui/icons-material/Backup';


// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
// import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import GppGoodIcon from "@mui/icons-material/GppGood";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import AboutTemplate from "../../components/AboutTemplate";
import CustomButton from "../../components/CustomButton";
import theme from "../../../public/theme/theme";
type AboutItem = {
  heading: string;
  text: string;
  images: string;
  Direction: "row" | "row-reverse";
  List: { title: string; description: string; icon: JSX.Element }[];
};
const About: React.FC = () => {
  const { t } = useTranslation();
  const primaryTheme = theme.palette.primary.main;

  const aboutItemes: AboutItem[] = [
    {
      heading: t("servers.title"),
      text: t("servers.description"),
      images: about1,
      Direction: "row",
      List: [
        {
          title: t("servers.features.performance.title"),
          description: t("servers.features.performance.description"),
          icon: (
            <SpeedIcon sx={{ fontSize: "40px", color: primaryTheme }} />
          ),
        },
        {
          title: t("servers.features.security.title"),
          description: t("servers.features.security.description"),
          icon: (
            <SecurityIcon sx={{ fontSize: "40px", color: primaryTheme }} />
          ),
        },
        {
          title: t("servers.features.backup.title"),
          description: t("servers.features.backup.description"),
          icon: (
            <BackupIcon sx={{ fontSize: "40px", color: primaryTheme }} />
          ),
        },
        {
          title: t("servers.features.availability.title"),
          description: t("servers.features.availability.description"),
          icon: (
            <AccessTimeIcon sx={{ fontSize: "40px", color: primaryTheme }} />
          ),
        },
        {
          title: t("servers.features.support.title"),
          description: t("servers.features.support.description"),
          icon: (
            <SupportAgentIcon sx={{ fontSize: "40px", color: primaryTheme }} />
          ),
        },
      ],
    },
    {
      heading: t("security.title"),
      text: t("security.description"),
      images: about2,
      Direction: "row-reverse",
      List: [
        {
          title: t("security.features.layers.title"),
          description: t("security.features.layers.description"),
          icon: (
            <SecurityIcon sx={{ fontSize: "40px", color: primaryTheme }} />
          ),
        },
        {
          title: t("security.features.encryption.title"),
          description: t("security.features.encryption.description"),
          icon: (
            <EnhancedEncryptionIcon sx={{ fontSize: "40px", color: primaryTheme }} />
          ),
        },
        {
          title: t("security.features.monitoring.title"),
          description: t("security.features.monitoring.description"),
          icon: (
            <MonitorHeartIcon sx={{ fontSize: "40px", color: primaryTheme }} />
          ),
        },
        {
          title: t("security.features.privacy.title"),
          description: t("security.features.privacy.description"),
          icon: (
            <PrivacyTipIcon sx={{ fontSize: "40px", color: primaryTheme }} />
          ),
        },
        {
          title: t("security.features.backup.title"),
          description: t("security.features.backup.description"),
          icon: (
            <BackupIcon sx={{ fontSize: "40px", color: primaryTheme }} />
          ),
        },
      ],
    }
    
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
