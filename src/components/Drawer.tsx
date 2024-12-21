import React from "react";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import theme from "../theme/theme";

const bgTheme = theme.palette.primary.main;

interface DrawerComponentProps {
  open: boolean;
  onClose: () => void;
  navItems: string[];
  effectHoverStyles: object;

}

const DrawerComponent: React.FC<DrawerComponentProps> = ({ open, onClose, navItems,effectHoverStyles }) => {
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
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{
                  color: "#fff",
                  textAlign: "center",
                  ...effectHoverStyles,
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
