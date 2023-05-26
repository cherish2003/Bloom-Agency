import React from "react";
import "./Footer.css";
import icon from "/src/assets/iconlight.svg";

const Footer = () => {
  return (
    <>
      <div className="MainContainer" id="Footer">
        <div className="Footer_container">
          <div className="Footer_title">
            BLOOM
            <img src={icon} alt="" srcset="" />
          </div>
          <div className="ContanctDiv">
            For enquires and dealings get in touch
            <a href="#">Contact us</a>
          </div>
        </div>
        <div className="CopyrightDiv">
          Copyright ©2023 All rights reserved | Designed and created by
          <div>
            <a href="mailto:saicherish90@gmail.com" target="_blank">
              Cherish
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
