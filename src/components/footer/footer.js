import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Roohollah</h1>
        <p>Frontend Developer</p>
        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link"></a>
          </li>
          <li>
            <a href="#skills" className="footer__link"></a>
          </li>
          <li>
            <a href="#projects" className="footer__link"></a>
          </li>
        </ul>
        <ul className="footer__social">
          <a
            href="https://www.linkedin.com/in/roohollah-eftekhari-2a3a79253/"
            target="_blank"
            className="footer__social-link"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/roohollah98"
            target="_blank"
            className="footer__social-link"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://dribbble.com/roohollah98"
            target="_blank"
            className="footer__social-link"
          >
            <LanguageIcon />
          </a>
        </ul>
        <span className="footer__copy">Copyright. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
