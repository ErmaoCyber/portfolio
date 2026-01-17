import ParticlesBg from "../components/ParticlesBg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Blog from "./Blog.jsx";
import Footer from "../components/Footer.jsx";
import { PAGES } from "../config/pages.js";

// 页面外壳：背景 + 导航 + 内容区 + Footer
export default function Home({ page, onNavigate }) {
  return (
    <div className="app">
      <ParticlesBg />

      <Navbar page={page} onNavigate={onNavigate} />

      <main className="page">
        <div className="container">
          {page === PAGES.HOME && (
            <div className="homeShell">
              <Hero onNavigate={onNavigate} />
            </div>
          )}

          {page === PAGES.ABOUT && <About />}
          {page === PAGES.PROJECTS && <Projects />}
          {page === PAGES.BLOG && <Blog />}
        </div>
      </main>

      <Footer />
    </div>
  );
}
