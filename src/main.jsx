import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// 在你的项目入口文件 (如 index.js 或 App.js) 中添加
import "./styles/variables.css";
import "./styles/navigation.css";
import "./styles/components.css";
import "./styles/pages.css";
import "./styles/responsive.css"; // 必须在最后，确保响应式逻辑生效

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
