import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import theme from "../../../public/theme/theme";

interface BlogItemProps {
  imageSrc: string;
  date: string;
  month: string;
  title: string;
  description: string;
}
const primaryTheme = theme.palette.primary.main;
const secondaryTheme = theme.palette.secondary.main;
const BlogItem: React.FC<BlogItemProps> = ({
  imageSrc,
  date,
  month,
  title,
  description,
}) => {
  return (
    <Card sx={{ mb: 4, borderRadius: 2, boxShadow: 3 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="250"
          image={imageSrc}
          alt={title}
          sx={{ borderRadius: "4px 4px 0 0" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: secondaryTheme,
            color: "white",
            padding: "6px 12px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold" }}
          >
            {date}
          </Typography>
          <Typography variant="body2">{month}</Typography>
        </Box>
      </Box>
      <CardContent>
        <Typography
          variant="h5"
          sx={{ color: primaryTheme, fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, color: "text.secondary" }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogItem;
