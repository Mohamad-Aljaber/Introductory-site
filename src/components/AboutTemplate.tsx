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

type AboutListItem = {
  text: string;
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

const AboutTemplate: React.FC<AboutTemplateProps> = ({ aboutItem }) => {
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
                    alignItems: "center",
                    gap: 1,
                    pl: 0,
                  }}
                >
                  {listItem.icon}
                  <ListItemText
                    primary={listItem.text}
                    primaryTypographyProps={{
                      sx: { fontSize: "16px", color: "#646D77" },
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
