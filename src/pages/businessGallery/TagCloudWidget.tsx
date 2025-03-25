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
    <Box sx={{ display: { xs: "none", lg: "block" }, mt: 4 }}>
      <Typography
        variant="h6"
        sx={{ color: "#2d2d2d", fontWeight: "bold", mb: 2 }}
      >
        Tag Clouds
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            clickable
            sx={{
              backgroundColor: "#f5f5f5",
              color: "#333",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: primaryTheme,
                color: secondaryLightTheme,
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default TagCloudWidget;
