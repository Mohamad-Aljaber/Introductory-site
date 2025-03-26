import React from "react";
import { useTranslation } from "react-i18next";
// import BlogItem from "./BlogItem";
import { Box, Container, Grid } from "@mui/material";
import TagCloudWidget from "./TagCloudWidget";
import ProjectPhotos from "./ProjectPhotos";
import BlogItem from "./BlogItem";
import blog1 from "../../assets/images/blog/single_blog_1.png";
import blog2 from "../../assets/images/blog/single_blog_2.png";
import blog3 from "../../assets/images/blog/single_blog_3.png";
import blog4 from "../../assets/images/blog/single_blog_4.png";
import blog5 from "../../assets/images/blog/single_blog_5.png";
const BlogSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const blogItemsData = [
    {
      imageSrc: blog5,
      date: "2025",
      month: "January",
      titleKey: t("blog.accountingTitle"),
      descriptionKey: t("blog.accountingDescription"),
    },
    {
      imageSrc: blog4,
      date: "2025",
      month: "March",
      titleKey: t("blog.kafeelTitle"),
      descriptionKey: t("blog.kafeelDescription"),
    },
    {
      imageSrc: blog3,
      date: "2024",
      month: "Apr",
      titleKey: t("blog.storeTitle"),
      descriptionKey: t("blog.storeDescription"),
    },
    {
      imageSrc: blog1,
      date: "2024",
      month: "Jan",
      titleKey: t("blog.fsnCreditStoreTitle"),
      descriptionKey: t("blog.fsnCreditStoreDescription"),
    },
    {
      imageSrc: blog2,
      date: "2024",
      month: "Mar",
      titleKey: t("blog.tawsellaStarTaxiTitle"),
      descriptionKey: t("blog.tawsellaStarTaxiDescription"),
    },
  ];

  const textAlignValue = i18n.dir() === "rtl" ? "right" : "left";

  return (
    <Box
      component="section"
      sx={{ py: 8 }}
    >
      <Container>
        <Grid
          container
          spacing={4}
        >
          {/* القسم الرئيسي للمقالات */}
          <Grid
            item
            xs={12}
            md={8}
          >
            <Box sx={{ textAlign: textAlignValue }}>
              {blogItemsData.map((item, index) => (
                <BlogItem
                  key={index}
                  imageSrc={item.imageSrc}
                  date={item.date}
                  month={item.month}
                  title={item.titleKey}
                  description={t(item.descriptionKey)}
                />
              ))}
            </Box>
          </Grid>

          {/* القسم الجانبي */}
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box>
              <TagCloudWidget />
              <ProjectPhotos />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;
