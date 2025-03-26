import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { motion } from "framer-motion";
import theme from "../../../public/theme/theme";
import { useTranslation } from "react-i18next";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
    },
    {
      key: "automated",
      icon: (
        <SettingsOutlinedIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
    },
    {
      key: "cloud",
      icon: (
        <CloudOutlinedIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
    },
    {
      key: "security",
      icon: (
        <SecurityIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
    },
    {
      key: "consulting",
      icon: (
        <WorkOutlineOutlinedIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
    },
    {
      key: "marketing",
      icon: (
        <CampaignOutlinedIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
    },
    {
      key: "mobile",
      icon: (
        <MobileFriendlyIcon
          sx={{ fontSize: 70, color: secondaryLightTheme, pb: 3 }}
        />
      ),
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        p: 3,
        backgroundColor: primaryTheme,
        py: 13,
        color: "#fff",
        textAlign: textAlignValue,
      }}
    >
      <Container>
        {/* عنوان القسم */}
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
                  {t(`features.${item.key}.title`)}
                </Typography>
                <Typography color="#A5A7C5">
                  {t(`features.${item.key}.description`)}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box
          component="section"
          sx={{ py: 8, textAlign: "center" }}
        >
          {" "}
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ mb: 4, fontSize: { xs: "26px", sm: "30px", lg: "36px" } }}
          >
            {t("service2")}
          </Typography>
          {/* وصف الشركة */}
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "24px" },
              mb: 2,
              textAlign: textAlignValue,
            }}
          >
            <FormatQuoteIcon sx={{ color: secondaryLightTheme }} />
            {t("company.about")}
            <FormatQuoteIcon sx={{ color: secondaryLightTheme }} />
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "24px" },
              mb: 4,
              textAlign: textAlignValue,
              color: secondaryLightTheme,
            }}
          >
            {t("company.commitment")}
          </Typography>
          <List
            sx={{
              color: "#fff",
              lineHeight: 2,
              pb: 5,
              textAlign: textAlignValue,
              fontSize: { xs: "18px", sm: "24px", lg: "38px" },
            }}
          >
            <ListItem
              sx={{
                textAlign: textAlignValue,
                fontSize: { xs: "18px", sm: "24px", lg: "38px" },
                display: "flex ",
                gap: 2,
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: secondaryLightTheme,
                  fontSize: "30px",
                  mt: 1,
                }}
              />
              <ListItemText
                primary={t("company.features.ai_integration")}
                primaryTypographyProps={{
                  fontSize: { xs: "20px", sm: "24px" },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                textAlign: textAlignValue,
                fontSize: { xs: "18px", sm: "24px", lg: "38px" },
                display: "flex ",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: secondaryLightTheme,
                  fontSize: "30px",
                  mt: 1,
                }}
              />
              <ListItemText
                primary={t("company.features.flexible_projects")}
                primaryTypographyProps={{
                  fontSize: { xs: "20px", sm: "24px" },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                textAlign: textAlignValue,
                fontSize: { xs: "18px", sm: "24px", lg: "38px" },
                display: "flex ",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: secondaryLightTheme,
                  fontSize: "30px",
                  mt: 1,
                }}
              />
              <ListItemText
                primary={t("company.features.modern_ui")}
                primaryTypographyProps={{
                  fontSize: { xs: "20px", sm: "24px" },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                textAlign: textAlignValue,
                fontSize: { xs: "18px", sm: "24px", lg: "38px" },
                display: "flex ",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: secondaryLightTheme,
                  fontSize: "30px",
                  mt: 1,
                }}
              />
              <ListItemText
                primary={t("company.features.customer_support")}
                primaryTypographyProps={{
                  fontSize: { xs: "20px", sm: "24px" },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                textAlign: textAlignValue,
                fontSize: { xs: "18px", sm: "24px", lg: "38px" },
                display: "flex ",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: secondaryLightTheme,
                  fontSize: "30px",
                  mt: 1,
                }}
              />
              <ListItemText
                primary={t("company.features.maintenance_support")}
                primaryTypographyProps={{
                  fontSize: { xs: "20px", sm: "24px" },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                textAlign: textAlignValue,
                fontSize: { xs: "18px", sm: "24px", lg: "38px" },
                display: "flex ",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: secondaryLightTheme,
                  fontSize: "30px",
                  mt: 1,
                }}
              />
              <ListItemText
                primary={t("company.features.continuous_updates")}
                primaryTypographyProps={{
                  fontSize: { xs: "20px", sm: "24px" },
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                textAlign: textAlignValue,
                fontSize: { xs: "18px", sm: "24px", lg: "38px" },
                display: "flex ",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: secondaryLightTheme,
                  fontSize: "30px",
                  mt: 1,
                }}
              />
              <ListItemText
                primary={t("company.features.modern_tech")}
                primaryTypographyProps={{
                  fontSize: { xs: "20px", sm: "24px" },
                }}
              />
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
