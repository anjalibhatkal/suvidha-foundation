import React from "react";
import Card from "../components/Card";
import Shobha from "/images/SUVIDHA/Team/shobha.jpeg";
import Payal from "/images/SUVIDHA/Team/Payal.jpg";
import Bharti from "/images/SUVIDHA/Team/Bharti.jpg";
import Nilima from "/images/SUVIDHA/Team/Nilima.jpg";

const Team = () => {
  return (
    <div>
      <div
        className="w-screen  sm:px-12 sm:py-8 md:py-20 md:px-24 h-fit bg-gradient-to-b
 from-base-100 to-base-300"
        id="about-us"
      >
        <h2 className="text-primary-200 sm:text-xl md:text-5xl  font-bold tracking-wide mb-4 text-center transition-transform hover:scale-105">
          Inspiring Individuals Driving Our Charity Initiatives.
        </h2>
        <div
          className="bg-white rounded-full mx-auto text-base-400
          sm:text-sm sm:p-2 md:w-48
          md:text-lg md:p-3 bg-opacity-25 font-medium tracking-wide text-center shadow-md"
        >
          <h3>Meet Our Team</h3>
        </div>

        <div
          id="card-group"
          className="md:w-[1200px] mx-auto my-8 md:h-96 grid sm:grid-cols-2 md:grid-cols-4 gap-2 justify-center items-center"
        >
          <Card image={Shobha} name="Shobha Motghare" des="Secretary" />
          <Card image={Payal} name="Payal Badhe" des="President" />
          <Card image={Bharti} name="Bharti Shendre" des="Treasurer" />
          <Card image={Nilima} name="Nilima Kalambe" des="Advisor" />
        </div>
      </div>
    </div>
  );
};

export default Team;
