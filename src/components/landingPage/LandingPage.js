import React, { useEffect } from "react";
import Header from "../header/header";
import "../../assets/css/styles.css";
import "../../assets/css/responsive.css";


import Home from "../home/Home";
import Skills from "../Skills/Skills";
import Services from "../Services/Services";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Footer from "../footer/footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ScrollReveal from "scrollreveal";
const LandingPage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });

    sr.reveal(`.home__data, .projects`);
    sr.reveal(`.home__info div`, {
      delay: 600,
      origin: "bottom",
      interval: 100,
    });
    sr.reveal(`.skills__content:nth-child(1) , .contact__content:nth-child(1)`, {
      origin: "left",
    });
    sr.reveal(`.skills__content:nth-child(2) , .contact__content:nth-child(2)`, {
      origin: "right",
    });
    sr.reveal(`.services__card`, {
      internal: 100,
    });
  }, []);
  return (
    <div className="landingContainer">
      <Header />
      <main className="main">
        <Home />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
        <a href="#" className="scrollup" id="scroll-up">
          <ArrowUpwardIcon />
        </a>
      </main>
    </div>
  );
};

export default LandingPage;
