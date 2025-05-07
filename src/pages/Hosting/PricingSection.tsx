import React from "react";
import { Box, Container, Grid } from "@mui/material";
import PricingCard, { PricingCardProps } from "./PricingCard";
import price1 from "../../assets/images/price1.svg"
import price2 from "../../assets/images/price2.svg"
import price3 from "../../assets/images/price3.svg"
const pricingData: PricingCardProps[] = [
  {
    title: "Shared Hosting",
    image: price1,
    price: "$4.67",
    subtitle: "/ month",
    features: [
      "2 TB of space",
      "unlimited bandwidth",
      "full backup systems",
      "free domain",
      "unlimited database",
    ],
  },
  {
    title: "Dedicated Hosting",
    image: price2,
    price: "$4.67",
    subtitle: "/ month",
    features: [
      "2 TB of space",
      "unlimited bandwidth",
      "full backup systems",
      "free domain",
      "unlimited database",
    ],
  },
  {
    title: "Cloud Hosting",
    image: price3,
    price: "$4.67",
    subtitle: "/ month",
    features: [
      "2 TB of space",
      "unlimited bandwidth",
      "full backup systems",
      "free domain",
      "unlimited database",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "", py: { xs: 6, md: 10 }, position: "" }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {pricingData.map((plan, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
            >
              <PricingCard {...plan} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingSection;
