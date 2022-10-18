import React from "react";
import './services.css'
import CodeIcon from "@mui/icons-material/Code";
import AnimationIcon from "@mui/icons-material/Animation";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container grid section__border">
        <div className="services__card">
          <AutoAwesomeMosaicIcon />
          <h2 className="services__title">
            UI/UX Designer
            <br />
          </h2>
          <p className="services__description">
            Service that provides the best qulity and at the request of the
            client, with professional work and customer support.
          </p>
          <div className="services__border"></div>
        </div>

        <div className="services__card">
          <CodeIcon />
          <h2 className="services__title">
            Website Design
            <br />
          </h2>
          <p className="services__description">
            Service that provides the best qulity and at the request of the
            client, with professional work and customer support.
          </p>
          <div className="services__border"></div>
        </div>

        <div className="services__card">
          <AnimationIcon />
          <h2 className="services__title">
            Digital Animator
            <br />
          </h2>
          <p className="services__description">
            Service that provides the best qulity and at the request of the
            client, with professional work and customer support.
          </p>
          <div className="services__border"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
