import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SITE } from "../config/site";

// SocialLinks：社交图标链接
export default function SocialLinks() {
  return (
    <div className="social" aria-label="Social links">
      <a className="icon" href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>

      <a className="icon" href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>

      <a className="icon" href={`mailto:${SITE.email}`} aria-label="Email">
        <FaEnvelope />
      </a>
    </div>
  );
}
