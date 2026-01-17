import homeHeroImg from "../assets/home-picture.svg";
import aboutHeroImg from "../assets/about-picture.png";

// 站点统一配置：文案、链接、资源路径
export const SITE = {
  brand: "ErmaoCyber",
  name: "Jason Yang",
  location: "Wellington, New Zealand",
  email: "your@email.com",
  github: "https://github.com/ErmaoCyber",
  linkedin: "https://www.linkedin.com/",

  roles: ["Software Developer", "Clean & Maintainable Code", "Continuous Learner"],

  // public/ 下文件用 BASE_URL 兼容子路径部署
  resumePath: `${import.meta.env.BASE_URL}resume.pdf`,

  images: {
    homeHero: homeHeroImg,
    aboutHero: aboutHeroImg,
  },
};
