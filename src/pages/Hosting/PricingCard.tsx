import React from "react";
import { Box, Typography, List, ListItem, Paper } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import theme from "../../../public/theme/theme";

// تعريف نوع الخصائص للمكون
export interface PricingCardProps {
  image: string;
  title: string;
  price: string;
  subtitle: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  image,
  title,
  price,
  subtitle,
  features,
}) => {
  const primaryTheme = theme.palette.primary.main;
  // const secondaryLightTheme = theme.palette.secondary.light;

  return (
    <Paper
      elevation={2}
      sx={{
        textAlign: "center",
        p: 4,
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
        height: "100%",
      }}
    >
      {/* Card Top */}
      <Box mb={3}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: 60, height: 60, mb: 2, }}
        />
        <Typography
          variant="h5"
          fontWeight={600}
          gutterBottom
          sx={{ color: primaryTheme }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Starting at
        </Typography>
      </Box>

      {/* Card Mid */}
      <Box mb={3}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ display: "inline-block", color: primaryTheme }}
        >
          {price}
        </Typography>
        <Typography
          component="span"
          sx={{ fontSize: "16px", color: "#6c757d", ml: 0.5 }}
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Card Bottom */}
      <List
        sx={{
          listStyle: "none",
          p: 0,
          mb: 3,
          "& li": {
            py: 0.5,
            color: "#333",
          },
        }}
      >
        {features.map((feature, idx) => (
          <ListItem
            key={idx}
            sx={{ justifyContent: "center" }}
          >
            {feature}
          </ListItem>
        ))}
      </List>

      <CustomButton
        text={"Get Strart"}
        icon={null}
        link="/contact"
        width="250px"
      />
    </Paper>
  );
};

export default PricingCard;
