import "./App.css";
import Header from "./section/Header";
import "./i18n";
import Footer from "./section/Footer";
// import CallMissedIcon from "@mui/icons-material/CallMissed";
// import theme from "../public/theme/theme";
import { useEffect } from "react";

import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GoToWhatsApp from "./components/GoToWhatsApp";

// const textTheme = theme.palette.text.primary;

function App() {
  // const [isSticky, setIsSticky] = useState(false);
  const { i18n } = useTranslation();
  // const handleScroll = () => {
  //   setIsSticky(window.scrollY > 700);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const lang = i18n.language;
    if (lang === "ar") {
      document.documentElement.setAttribute("dir", "rtl"); // تعيين اتجاه النص من اليمين لليسار
    } else {
      document.documentElement.setAttribute("dir", "ltr"); // تعيين اتجاه النص من اليسار لليمين
    }
  }, [i18n.language]);
  return (
    <>
      <Header />
      <GoToWhatsApp />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
