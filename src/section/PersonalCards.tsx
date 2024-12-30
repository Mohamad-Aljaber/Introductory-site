import {
  Avatar,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import theme from "../theme/theme.ts";
import quotes from "../assets/images/quotes-sign.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import engIssa from "../assets/images/engissa.jpg";
import engsuhaeb from "../assets/images/engsuhaeb.jpg";
import engabd from "../assets/images/engabd.jpg";
import engAbdulrahman from "../assets/images/engAbdulrahman.jpg";
import engahmad from "../assets/images/engahmad.jpg";
import engKhaled from "../assets/images/engKhaled.jpg";
const testimonials = [
  {
    id: 1,
    text: "I am Issa Al-Dabal, an IT engineer. I work on automating and managing work in the company to ensure the integration of efforts and providing services in the shortest possible time and in the best possible way.",
    name: "Issa Al-Dabal",
    role: "Engineer @Project Management",
    avatar: engIssa,
  },
  {
    id: 2,
    text: "I am Sohaib Bakour, a software engineer. I work on managing company relations and marketing management in the various countries to which we provide our services with the best quality and lowest possible cost.",
    name: "Sohaib Sherbaji",
    role: "Engineer @Software Engineer",
    avatar: engsuhaeb,
  },
  {
    id: 3,
    text: "I am Abdullah Al-Hussein, an IT engineer and a full-stack web developer. My team and I work on servers that enable users to see the applications and services we produce on their devices in a smooth and simple way.",
    name: "Abdullah Al-Hussein",
    role: "Engineer @Full-Stack && Servers",
    avatar: engabd,
  },
  {
    id: 4,
    text: "I am Abdulrahman Al-Sarqabi, an IT engineer specialized in developing front-end interfaces in a sophisticated and advanced manner. My team and I have great artistic talents and distinctive ideas for developing front-end interfaces in various frameworks and modern programming languages.",
    name: "Abdulrahman Al-Sarqabi",
    role: "Engineer @Front-End",
    avatar: engAbdulrahman,
  },
  {
    id: 5,
    text: "I am Ahmed Al-Dali, an IT engineer specialized in developing mobile applications in a sophisticated and advanced manner. My team and I have distinguished experience in developing mobile applications in various forms such as Android and IOS.",
    name: "Ahmed Al-Dali",
    role: "Engineer @Mobile Applications",
    avatar: engahmad,
  },
  {
    id: 6,
    text: "I am Khaled Al-Abdullah, an IT engineer specializing in back-end development.I work with my team to program the processes that the user sees as forms on the front-end that the user interacts with. We have great skill in algorithms, automation and artificial intelligence.",
    name: "Khaled Al-Abdullah",
    role: "Engineer @Back-End",
    avatar: engKhaled,
  },
];

const PersonalCards = () => {
  const primaryTheme = theme.palette.primary.main;
  const secondaryTheme = theme.palette.secondary.main;

  return (
    <Box
      sx={{
        pl: { xs: 3, md: 0 },
        backgroundColor: primaryTheme,
        py: { xs: 5, sm: 7, md: 10 },
        pt: { xs: 10, sm: 12, md: 15 },
        color: "#fff",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton
          className="swiper-button-prev"
          sx={{
            p: 1.5,
            position: "absolute",
            top: "50%",
            left: { md: 0, lg: "-1%" },
            zIndex: 10,
            color: "#fff",
            transform: "translateY(-50%)",
            backgroundColor: secondaryTheme,
            "&:hover": { backgroundColor: "#444" },
            display: { xs: "none", md: "block" },
          }}
        >
          <ArrowBack sx={{ fontSize: "30px" }} />
        </IconButton>

        <IconButton
          className="swiper-button-next"
          sx={{
            position: "absolute",
            p: 1.5,
            top: "50%",
            right: { md: 0, lg: "-1%" },
            zIndex: 10,
            color: "#fff",
            transform: "translateY(-50%)",
            backgroundColor: secondaryTheme,
            "&:hover": { backgroundColor: "#444" },
            display: { xs: "none", md: "block" },
          }}
        >
          <ArrowForward sx={{ fontSize: "30px" }} />
        </IconButton>
        <Box
          component="img"
          src={quotes}
          alt="quotes"
          sx={{
            position: "absolute",
            left: "50%",
            top: { xs: "8%", sm: "14%", md: "22%" },
            zIndex: 20,
            transform: "translate(-50%, -150%)",
            width: { xs: "50px", sm: "70px", md: "90px" },
          }}
        />

        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          loop
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Box
                sx={{
                  backgroundColor: secondaryTheme,
                  width: { xs: "85%", sm: "80%" },
                  py: { xs: 5, sm: 8, md: 10 },
                  px: { xs: 2, sm: 8, md: 8 },
                  borderRadius: 5,
                  m: "auto",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    mb: { xs: 3, sx: 5 },
                    textAlign: "center",
                    fontSize: { xs: "16px" },
                  }}
                >
                  {testimonial.text}
                </Typography>
                <Stack
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 3,
                  }}
                >
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.avatar}
                    sx={{
                      width: { xs: 50, sm: 60, md: 70 },
                      height: { xs: 50, sm: 60, md: 70 },
                    }}
                  />
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {testimonial.name}
                    </Typography>
                    <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }}>
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default PersonalCards;
