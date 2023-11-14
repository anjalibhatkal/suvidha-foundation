import React from "react";
import qr from "/images/SUVIDHA/qrdonate.jpg";

export default function DonateQR() {
  return (
    <div>
      <div
        className="bg-gradient-to-b
from-base-100/50 to-[#FD9346] sm:py-5 sm:px-7 md:py-20 md:px-24"
      >
        <h2 className="text-primary-200 sm:text-lg md:text-4xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-110">
          Make a positive impact, support a worthy cause, <br />
          and change lives by donating to an NGO.
        </h2>
        <div
          className="bg-base-200 rounded-full mx-auto text-base-100
          sm:text-sm sm:p-2 md:w-72
          md:text-lg md:p-3 bg-opacity-50 font-medium tracking-wide text-center shadow-md mb-5"
        >
          <h3>Donate</h3>
        </div>
        <div className="flex flex-col space-y-10 justify-center items-center rounded-md mx-auto bg-white/80 sm:py-2 md:py-7 px-20 md:w-3/4 md:h-[450px]">
          <h1 className="text-primary-100 font-bold sm:text-base md:text-3xl">
            ACCOUNT DETAILS
          </h1>

          <div className="flex sm:flex-col md:flex-row justify-around items-center sm:space-y-4 md:space-x-10">
            <div className="sm:px-44 md:px-0">
              <h1 className="sm:text-base md:text-2xl font-bold sm:py-0 md:py-2">
                For Indian Donors
              </h1>

              <div className="flex sm:space-x-2 md:space-x-5 justify-center items-center">
                <div className="sm:text-sm md:text-xl font-bold">
                  <p>Bank</p>
                  <p>City</p>
                  <p>Contact Number</p>
                  <p>Account Name</p>
                  <p>Suvidha Account Number</p>
                  <p>IFSC CODE</p>
                </div>
                <div className="sm:text-sm md:text-xl">
                  <p>BANK OF BARODA</p>
                  <p>NAGPUR</p>
                  <p>+91 8010996763</p>
                  <p>SUVIDHA MAHILA MANDAL</p>
                  <p>97840100027609</p>
                  <p>BARB0DBKPAR</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-100 sm:w-40 md:w-80 p-4 flex items-center justify-center">
              <img src={qr} alt="QR CODE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
