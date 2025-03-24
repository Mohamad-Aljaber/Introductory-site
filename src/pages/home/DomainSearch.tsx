import {
  Box,
  Container,
  Grid,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import theme2 from "../../../public/theme/theme.ts";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
const bgTheme = theme2.palette.primary.main;
const Specializations = [
  { text: "AI", color: "#ff7474" },
  { text: "Systems Analysis", color: "#ffdd74" },
  { text: "Marketing and Media", color: "#74ff9f" },
  { text: "Technology Consulting", color: "#748bff" },
];
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: theme.palette.common.white,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  color: "black",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0.5, 1),
}));

const SearchIconWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const DomainSearch = () => {
  return (
    <Box sx={{ p: 3, backgroundColor: bgTheme, pb: 6, color: "#fff" }}>
      <Container>
        <Grid
          container
          spacing={3}
          alignItems={"center"}
        >
          <Grid
            item
            xs={12}
            sm={5}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                mb: 3,
                fontWeight: "bold",
                fontSize: { xs: "26px", sm: "30px", lg: "35px" },
              }}
            >
              Explore our team knowledge
            </Typography>
            <Typography
              sx={{
                color: "#A5A7C5",
                mb: 5,
                fontSize: { xs: "16px", sm: "18px", lg: "20px" },
              }}
            >
              We are an integrated team from various modern technological
              fields. We have knowledge of all the needs of modern business
              environment.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
          >
            <Search>
              <SearchIconWrapper sx={{ mr: 1 }}>
                <LanguageIcon
                  sx={{ width: "35px", height: "35px", color: "#A5A7C5" }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Explore our team knowledge"
                inputProps={{ "aria-label": "search" }}
              />

              <SearchIconWrapper
                sx={{
                  background:
                    "linear-gradient(to bottom, #a077ff 0%, #ef67ff 100%);",
                  borderRadius: "50%",
                  p: 2,
                }}
              >
                <SearchIcon
                  sx={{ width: "25px", height: "25px", color: "#fff" }}
                />
              </SearchIconWrapper>
            </Search>
            <Stack
              sx={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
                my: 3,
              }}
            >
              {Specializations.map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    pr: 2,
                    color: item.color,
                    fontWeight: "500",
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      lg: "18px",
                      borderRight:
                        item.text == "Technology Consulting"
                          ? ""
                          : "1px solid #73469F",
                    },
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DomainSearch;
