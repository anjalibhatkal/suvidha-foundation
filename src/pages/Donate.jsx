import React from "react";
import donateImg from "/images/pages/donate.jpg";

import DonateQR from "../components/DonateQR";

const Donate = () => {
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url(${donateImg})` }}
        className="bg-cover bg-center h-96"
      >
        <div className="bg-black/30 w-full h-full flex justify-start items-end p-12"></div>
      </div>
      <p className="sm:text-sm md:text-4xl font-bold text-primary-100 text-center bg-base-300 md:w-[300px] sm:p-2 md:px-6 md:py-4 rounded-md absolute sm:top-[360px] md:top-[340px] sm:left-4 md:left-24">
        Support Us
      </p>
      <DonateQR />
    </div>
  );
};

export default Donate;
