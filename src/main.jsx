import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components & utils
import MainLayout from "@/layouts/MainLayout.jsx";
import Home from "@/components/Home.jsx";

import "./index.css";

//i18n configuration
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import trLang from "@/i18n/tr.json";
import enLang from "@/i18n/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enLang,
    },
    tr: {
      translation: trLang,
    },
  },
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="projects" element={<h2>Projects</h2>} />
        <Route path="contact" element={<h2>contact</h2>} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Route>
    </Routes>
  </Router>
);
