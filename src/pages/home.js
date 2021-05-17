import React from "react";
import About from "../components/about/about";
import Testimonial from "../components/Testimonial/testimonial";
import Course from "../components/courses/courses";
import Feature from "../components/feature/feature";
import Feature2 from "../components/feature2/feature2";
import Headerbtm from "../components/header/header-btm";
import Joinsec1 from "../components/join-sec1/join-sec1";
import Joinsec2 from "../components/join-sec2/join-sec2";
import Navbar from "../components/navbar/navbar";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Headerbtm />
      <About />
      <Joinsec1 />
      <Joinsec2 />
      <Course />
      <Feature />
      <Feature2 />
      <Testimonial />
    </div>
  );
};

export default Home;
