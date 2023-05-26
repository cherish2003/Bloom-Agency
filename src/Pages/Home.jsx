import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Services from "../Components/ServiceCard/Services";
import Testinomial from "../Components/Testinomial/Testinomial";
import { About } from "../Components/About/About";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Testinomial />
      <About />
      <Footer/>
    </>
  );
};

export default Home;
