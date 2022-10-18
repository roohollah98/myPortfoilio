import React, { useState,useEffect } from "react";
import './header.css'
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkIcon from "@mui/icons-material/Work";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const scrollActive = () => {
    const scrollY = window.pageYOffset;
    const sections = document.querySelectorAll("section[id");
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");
      const sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    });
  };
  const scrollUp = () => {
    const scrollY = window.pageYOffset;
    const scrollUp = document.getElementById("scroll-up");
    scrollY >= 350
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  };
  const scrollHeader = () => {
    const header = document.getElementById("header");
    const scrollY = window.pageYOffset;
    scrollY >= 50
      ? header.classList.add("bg-header")
      : header.classList.remove("bg-header");
  };

  useEffect(()=>{
    window.addEventListener("scroll", scrollActive);
    window.addEventListener("scroll", scrollUp);
    window.addEventListener("scroll", scrollHeader);

  },[])


  return (
    <div className="header" id="header">
      <nav className="nav container">
        <a>MyProtfilio</a>
        <div className={`nav__menu ${showMenu && "show__menu"}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <HomeIcon />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <EmojiEventsIcon />
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <WorkIcon />
                services
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <AutoAwesomeMosaicIcon />
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <ChatIcon />
                Contact
              </a>
            </li>
          </ul>
          <div
            onClick={() => {
              setShowMenu((preve) => !preve);
            }}
            className="nav__close"
            id="nav-close"
          >
            <CloseIcon />
          </div>
        </div>
        <div
          onClick={() => {
            setShowMenu((preve) => !preve);
          }}
          className="nav__toggle"
          id="nav-toggle"
        >
          <MenuIcon />
        </div>
      </nav>
    </div>
  );
};

export default Header;
