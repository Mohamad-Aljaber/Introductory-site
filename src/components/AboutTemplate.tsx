import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import theme from "../../public/theme/theme";
import { useTranslation } from "react-i18next";

type AboutListItem = {
  title: string;
  description: string;
  icon: JSX.Element;
};

type AboutItem = {
  heading: string;
  text: string;
  images: string;
  Direction: "row" | "row-reverse";
  List: AboutListItem[];
};

type AboutTemplateProps = {
  aboutItem: AboutItem[];
};

const primaryTheme = theme.palette.primary.main;
const secondaryTheme = theme.palette.secondary.main;

const AboutTemplate: React.FC<AboutTemplateProps> = ({ aboutItem }) => {
  const { i18n } = useTranslation();
  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <Box>
      {aboutItem.map((item, index) => (
        <Stack
          key={index}
          direction={item.Direction}
          sx={{
            gap: 4,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: { xs: "wrap", md: "nowrap" },
            mb: 4,
          }}
        >
          <Box
            component={"img"}
            src={item.images}
            alt="About Image"
            sx={{
              width: { xs: "300px", md: "500px" },
              borderRadius: 2,
            }}
          />
          <Box>
            <Typography
              variant="h2"
              color={primaryTheme}
              sx={{
                fontSize: { xs: "26px", sm: "30px", md: "35px" },
                fontWeight: 600,
                mb: 2,
              }}
            >
              {item.heading}
            </Typography>
            <Typography
              color="#646D77"
              sx={{
                fontSize: "16px",
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              {item.text}
            </Typography>
            <List>
              {item.List.map((listItem, listIndex) => (
                <ListItem
                  key={listIndex}
                  sx={{
                    display: "flex",
                    fontSize: "20px",
                    alignItems: "center",
                    gap: 3,
                    pl: 0,
                    textAlign: textAlignValue,
                  }}
                >
                  {listItem.icon}
                  <ListItemText
                    primary={listItem.title}
                    secondary={listItem.description}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: { xs: "18", sm: "20px", md: "22px" },
                        color: secondaryTheme,
                        fontWeight: "bold",
                      },
                    }}
                    secondaryTypographyProps={{
                      sx: { fontSize: "14px", color: "#9e9e9e" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default AboutTemplate;
