import { Box, Container, Typography, Grid } from "@mui/material";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { motion } from "framer-motion";
import theme from "../../../public/theme/theme";
import { useTranslation } from "react-i18next";
const primaryTheme = theme.palette.primary.main;
const secondaryLightTheme = theme.palette.secondary.light;

const Services = () => {
  const { t, i18n } = useTranslation();
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  const services = [
    {
      key: "hosting",
      icon: (
        <MemoryOutlinedIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
      title: t("cloud_services.hosting"),
    },
    {
      key: "email",
      icon: (
        <MailOutlineIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
      title: t("cloud_services.email"),
    },
    {
      key: "cloud",
      icon: (
        <CloudOutlinedIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
      title: t("cloud_services.domain"),
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
          {t("cloud_services_title")}
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
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
