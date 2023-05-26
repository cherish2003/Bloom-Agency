import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import icon from "/src/assets/icondark.svg";
import { Link } from "react-router-dom";
// import {}
import { motion, useInView, useAnimation } from "framer-motion";
import Card from "../ServiceCard/Services";
import Services from "../ServiceCard/Services";
let easeing = [0.6, -0.05, 0.01, 0.99];

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const linkClick = () => {
    console.log("sfdsfds");
  };

  return (
    <>
      <motion.div initial="initial" animate="animate">
        <div className="Nav_div">
          <motion.div variants={header} className="Nav_title " id="#top">
            BLOOM
            <motion.span variants={header}>
              <img src={icon} alt="" srcset="" />
            </motion.span>
          </motion.div>
          <motion.div variants={header} className="Nav_links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#Testinomals">Testinomals</a>
              </li>
              <li>
                <a href="#Footer">About</a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
