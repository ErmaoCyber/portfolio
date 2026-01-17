import { useState } from "react";
import Home from "./pages/Home.jsx";
import { PAGES } from "./config/pages.js";

// App 负责维护当前页面状态
export default function App() {
  const [page, setPage] = useState(PAGES.HOME);

  return <Home page={page} onNavigate={setPage} />;
}
