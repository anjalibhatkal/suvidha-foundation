import React from "react";
import upes from "/images/SUVIDHA/Logos/upes.jpg";
import jindal from "/images/SUVIDHA/Logos/jindal.jpg";

const Collaborations = () => {
  return (
    <div>
      <div className="bg-white w-screen pt-16 pb-10 sm:px-12" id="about-us">
        <h2 className="text-primary-200 sm:text-xl md:text-5xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-105">
          Empowering Change Together
        </h2>
        <div
          className="bg-base-200 rounded-full mx-auto text-base-400
          sm:text-sm sm:p-2 md:w-80
          md:text-lg md:p-3 bg-opacity-25 font-medium tracking-wide text-center shadow-md"
        >
          <h3>Our Collaborative Initiatives</h3>
        </div>
        <div
          id="collab-icons"
          className="flex md:flex-row sm:flex-col md:w-72 mx-auto sm:my-1 md:my-3 justify-center items-center"
        >
          <img src={jindal} alt="UPES Logo" />
          <img src={upes} alt="UPES Logo" />
          <img src={jindal} alt="UPES Logo" />
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
