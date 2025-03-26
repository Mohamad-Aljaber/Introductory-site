import React from "react";
import { Box, Typography, Stack, Chip } from "@mui/material";
import theme from "../../../public/theme/theme";

const primaryTheme = theme.palette.primary.main;
const secondaryLightTheme = theme.palette.secondary.light;

const TagCloudWidget: React.FC = () => {
  const tags = [
    "FrontEnd",
    "BackEnd",
    "Mobile Development",
    "UI/UX",
    "AI",
    "Cloud Computing",
    "Design",
  ];

  return (
    <Box sx={{ display: { xs: "none", md: "block" }, mt: 4 }}>
      <Typography
        variant="h6"
        sx={{ color: "#2d2d2d", fontWeight: "bold", mb: 2 }}
      >
        Tag Clouds
      </Typography>
      <Stack
        direction="row"
        gap={2}
        flexWrap="wrap"
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            clickable
            sx={{
              backgroundColor: primaryTheme,
              color: secondaryLightTheme,
              fontWeight: "bold",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default TagCloudWidget;
