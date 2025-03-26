import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
  InputAdornment,
  FormHelperText,
  FormControl,
} from "@mui/material";
import theme from "../../public/theme/theme.ts";

import CustomButton from "../components/CustomButton.tsx";
import { Link } from "react-router-dom";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const primaryTheme = theme.palette.primary.main;
const secondaryTheme = theme.palette.secondary.main;
const secondaryLightTheme = theme.palette.secondary.light;

const Footer = () => {
  const { t, i18n } = useTranslation();
  const contactInfo = [
    {
      icon: <PhoneIcon style={{ color: "#fff", fontSize: "20px" }} />,
      text: "+31 6 37718553",
      to: "https://wa.me/+31637718553",
    },
    {
      icon: <EmailIcon style={{ color: "#fff", fontSize: "20px" }} />,
      text: "skyline6710@gmail.com",
      to: "mailto:skyline6710@gmail.com",
    },
    {
      icon: <LocationOnIcon style={{ color: "#fff", fontSize: "20px" }} />,
      text: "123 Skyline Ave, Tech City",
      to: "#",
    },
  ];

  const socialMediaSites = [
    {
      icon: <FacebookIcon style={{ fontSize: "25px" }} />,
      path: "https://www.facebook.com/",
    },
    {
      icon: <InstagramIcon style={{ fontSize: "25px" }} />,
      path: "https://www.instagram.com/skyline_.company/profilecard/?igsh=OHNsejRnbXo2cWR0",
    },
    {
      icon: <LinkedInIcon style={{ fontSize: "25px" }} />,
      path: "https://www.linkedin.com/company/skyline2024/",
    },
    { icon: <XIcon style={{ fontSize: "25px" }} />, path: "https://x.com/" },
  ];

  const quickLinks = [
    { name: t("footer.quickLinksList.0.name"), to: "#aboutUs" },
    { name: t("footer.quickLinksList.1.name"), to: "/business-gallery" },
    { name: t("footer.quickLinksList.4.name"), to: "/contact" },
    { name: t("footer.quickLinksList.2.name"), to: "#help" },
    { name: t("footer.quickLinksList.3.name"), to: "#services" },
  ];

  const services = [
    { name: t("footer.servicesList.0.name") },
    { name: t("footer.servicesList.1.name") },
    { name: t("footer.servicesList.2.name") },
    { name: t("footer.servicesList.3.name") },
    { name: t("footer.servicesList.4.name") },
  ];

  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Check if the email is valid
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      setEmailHelperText("Please enter a valid email address.");
      return;
    }

    // Reset error if email is valid
    setEmailError(false);
    setEmailHelperText("");

    const formData = new FormData();
    formData.append("access_key", "99e963cc-8628-41ac-9978-871a879f1530");
    formData.append("email", email);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      setEmail("");
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: primaryTheme,
        py: 10,
        pt: 15,
        color: "#fff",
        textAlign: textAlignValue,
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: { xs: "start", sm: "space-around" },
          mb: 6,
          textAlign: textAlignValue,
        }}
      >
        <Grid
          item
          xs={12}
          sm={5}
          lg={3}
          sx={{ minWidth: "250px" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "22px" },
              fontWeight: "600",
              mb: 1.5,
              lineHeight: 1.5,
              color: secondaryTheme,
            }}
          >
            {t("footer.subscribeNewsletter")}{" "}
          </Typography>
          <Typography color="fff">{t("footer.stayUpdated")}</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <FormControl
              fullWidth
              error={emailError}
              sx={{ mb: 2 }}
            >
              <TextField
                type="email"
                id="newsletter-form-email"
                placeholder={t("footer.subscribeNewsletter")}
                value={email}
                sx={{
                  border: `1px solid ${secondaryTheme}`,
                  my: 2,
                  borderRadius: "10px",
                  color: "#fff",
                  "& .MuiInputBase-input": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&:hover fieldset": {
                      borderColor: secondaryTheme, // تغيير لون الحافة عند المرور بالفأرة
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: secondaryTheme, // تغيير لون الحافة عند التركيز
                      borderRadius: "10px", // نفس الـ borderRadius عند التركيز
                    },
                  },
                }}
                onChange={e => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon style={{ color: "#fff" }} />
                    </InputAdornment>
                  ),
                }}
              />
              {emailError && <FormHelperText>{emailHelperText}</FormHelperText>}
            </FormControl>
            <CustomButton
              text={"Subscribe"}
              icon={null}
              width={"100%"}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          lg={2}
          sx={{ minWidth: "250px" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "20px", sm: "22px", md: "24px" },
              fontWeight: "600",
              color: secondaryTheme,
            }}
          >
            {t("footer.quickLinks")}{" "}
          </Typography>
          <List>
            {quickLinks.map((link, index) => (
              <ListItem
                key={index}
                sx={{
                  p: 0,
                }}
              >
                <Link
                  to={link.to}
                  style={{ textDecoration: "none" }}
                >
                  <ListItemText
                    primary={link.name}
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        color: secondaryLightTheme,

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
          sm={5}
          lg={2}
          sx={{ minWidth: "250px" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "20px", sm: "22px", md: "24px" },
              fontWeight: "600",
              color: secondaryTheme,
            }}
          >
            {t("footer.ourServices")}{" "}
          </Typography>
          <List>
            {services.map((service, index) => (
              <ListItem
                key={index}
                sx={{
                  p: 0,
                  color: "#fff",
                }}
              >
                {service.name}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          lg={2}
          sx={{ minWidth: "250px" }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "20px", sm: "22px", md: "24px" },
              fontWeight: "600",
              color: secondaryTheme,
            }}
          >
            {t("footer.contactUs")}{" "}
          </Typography>
          <List>
            {contactInfo.map((contact, index) => (
              <ListItem
                key={index}
                sx={{
                  gap: 1,
                  p: 0,
                  color: "#fff",
                  textAlign: textAlignValue,
                }}
              >
                <Link
                  to={contact.to}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  target="_blank"
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "auto",
                      color: "inherit",
                    }}
                  >
                    {contact.icon}{" "}
                  </ListItemIcon>
                  <ListItemText
                    primary={contact.text}
                    sx={{
                      minWidth: "auto",
                      "&:hover": { color: secondaryLightTheme },
                      transition: "width 0.5s ease-in-out",
                    }}
                  />
                </Link>
              </ListItem>
            ))}
            <List>
              {socialMediaSites.map((site, index) => (
                <Link
                  to={site.path}
                  color="#fff"
                  target="_blank"
                  key={index}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: "40px",
                      height: "40px",
                      p: 1,
                      mr: 1,
                      borderRadius: "100%",
                      border: "1px solid white",
                      color: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      "&:hover": {
                        backgroundColor: secondaryLightTheme,
                      },
                    }}
                  >
                    {site.icon}
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
        © {new Date().getFullYear()}
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
          sx={{ fontWeight: "bold", color: secondaryLightTheme }}
        >
          {" "}
          Skyline
        </Typography>
        - All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
