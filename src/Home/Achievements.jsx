import React from "react";
import img from "/images/pages/home/parallax.jpg";
import tree from "/icons/plant.png";
import country from "/icons/countries.png";
import volunteer from "/icons/help.png";
import internship from "/icons/internship.png";

const Achievements = () => {
  return (
    <div
      className="bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="md:h-[400px] bg-black/70 grid md:grid-cols-4 sm:px-12 md:px-24 py-14 text-white md:text-lg font-bold tracking-widest sm:grid-rows-8">
        <div className="flex justify-center items-center space-x-5 sm:my-3 md:my-0">
          <img src={tree} alt="Tree SVG" className="sm:w-8 md:w-12" />
          <div>
            <p className="sm:text-lg md:text-7xl">
              54L<sup>+</sup>
            </p>
            <p className="sm:text-base md:text-2xl">TREES PLANTED</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5 sm:my-3 md:my-0">
          <img src={country} alt="Country SVG" className="sm:w-8 md:w-12" />
          <div>
            <p className="sm:text-lg md:text-7xl">
              15<sup>+</sup>
            </p>
            <p className="sm:text-base md:text-2xl">COUNTRIES</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5 sm:my-3 md:my-0">
          <img src={volunteer} alt="Volunteer SVG" className="sm:w-8 md:w-12" />
          <div>
            <p className="sm:text-lg md:text-7xl">
              3L<sup>+</sup>
            </p>
            <p className="sm:text-base md:text-2xl">VOLUNTEERS</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5 sm:my-3 md:my-0">
          <img
            src={internship}
            alt="Internship SVG"
            className="sm:w-8 md:w-12"
          />
          <div>
            <p className="sm:text-lg md:text-7xl">
              1Cr<sup>+</sup>
            </p>
            <p className="sm:text-base md:text-2xl">INTERNSHIP GOAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
