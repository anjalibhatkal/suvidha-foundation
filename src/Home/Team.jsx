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
        className="w-screen py-20 h-fit bg-gradient-to-b
 from-base-100 to-base-300"
        id="about-us"
      >
        <h2 className="text-primary-200 text-5xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-110">
          Inspiring Individuals Driving Our Charity Initiatives.
        </h2>
        <div
          className="bg-white rounded-full mx-auto text-base-400
          text-xl p-3 bg-opacity-25 w-48 font-medium tracking-wide text-center shadow-md"
        >
          <h3>Meet Our Team</h3>
        </div>

        <div
          id="card-group"
          className="w-[1200px] mx-auto my-8 h-96 grid grid-cols-4 gap-2 justify-center items-center"
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
