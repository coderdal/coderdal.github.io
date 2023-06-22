import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout.jsx";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<h2>Home Page</h2>} />
        <Route path="projects" element={<h2>Projects</h2>} />
        <Route path="contact" element={<h2>contact</h2>} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Route>
    </Routes>
  </Router>
);
