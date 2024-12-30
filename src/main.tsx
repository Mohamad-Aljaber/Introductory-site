import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Contact from "./pages/contact/Contact.tsx";
import BusinessGallery from "./pages/businessGallery/BusinessGallery.tsx";

// وضع التوجيه خارج الـ StrictMode
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="contact"
            element={<Contact />}
          />
          <Route
            path="Business-Gallery"
            element={<BusinessGallery />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
