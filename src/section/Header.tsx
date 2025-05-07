import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Link,
  Stack,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../../public/theme/theme";
import DrawerComponent from "../components/Drawer";
import logoSrc from "../assets/images/logo.png";
import { Link as RouterLink } from "react-router-dom";
import SplitButton from "../components/languageButtom";
import { useTranslation } from "react-i18next";

const primaryTheme = theme.palette.primary.main;
const secondaryLightTheme = theme.palette.secondary.light;

const effectHoverStyles = {
  "&:hover": {
    color: secondaryLightTheme,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: secondaryLightTheme,
    bottom: 0,
    left: 0,
    transition: "width 0.3s ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
  },
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { text: t("menu.home"), path: "/" },
    { text: t("menu.Hosting"), path: "Hosting" },
    { text: t("menu.business_gallery"), path: "Business-Gallery" },
    { text: t("menu.contact"), path: "contact" },
  ];

  const handleScroll = () => {
    setIsSticky(window.scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  return (
    <Box>
      <CssBaseline />

      <AppBar
        component="header"
        sx={{
          position: isSticky ? "fixed" : "static",
          py: 2,
          backgroundColor: primaryTheme,
          top: isSticky ? 0 : "-300px",
          transition: "all 1s ease-in-out",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link
            component={RouterLink}
            to="/"
          >
            <Box
              component="img"
              src={logoSrc}
              alt="logo"
              sx={{ width: "100px" }}
            />
          </Link>
          <Stack direction="row">
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Navigation Menu */}
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  sx={{ color: "#fff", ...effectHoverStyles }}
                >
                  <Link
                    {...(item.path.includes("#")
                      ? { href: item.path }
                      : { component: RouterLink, to: item.path })}
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    {item.text}
                  </Link>
                </Button>
              ))}
            </Box>
            <SplitButton />
          </Stack>
        </Toolbar>
      </AppBar>

      <DrawerComponent
        open={mobileOpen}
        onClose={handleDrawerToggle}
        navItems={navItems}
        effectHoverStyles={effectHoverStyles}
      />
    </Box>
  );
};

export default Header;
