import React, { useEffect, useRef, useState } from "react";
import "./Testinomial.css";
import "bootstrap/dist/css/bootstrap.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { motion } from "framer-motion";
import { RevealDiv } from "../RevealDiv";
import data from "/src/Data.js";

const Testinomial = () => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  // usf
  return (
    <div className="TestinomalDiv" id="Testinomals">
      <RevealDiv>
        <div className="TestinomalTitle">
          <span>TESTIMONIALS</span>
          <h2>SEE WHAT OUR CILENTS SAY</h2>
        </div>
      </RevealDiv>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        slidesPerView={2}
        className="testimonialContainer"
      >
        {data.map(({ avatar, name, review, profession }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
              <div className="client_profession">{profession}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testinomial;
