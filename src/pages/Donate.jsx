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
      <p className="text-4xl font-bold text-primary-100 w-[300px] text-center bg-base-300 px-6 py-4 rounded-md absolute top-[340px] left-24">
        Support Us
      </p>
      <DonateQR />
    </div>
  );
};

export default Donate;
