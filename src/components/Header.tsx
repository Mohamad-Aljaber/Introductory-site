import { useState, useEffect, useCallback } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Link,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../theme/theme";
import DrawerComponent from "./Drawer";
import logoSrc from "../assets/images/logo.png";

const bgTheme = theme.palette.primary.main;
const secondaryTheme = theme.palette.secondary.main;
const textTheme = theme.palette.text.primary;
const navItems = [
  { text: "Home", path: "#" },
  { text: "Help", path: "#help" },
  { text: "Business Gallery", path: "#" },
  { text: "Contact", path: "#" },
];

const effectHoverStyles = {
  "&:hover": {
    color: textTheme,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: textTheme,
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
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    if (!scrolling) {
      window.requestAnimationFrame(() => {
        setIsSticky(window.scrollY > 500);
        setScrolling(false);
      });
      setScrolling(true);
    }
  }, [scrolling]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
          backgroundColor: isSticky ? secondaryTheme : bgTheme,
          top: isSticky ? 0 : "-100px",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="#">
            <Box
              component="img"
              src={logoSrc}
              alt="logo"
              sx={{ width: "100px" }}
            />
          </Link>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                sx={{ color: "#fff", ...effectHoverStyles }}
              >
                <Link
                  href={item.path}
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
