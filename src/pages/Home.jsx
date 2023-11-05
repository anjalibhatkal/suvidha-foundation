import React, { useState } from "react";
import Carousel from "../Home/Carousel";
import Background from "../Home/Background";
import Internship from "../Home/Internship";
import WhatWeDo from "../Home/WhatWeDo";
import Events from "../Home/Events";
import Testimonial from "../Home/Testimonial";
import Team from "../Home/Team";
import Collaborations from "../Home/Collaborations";
import Achievements from "../Home/Achievements";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Background />
      <Achievements />
      <WhatWeDo />
      <Events />
      <Internship />
      <Testimonial />
      <Collaborations />
      <Team />
    </div>
  );
};

export default Home;
