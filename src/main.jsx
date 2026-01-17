import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/theme.css"; // 全局样式只在入口引入一次

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
