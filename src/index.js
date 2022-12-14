import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Routes, Route, HashRouter } from "react-router-dom";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import Bookmarks from "./Components/Bookmarks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-series" element={<Series />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  </HashRouter>
);
