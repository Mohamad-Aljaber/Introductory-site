import { Box, Container, Typography, Grid, Link } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";

import { Link as RouterLink } from "react-router-dom"; // تأكد من استيراده

// import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { motion } from "framer-motion";
import theme from "../../../public/theme/theme";
import { useTranslation } from "react-i18next";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";

const primaryTheme = theme.palette.primary.main;
const secondaryLightTheme = theme.palette.secondary.light;

const Services = () => {
  const { t, i18n } = useTranslation();
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  const services = [
    {
      key: "ai",
      icon: (
        <MemoryOutlinedIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
      title: t("features.ai.title"),
      description: t("features.ai.description"),
    },
    {
      key: "automated",
      icon: (
        <SettingsOutlinedIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
      title: t("features.automated.title"),
      description: t("features.automated.description"),
    },
    {
      key: "cloud",
      icon: (
        <CloudOutlinedIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
      title: t("features.cloud.title"),
      description: t("features.cloud.description"),
      path: "Hosting",
    },
    {
      key: "security",
      icon: (
        <SecurityIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
      title: t("features.security.title"),
      description: t("features.security.description"),
    },
    // {
    //   key: "consulting",
    //   icon: (
    //     <WorkOutlineOutlinedIcon
    //       sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
    //     />
    //   ),
    //   title: t("features.consulting.title"),
    //   description: t("features.consulting.description"),
    // },
    {
      key: "marketing",
      icon: (
        <CampaignOutlinedIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
      title: t("features.marketing.title"),
      description: t("features.marketing.description"),
    },
    {
      key: "mobile",
      icon: (
        <MobileFriendlyIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
      title: t("features.mobile.title"),
      description: t("features.mobile.description"),
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        p: 3,
        backgroundColor: primaryTheme,
        pt: 13,
        pb: 6,
        color: "#fff",
        textAlign: textAlignValue,
      }}
    >
      <Container>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            fontSize: { xs: "26px", sm: "30px", lg: "36px" },
            mb: 6,
            fontWeight: 700,
          }}
        >
          {t("services")}
        </Typography>

        {/* عرض الخدمات */}
        <Grid
          container
          spacing={4}
          justifyContent="flex-start"
        >
          {services.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true, amount: 0.5 }}
                // sx={{ textAlign: "start", border: "1px solid red" }}
              >
                {item.path ? (
                  <Link
                    component={RouterLink}
                    to={item.path}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    {item.icon}
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "22px", sm: "26px", lg: "30px" },
                        mb: 2,
                        fontWeight: 600,
                        lineHeight: 1.4,
                        "&:hover": {
                          color: secondaryLightTheme, // تغيير اللون عند التمرير
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ) : (
                  <>
                    {item.icon}
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: { xs: "22px", sm: "26px", lg: "30px" },
                        mb: 2,
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </>
                )}

                <Typography color="#A5A7C5">{item.description}</Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
