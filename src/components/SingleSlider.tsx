import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";

const SingleSlider = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          color: "red",
          zIndex: 1,
          position: "relative",
          mt: 10, // إزاحة النص للأسفل بعد Header
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        eaque necessitatibus dolor alias inventore omnis hic eius ducimus autem
        eveniet laudantium animi provident velit quasi nisi magni dolorum, aut
        corporis.
      </Box>
    </>
  );
};

export default SingleSlider;
