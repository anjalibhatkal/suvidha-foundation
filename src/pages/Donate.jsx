import React from "react";
import donateImg from "/images/pages/donate.jpg";
import qr from "/images/SUVIDHA/qrdonate.jpg";

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
      <div className="bg-base-100 py-20 px-24">
        <h2 className="text-primary-200 text-4xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-110">
          Make a positive impact, support a worthy cause, <br />
          and change lives by donating to an NGO.
        </h2>
        <div className="bg-base-200 rounded-full mx-auto text-base-400 text-xl p-3 bg-opacity-50 w-72 font-medium tracking-wide text-center shadow-md mb-10">
          <h3>Donate</h3>
        </div>
        <div className="flex flex-col space-y-10 justify-center items-center rounded-md mx-auto bg-white/80 py-7 px-20 w-3/4 h-[450px]">
          <h1 className="text-primary-100 font-bold text-3xl">
            ACCOUNT DETAILS
          </h1>

          <div className="flex justify-around items-center space-x-10">
            <div>
              <h1 className="text-2xl font-bold py-2">For Indian Donors</h1>

              <div className="flex space-x-5  justify-center items-center">
                <div className="text-xl font-bold">
                  <p>Bank</p>
                  <p>City</p>
                  <p>Contact Number</p>
                  <p>Account Name</p>
                  <p>Suvidha Account Number</p>
                  <p>IFSC CODE</p>
                </div>
                <div className="text-xl">
                  <p>BANK OF BARODA</p>
                  <p>NAGPUR</p>
                  <p>+91 8010996763</p>
                  <p>SUVIDHA MAHILA MANDAL</p>
                  <p>97840100027609</p>
                  <p>BARB0DBKPAR</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-100 w-80 p-4 flex items-center justify-center">
              <img src={qr} alt="QR CODE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
