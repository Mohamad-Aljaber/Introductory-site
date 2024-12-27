import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import theme from "../theme/theme.ts";
import logoSrc from "../assets/images/logo.png";
import CustomButton from "./CustomButton.tsx";

const secondaryTheme = theme.palette.secondary.main;
const textTHeme = theme.palette.text.primary;

const quickLinks = [
  { text: "About Us", path: "" },
  { text: "Business Gallery", path: "" },
  { text: "FAQs", path: "" },
  { text: "Support", path: "" },
  { text: "Contact", path: "" },
];
const qurServices = [
  { text: "AI-Powered Systems", path: "" },
  { text: "Cloud Services", path: "" },
  { text: "Technical Support", path: "" },
  { text: "Technology Consulting", path: "" },
  { text: "Marketing & Media", path: "" },
];

const Footer = () => {
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: secondaryTheme,
        py: 10,
        pt: 15,
        color: "#fff",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "space-around",
          mb: 6,
        }}
      >
        <Grid
          item
          xs={12}
          sm={3}
          mb={3}
        >
          <Box
            component="img"
            src={logoSrc}
            alt="logo"
            sx={{ width: "100px", mb: 2 }}
          />
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "22px" },
              fontWeight: "600",
              mb: 4,
              lineHeight: 1.5,
            }}
          >
            Subscribe to Our Newsletter
          </Typography>
          <Typography color="rgba(255, 255, 255, 0.6)">
            Stay updated with our latest services and offerings by subscribing
            to our newsletter.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              // fontWeight: "bold",
              borderRadius: "10px",
              padding: "10px 20px",
              textTransform: "none",
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              width: "100%",
              my: 3,
            }}
          >
            Your email address
          </Button>
          <CustomButton
            text={"Subscribe"}
            icon={null}
            width={"100%"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          mb={2}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "20px", sm: "22px", md: "24px" },
              fontWeight: "600",
            }}
          >
            Quick Links
          </Typography>
          <List>
            {quickLinks.map((listItem, listIndex) => (
              <ListItem
                key={listIndex}
                sx={{
                  pl: 0,
                  color: "rgb(194, 197, 219)",
                }}
              >
                <ListItemText
                  primary={listItem.text}
                  sx={{
                    "&:hover": {
                      color: textTHeme,
                      textDecoration: "underline",
                      transition: "width 0.5s ease-in-out",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          mb={2}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "20px", sm: "22px", md: "24px" },
              fontWeight: "600",
            }}
          >
            Our Services
          </Typography>
          <List>
            {qurServices.map((listItem, listIndex) => (
              <ListItem
                key={listIndex}
                sx={{
                  pl: 0,
                  color: "rgb(194, 197, 219)",
                }}
              >
                <ListItemText
                  primary={listItem.text}
                  sx={{
                    "&:hover": {
                      color: textTHeme,
                      textDecoration: "underline",
                      transition: "width 0.3s ease-in-out",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          mb={2}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "20px", sm: "22px", md: "24px" },
              fontWeight: "600",
            }}
          >
            Contact Us
          </Typography>
          <List>
            {quickLinks.map((listItem, listIndex) => (
              <ListItem
                key={listIndex}
                sx={{
                  gap: 1,
                  pl: 0,
                  color: "rgb(194, 197, 219)",
                }}
              >
                <ListItemText primary={listItem.text} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Typography
        color="rgb(194, 197, 219)"
        sx={{ textAlign: "center" }}
      >
        © 2024 Skyline Business Technology. All rights reserved. Designed with
        <Typography
          component="span"
          color="#fff"
          sx={{ fontWeight: "bold" }}
        >
          🤍
        </Typography>
        by
        <Typography
          component="span"
          color="#fff"
          sx={{ fontWeight: "bold" }}
        >
          {" "}
          Skyline
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;
