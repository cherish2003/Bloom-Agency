import React, { useRef } from "react";
import "./Banner.css";
import icon from "/src/assets/iconlarge.svg";
import { motion, useInView, useAnimation } from "framer-motion";
const Banner = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25 ,ease:"easeInOut"}}
    >
    
      <div className="Banner_sec">
        <div className="Main_title">
          <div className="container">
            <div className="ChanTxt">
              <span className="normal">WE</span>
              <span className="hover">BLOOM</span>
            </div>
            <div>DESIGN</div>
            <div className="Titletext">DEVELOP</div>
            <div>INNOVATE</div>
          </div>
        </div>

        <img src={icon} alt="" srcset="" className="Iconimg" />
      </div>
     </motion.div>
  );
};

export default Banner;
