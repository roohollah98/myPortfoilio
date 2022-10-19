import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./projects.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//import projects image

import project1 from "../../assets/img/blog.jpg";
import project2 from "../../assets/img/crypto.jpg";
import project3 from "../../assets/img/shop.jpg";
import project4 from "../../assets/img/netflix.jpg";
import project5 from "../../assets/img/facedetection.jpg";

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent work</span>
      <div className="container section__border">
        <Swiper
          className="projects_container swiper"
          modules={[Navigation, Pagination, A11y]}
          loop={true}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 40 },
            768: { slidesPerView: 3, spaceBetween: 50 },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="projects_content swiper__slide">
            <img className=" projects__img" src={project1} alt="project 1" />

            <div>
              <span className="projects__subtitle">web</span>
              <h1 className="projects__title">Modern Blog App</h1>
              <a
                target="_blank"
                href="https://magnificent-florentine-1949e4.netlify.app/"
                className="projects__button"
              >
                View demo <ArrowRightAltIcon />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="projects_content swiper__slide">
            <img className=" projects__img" src={project2} alt="project 2" />
            <div>
              <span className="projects__subtitle">web</span>
              <h1 className="projects__title">Crypto Currency App</h1>
              <a
              target="_blank"
                href="https://rococo-nasturtium-fed5e8.netlify.app/"
                className="projects__button"
              >
                View demo <ArrowRightAltIcon />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="projects_content swiper__slide">
            <img className=" projects__img" src={project3} alt="project 3" />
            <div>
              <span className="projects__subtitle">web</span>
              <h1 className="projects__title">shopping website</h1>
              <a
                target="_blank"
                href="https://myshopzzz.netlify.app/"
                className="projects__button"
              >
                View demo <ArrowRightAltIcon />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="projects_content swiper__slide">
            <img className="projects__img" src={project4} alt="project 4" />
            <div>
              <span className="projects__subtitle">web</span>
              <h1 className="projects__title">Netflix Clone</h1>
              <a
              target="_blank"
                href="https://mynetflixx.netlify.app/"
                className="projects__button"
              >
                View demo <ArrowRightAltIcon />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="projects_content swiper__slide">
            <img className="projects__img" src={project5} alt="project 5" />
            <div>
              <span className="projects__subtitle">Web</span>
              <h1 className="projects__title">Face Detector</h1>
              <a
              target="_blank"
                href="https://facedetector123.netlify.app/"
                className="projects__button"
              >
                View demo <ArrowRightAltIcon />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
