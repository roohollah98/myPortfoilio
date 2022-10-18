import React from "react";
import profile from "../../assets/img/profile.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import './home.css'
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid section__border">
        <div className="home__data grid">
          <h1 className="home__title">
            Hi, I'm Roohollah
            <br />
            Frontend Developer
            <br />
            Based In Karaj
            <br />
          </h1>
          <div className="home__blob grid">
            <div className="home__perfil">
              <img src={profile} alt="profile" />
            </div>
          </div>
          <ul className="home__social">
            <a
              href="https://www.linkedin.com/in/roohollah-eftekhari-2a3a79253/"
              target="_blank"
              className="social__link"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/roohollah98"
              target="_blank"
              className="social__link"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://dribbble.com/roohollah98"
              target="_blank"
              className="social__link"
            >
              <LanguageIcon />
            </a>
          </ul>
        </div>
        {/* ================== home Info 1=========== */}
        <div className="home__info">
          <div>
            <h3 className="home__info_title">BIOGRAPHY</h3>
            <p className="home__info_description">
              Hi, I'm roohollah, Frontend Developer Passionate about designing
              beautiful web interfaces. Based in Karaj.
            </p>
          </div>

          <div>
            <h3 className="home__info_title">CONTACT</h3>
            <p className="home__info_description">
              Karaj, Iran
              <br />
              roohollaheftekhari1998@gmail.com
              <br />
              +98 9025567392
            </p>
          </div>

          <div>
            <h3 className="home__info_title">SERVICES</h3>
            <p className="home__info_description">

            Website Design<br/>
            UI/UX Design<br/>
            Animation<br/>
            </p>
          </div>
        </div>
        {/* ================== home Info 2=========== */}
        <div className="home__info">
            <div>
                <h3 className="home__info_title">
                YEARS OF EXPERIENCE
                </h3>
                <p className="home__info_number">01+</p>
            </div>

            <div>
                <h3 className="home__info_title">
                   CMPLETED PROJECTS
                </h3>
                <p className="home__info_number">20+</p>
            </div>

           
        </div>
      </div>
    </section>
  );
};

export default Home;
