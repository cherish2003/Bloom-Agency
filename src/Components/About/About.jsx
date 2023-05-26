import React from "react";
import "./About.css";
import { RevealDiv } from "../RevealDiv";
export const About = () => {
  return (
    <div className="AboutSection" >
      <div className="Sectitle">
        <RevealDiv>ABOUT US</RevealDiv>
      </div>
      <div className="Sec_info">
        <RevealDiv>
          We, an innovative agency dedicated to transforming your digital
          presence. With a diverse range of services, including UI and UX
          development, Web & Mobile App Development, Illustration Design, Custom
          Wordpress, Digital Marketing & Management, and Branding Design (Logo &
          Packaging), we empower brands to thrive in the digital landscape. Our
          team of talented experts combines creativity with technical prowess to
          deliver captivating digital experiences. Trust us to enhance your
          brand and engage your audience with our passion for excellence. Let's
          embark on a remarkable journey together.
        </RevealDiv>
      </div>
    </div>
  );
};
