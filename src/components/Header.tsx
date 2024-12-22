import React from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../theme/theme";
import DrawerComponent from "./Drawer";
import logoSrc from "../assets/images/logo.png";

const bgTheme = theme.palette.primary.main;
const colTheme = theme.palette.text.primary;
const navItems = ["Home", "Help", "Business Gallery", "Contact"];

const effectHoverStyles = {
  "&:hover": {
    color: colTheme,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    backgroundColor: colTheme,
    bottom: 0,
    left: 0,
    transition: "width 0.3s ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
  },
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const trigger = useScrollTrigger();

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };
  return (
    <Box>
      <CssBaseline />
      <Slide in={!trigger}>
      <AppBar
        component="header"
        position="static"
        sx={{
          py: 2,
          backgroundColor: bgTheme,
        }}
      >
        
          <Toolbar
            sx={{
              backgroundColor: bgTheme,
              justifyContent: "space-between",
            }}
          >
            <Box
              component="img"
              src={logoSrc}
              alt="logo"
              sx={{ width: "100px" }}
            />
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map(item => (
                <Button
                  key={item}
                  sx={{
                    color: "#fff",
                    ...effectHoverStyles,
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        
      </AppBar>
      </Slide>
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
