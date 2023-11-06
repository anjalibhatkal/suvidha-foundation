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
        <p className="text-4xl font-bold text-primary-100 w-[300px] text-center bg-base-300 px-6 py-4 rounded-md absolute top-[340px] left-24">
          Certificates
        </p>
        <div className="bg-gradient-to-b from-base-100/50 to-[#FD9346] py-20 px-24">
          <h2 className="text-primary-200 text-4xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-110">
            Certificates of Gratitude, <br />
            Tokens of Impact.
          </h2>
          <div className="bg-base-400 rounded-full mx-auto text-base-100 text-xl p-3 bg-opacity-80 w-72 font-medium tracking-wide text-center shadow-md mb-5">
            <h3>Verify Your Certificate</h3>
          </div>
          <div className="px-24 flex space-x-4 items-center justify-center mb-5">
            <input
              type="text"
              placeholder="Enter Reference Number"
              class="input input-bordered border-4 border-base-400 bg-base-100 w-full max-w-xs"
            />
            <Link
              to="/"
              className="btn sm:btn-sm md:btn-md bg-base-300 text-primary-100 border-0 hover:bg-base-400 hover:text-primary-100 mr-5 shadow-lg"
            >
              Watch Video
            </Link>
          </div>
          <p className="text-primary-300 font-bold text-2xl text-center mb-10 hidden">
            Record Found!
          </p>
          <p className="text-primary-300 font-bold text-2xl text-center mb-10 hidden">
            Record Not Found!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
