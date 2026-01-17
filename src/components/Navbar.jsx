import { SITE } from "../config/site";
import { PAGES } from "../config/pages.js";

// 导航项配置：key 对应 page 状态
const NAV_ITEMS = [
  { key: PAGES.HOME, label: "Home" },
  { key: PAGES.ABOUT, label: "About" },
  { key: PAGES.PROJECTS, label: "Projects" },
  { key: PAGES.BLOG, label: "Blog" },
];

// Navbar：通过 onNavigate 切换页面
export default function Navbar({ page, onNavigate }) {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav__inner">
        <button
          type="button"
          className="nav__brandBtn"
          onClick={() => onNavigate(PAGES.HOME)}
          aria-label="Go to Home"
        >
          {SITE.brand}
        </button>

        <div className="nav__links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`nav__linkBtn ${page === item.key ? "is-active" : ""}`}
              onClick={() => onNavigate(item.key)}
            >
              {item.label}
            </button>
          ))}

          <a href={SITE.resumePath} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
