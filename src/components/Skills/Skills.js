import React from "react";
import './skills.css'
import logoHtml from "../../assets/img/html-1.svg";
import logoJavascript from "../../assets/img/logo-javascript.svg";
import logoGit from "../../assets/img/git-icon.svg";
import logoReact from "../../assets/img/react-2.svg";
import logoCss from "../../assets/img/css-3.svg";
import logoXD from "../../assets/img/adobe-xd-1.svg";
import logoPhotoshop from "../../assets/img/adobe-photoshop-2.svg";
import logoFigma from '../../assets/img/figma-1.svg'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DataObjectIcon from "@mui/icons-material/DataObject";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My favorite skills</span>
      <div className="skills__container container grid section__border">
        {/*skills 1 */}
        <div className="skills__content">
          <h3 className="skills__title">
            <DataObjectIcon /> Frontend Developer
          </h3>
          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <img src={logoHtml} alt="html logo" />
              </div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={logoCss} alt="Css logo" />
              </div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__subtitle">Advanced</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={logoJavascript} alt="javascript logo" />
              </div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={logoReact} alt="React logo" />
              </div>
              <h3 className="skills__name">React</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={logoGit} alt="Git logo" />
              </div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>
          </div>
        </div>
        {/*skills 2 */}

        <div className="skills__content">
          <h3 className="skills__title"><AutoAwesomeIcon/> Web Designer</h3>
          <div className="skills__info">
            <div className="skills__data">
              <div className="skills__blob">
                <img src={logoPhotoshop} alt="photoshop logo" />
              </div>
              <h3 className="skills__name">Photoshop</h3>
              <span className="skills__subtitle">Basic</span>
            </div>

            <div className="skills__data">
              <div className="skills__blob">
                <img src={logoXD} alt="Adobe Xd logo" />
              </div>
              <h3 className="skills__name">Adobe Xd</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>
            <div className="skills__data">
              <div className="skills__blob">
                <img src={logoFigma} alt="Figma logo" />
              </div>
              <h3 className="skills__name">Figma</h3>
              <span className="skills__subtitle">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
