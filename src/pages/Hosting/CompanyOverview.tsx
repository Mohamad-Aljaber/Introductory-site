import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import theme from "../../../public/theme/theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useTranslation } from "react-i18next";

const CompanyOverview = () => {
  const primaryTheme = theme.palette.primary.main;
  const secondaryLightTheme = theme.palette.secondary.light;
  const { t, i18n } = useTranslation();
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  const features = [
    "cloud_services",
    "technical_support",
    "client_training",
    "security",
    "support",
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
        <Box
          component="section"
          sx={{ py: 8, textAlign: "center" }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ mb: 4, fontSize: { xs: "26px", sm: "30px", lg: "36px" } }}
          >
            {t("hosting.title")}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "24px" },
            mb: 2,
            textAlign: textAlignValue,
          }}
        >
          <FormatQuoteIcon sx={{ color: secondaryLightTheme }} />
          {t("hosting.description")}
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
          {t("hosting.features.title")}
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
          {features.map(featureKey => (
            <ListItem
              key={featureKey}
              sx={{
                textAlign: textAlignValue,
                fontSize: { xs: "18px", sm: "24px", lg: "38px" },
                display: "flex",
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
                primary={t(`hosting.features.${featureKey}.title`)}
                secondary={t(`hosting.features.${featureKey}.description`)}
                primaryTypographyProps={{
                  fontSize: { xs: "20px", sm: "24px" },
                  fontWeight: 600,
                }}
                secondaryTypographyProps={{
                  fontSize: { xs: "16px", sm: "20px" },
                  mt: 1,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default CompanyOverview;
