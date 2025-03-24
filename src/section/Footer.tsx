import {
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import theme from "../../public/theme/theme.ts";
import logoSrc from "../assets/images/logo.png";
import CustomButton from "../components/CustomButton.tsx";
import { Link as RouterLink } from "react-router-dom";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
const secondaryTheme = theme.palette.secondary.main;
const textTHeme = theme.palette.text.primary;

const quickLinks = [
  { text: "About Us", path: "/#about" },
  { text: "Business Gallery", path: "Business-Gallery" },
  { text: "FAQs", path: "/#help" },
  { text: "Support", path: "#" },
  { text: "Contact", path: "contact" },
];
const qurServices = [
  { text: "AI-Powered Systems", path: "" },
  { text: "Cloud Services", path: "" },
  { text: "Technical Support", path: "" },
  { text: "Technology Consulting", path: "" },
  { text: "Marketing & Media", path: "" },
];
const ContactUs = [
  { icon: <PhoneIcon />, text: "+352 681 555 826" },
  { icon: <EmailIcon />, text: "skyline6710@gmail.com" },
  { icon: <LocationOnIcon />, text: "123 Skyline Ave, Tech City" },
];
const socialMediaSites = [
  {
    value: "facebook",
    icon: <FacebookIcon />,
    path: "https://www.facebook.com/",
  },
  {
    value: "Instagram",
    icon: <InstagramIcon />,
    path: "https://www.facebook.com/",
  },
  {
    value: "Linkedin",
    icon: <LinkedInIcon />,
    path: "https://www.facebook.com/",
  },
  { value: "X", icon: <XIcon />, path: "https://www.facebook.com/" },
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
          <Link
            component={RouterLink}
            to="/"
          >
            <Box
              component="img"
              src={logoSrc}
              alt="logo"
              sx={{ width: "100px", mb: 2 }}
            />
          </Link>
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
          <TextField
            variant="outlined"
            placeholder="Your email address"
            sx={{
              borderRadius: "10px",
              outline: "none",
              textTransform: "none",
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              width: "100%",
              my: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.6)",
                  borderRadius: "10px",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.8)",
                  borderRadius: "10px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 1)",
                },
                color: "rgba(255, 255, 255, 0.6)",
              },
            }}
          />

          <CustomButton
            text={"Subscribe"}
            icon={null}
            width={"100%"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
          mb={2}
          sx={{ ml: { xs: 0, sm: 5 } }}
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
                }}
              >
                <Link
                  {...(listItem.path.includes("#")
                    ? { href: listItem.path }
                    : { component: RouterLink, to: listItem.path })}
                  sx={{
                    textDecoration: "none",
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
                </Link>
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
            {ContactUs.map((listItem, listIndex) => (
              <ListItem
                key={listIndex}
                sx={{
                  gap: 1,
                  pl: 0,
                  color: "rgb(194, 197, 219)",
                }}
              >
                <ListItemIcon sx={{ minWidth: "auto", color: "inherit" }}>
                  {listItem.icon}
                </ListItemIcon>
                <ListItemText primary={listItem.text} />
              </ListItem>
            ))}
            <List>
              {socialMediaSites.map((listItem, listIndex) => (
                <Link
                  component={RouterLink}
                  to={listItem.path}
                  color="#fff"
                >
                  <ListItemIcon
                    key={listIndex}
                    sx={{
                      minWidth: "40px",
                      height: "40px",
                      p: 1,
                      mr: 1,
                      borderRadius: "100%",
                      border: "1px solid white",
                      color: "inherit",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        backgroundColor: textTHeme,
                      },
                    }}
                  >
                    {listItem.icon}
                  </ListItemIcon>
                </Link>
              ))}
            </List>
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
