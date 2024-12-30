import React from "react";
import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import theme from "../theme/theme";

const bgTheme = theme.palette.primary.main;
interface NavItem {
  text: string;
  path: string;
}
interface DrawerComponentProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  effectHoverStyles: object;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  open,
  onClose,
  navItems,
  effectHoverStyles,
}) => {
  return (
    <Drawer
      variant="temporary"
      open={open}
      anchor="top"
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        flex: 1,
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          marginTop: "88px",
          backgroundColor: bgTheme,
        },
      }}
    >
      <Box
        onClick={onClose}
        sx={{
          textAlign: "center",
          backgroundColor: bgTheme,
        }}
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
            >
              <Link
                href={item.path}
                sx={{
                  textDecoration: "none",
                  ...effectHoverStyles,
                  color: "#fff",
                }}
              >
                <ListItemButton
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
