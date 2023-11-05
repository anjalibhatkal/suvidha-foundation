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
      <div className="h-[400px] bg-black/70 grid grid-cols-4 px-24 py-14 text-white text-lg font-bold tracking-widest">
        <div className="flex justify-center items-center space-x-5">
          <img src={tree} alt="Tree SVG" className="w-12" />
          <div>
            <p className="text-7xl">
              54L<sup>+</sup>
            </p>
            <p className="text-2xl">TREES PLANTED</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <img src={country} alt="Country SVG" className="w-12" />
          <div>
            <p className="text-7xl">
              15<sup>+</sup>
            </p>
            <p className="text-2xl">COUNTRIES</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <img src={volunteer} alt="Volunteer SVG" className="w-12" />
          <div>
            <p className="text-7xl">
              3L<sup>+</sup>
            </p>
            <p className="text-2xl">VOLUNTEERS</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <img src={internship} alt="Internship SVG" className="w-12" />
          <div>
            <p className="text-7xl">
              1Cr<sup>+</sup>
            </p>
            <p className="text-2xl">INTERNSHIP GOAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
