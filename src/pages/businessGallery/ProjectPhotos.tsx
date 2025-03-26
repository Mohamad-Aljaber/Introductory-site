import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import blog1 from "../../assets/images/blog/single_blog_1.png";
import blog2 from "../../assets/images/blog/single_blog_2.png";
import blog3 from "../../assets/images/blog/single_blog_3.png";
import blog4 from "../../assets/images/blog/single_blog_4.png";
import blog5 from "../../assets/images/blog/single_blog_5.png";
const ProjectPhotos: React.FC = () => {
  // مصفوفة من الصور التي سيتم عرضها
  const photos = [blog1, blog3,blog2 , blog4, blog5, blog3];

  return (
    <Box sx={{ display: { xs: "none", lg: "block" }, mt: 4 }}>
      <Typography
        variant="h6"
        sx={{ color: "#2d2d2d", fontWeight: "bold", mb: 2 }}
      >
        Project Photos
      </Typography>
      <Grid
        container
        spacing={1}
      >
        {photos.map((photo, index) => (
          <Grid
            item
            xs={4}
            key={index}
          >
            <Box
              component="a"
              href="#"
              sx={{ display: "block", textDecoration: "none" }}
            >
              <Box
                component="img"
                src={photo}
                alt={`Project photo ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                  transition: "0.3s",
                  "&:hover": { opacity: 0.8 },
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectPhotos;
