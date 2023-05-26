import React, { useRef, useEffect } from "react";
import {
  IoMailOutline,
  IoChevronForward,
  IoApps,
  IoNotifications,
  IoPieChart,
  IoNewspaper,
  IoCard,
  IoColorFill,
  IoBuild,
  IoLogoFigma,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import "./Services.css";
import { RevealDiv } from "../RevealDiv";
let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const title = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: easing,
    },
  },
};

const hoverEffect = {
  whileHover: {
    scale: 1.5,
    rotate: 360,
    borderRadius: "100%",
  },
  whileTap: {
    scale: 0.8,
    rotate: 630,
    borderRadius: "100%",
  },
};
const Services = () => {
  return (
    <motion.div className="service_container" id="Services">
      <div className="title_wrapper">
        <RevealDiv>
          <motion.span className="service_title">Our Services</motion.span>
          <motion.h2>HERE IS WHAT WE CAN DO FOR YOU</motion.h2>
        </RevealDiv>
      </div>

      <motion.div
        className="service_card"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "lightgrey" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider
              className="icon_class"
              value={{ color: "black", size: "22px" }}
            >
              <IoLogoFigma />
            </IconContext.Provider>
          </motion.span>
          <h3>
            Ui/Ux Design
            <br />
            For Mobile & Web
          </h3>
        </motion.div>

        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "lightgrey" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "black", size: "22px" }}>
              <IoBuild />
            </IconContext.Provider>
          </motion.span>
          <h3>
            Web & Mobile
            <br />
            App Development
          </h3>
        </motion.div>
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "lightgrey" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "black", size: "22px" }}>
              <IoColorFill />
            </IconContext.Provider>
          </motion.span>
          <h3>
            Illustration Design
            <br />
            (Flat, 3d & More)
          </h3>
        </motion.div>

        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "lightgrey" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "black", size: "22px" }}>
              <IoNewspaper />
            </IconContext.Provider>
          </motion.span>
          <h3>
            Custom Wordpress
            <br />
            Design & Dev.
          </h3>
        </motion.div>
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "lightgrey" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "black", size: "22px" }}>
              <IoPieChart />
            </IconContext.Provider>
          </motion.span>
          <h3>
            Digital Marketing
            <br />& Management
          </h3>
        </motion.div>
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "lightgrey" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "black", size: "22px" }}>
              <IoCard />
            </IconContext.Provider>
          </motion.span>
          <h3>
            Branding Design
            <br />
            (Logo & Packaging)
          </h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

//thanks for watching
//please subscribe my channel..........
