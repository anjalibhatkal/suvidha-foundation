import React from "react";
import certificate from "/images/pages/certificates.jpg";
import { Link } from "react-router-dom";

const VerifyCertificate = () => {
  return (
    <div>
      <div className="relative">
        <div
          style={{ backgroundImage: `url(${certificate})` }}
          className="bg-cover bg-center h-96"
        >
          <div className="bg-black/30 w-full h-full flex justify-start items-end p-12"></div>
        </div>
        <p className="sm:text-sm md:text-4xl font-bold text-primary-100 text-center bg-base-300 md:w-[300px] sm:p-2 md:px-6 md:py-4 rounded-md absolute sm:top-[360px] md:top-[340px] sm:left-4 md:left-24">
          Certificates
        </p>
        <div className="bg-gradient-to-b from-base-100/50 to-[#FD9346] py-20 sm:px-7 md:px-24">
          <h2 className="text-primary-200 sm:text-xl md:text-4xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-105">
            Certificates of Gratitude, <br />
            Tokens of Impact.
          </h2>
          <div
            className="bg-base-400 rounded-full mx-auto
          sm:text-sm sm:p-2 md:w-72
          md:text-lg md:p-3 bg-opacity-80 font-medium tracking-wide text-center shadow-md mb-5 text-base-100"
          >
            <h3>Verify Your Certificate</h3>
          </div>
          <div className="md:px-24 flex nd:flex-row sm:flex-col sm:space-y-3 md:space-x-4 items-center justify-center mb-5">
            <input
              type="text"
              placeholder="Enter Reference Number"
              className="input input-bordered border-4 border-base-400 bg-base-100 md:w-80"
            />
            <Link
              to="/"
              className="btn sm:btn-sm md:btn-md bg-base-300 text-primary-100 border-0 hover:bg-base-400 hover:text-primary-100 mr-5 shadow-lg"
            >
              VERIFY
            </Link>
          </div>
          <p className="text-primary-300 font-bold sm:text-sm md:text-2xl text-center sm:mb-2 md:mb-10 hidden ">
            Record Found!
          </p>
          <p className="text-primary-300 font-bold sm:text-sm md:text-2xl text-center sm:mb-2 md:mb-10 hidden">
            Record Not Found!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
