import React from "react";
import certificate from "/images/pages/certificates.jpg";
import certificate2 from "/images/pages/certificates2.jpg";
import DonateQR from "../components/DonateQR";

import { Link } from "react-router-dom";

const Certificates = () => {
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
        <div
          className="bg-gradient-to-b
from-base-100/50 to-[#FD9346] pt-20 sm:px-7 md:px-24"
        >
          <h2 className="text-primary-200 sm:text-xl md:text-4xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-105">
            Certificates of Gratitude, <br />
            Tokens of Impact.
          </h2>
          <div
            className="bg-base-200 rounded-full mx-auto text-base-400
          sm:text-sm sm:p-2 md:w-72
          md:text-lg md:p-3 bg-opacity-50 font-medium tracking-wide text-center shadow-md mb-5"
          >
            <h3>Our Certificates</h3>
          </div>
          <div className="flex sm:flex-col md:flex-row py-5 sm:space-y-6 md:space-x-7 justify-center items-center">
            <div>
              <img src={certificate2} alt="Certificate image" width={320} />
            </div>
            <div className="md:w-[600px]">
              <p className="sm:text-sm md:text-lg tracking-wide">
                Welcome to our NGO's certificate showcase. Here, you can explore
                the certificates that donors receive as a token of our
                appreciation for their invaluable support. These certificates
                represent our gratitude and their commitment to making a
                positive impact on our mission. Thank you for being part of our
                journey.
              </p>
            </div>
          </div>
          <div className="bg-base-500/40 sm:px-5 md:px-20 sm:py-6 md:py-16 md:mt-10 rounded-md ">
            <div className="flex flex-col space-y-2 mb-10 text-right items-end">
              <p className="sm:text-sm md:text-xl text-primary-300">
                <span className="sm:text-base md:text-4xl font-bold text-primary-100 ">
                  - 80G Certificate -
                </span>{" "}
                <br />
                80G certificate is an official recognition from the Indian
                government that empowers you to contribute to our cause with a
                dual benefit: you support positive change while enjoying tax
                benefits. Join us in making a difference today.
              </p>
              <Link
                to="https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf"
                className="btn md:w-56 sm:btn-sm md:btn-md bg-base-100 text-primary-100 border-0 hover:bg-base-300 hover:text-primary-100 md:mr-5 shadow-lg"
              >
                VIEW FORM
              </Link>
            </div>
            <div className="flex flex-col space-y-2 mb-10 items-start">
              <p className="sm:text-sm md:text-xl text-primary-300">
                <span className="sm:text-base md:text-4xl font-bold text-primary-100 ">
                  - 12A Certificate -
                </span>{" "}
                <br />
                12A certificate is an official endorsement from the Indian
                government that enables you to back our mission with a two-fold
                advantage: you champion positive change and reap tax benefits.
                Come, be a part of our journey towards making a meaningful
                difference today.
              </p>
              <Link
                to="https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf"
                className="btn md:w-56 sm:btn-sm md:btn-md bg-base-100 text-primary-100 border-0 hover:bg-base-300 hover:text-primary-100 mr-5 shadow-lg"
              >
                VIEW FORM
              </Link>
            </div>
            <div className="flex flex-col space-y-2 text-right items-end">
              <p className="sm:text-sm md:text-xl text-primary-300">
                <span className="sm:text-base md:text-4xl font-bold text-primary-100 ">
                  - CSR Certificate -
                </span>{" "}
                <br />
                CSR certificate is a testament to our commitment to corporate
                social responsibility. When you partner with us, you not only
                support impactful initiatives but also fulfill your CSR
                obligations, contributing to a better society. Join us in
                shaping a brighter future through responsible corporate
                citizenship.
              </p>
              <Link
                to="https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF"
                className="btn md:w-56 sm:btn-sm md:btn-md bg-base-100 text-primary-100 border-0 hover:bg-base-300 hover:text-primary-100 md:mr-5 shadow-lg"
              >
                VIEW FORM
              </Link>
            </div>
            <div className="mt-10">
              <div className="flex items-center mb-10 space-x-3">
                <p className="sm:text-lg md:text-2xl font-bold text-primary-300">
                  Suvidha Darpan Registration Details
                </p>
                <Link
                  to="https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf"
                  className="btn md:w-36 sm:btn-sm md:btn-md bg-base-400/60 text-primary-100 border-0 hover:bg-base-200 hover:text-primary-100 mr-5 shadow-lg"
                >
                  Click Here
                </Link>
              </div>
              <div className="flex items-center mb-10 space-x-3 justify-end">
                <Link
                  to="https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf"
                  className="btn md:w-36 sm:btn-sm md:btn-md bg-base-400/60 text-primary-100 border-0 hover:bg-base-200 hover:text-primary-100 mr-5 shadow-lg"
                >
                  Click Here
                </Link>
                <p className="sm:text-lg md:text-2xl font-bold text-primary-300">
                  Suvidha Pan Card Details
                </p>
              </div>
            </div>
          </div>

          <div className="sm:py-3 md:py-10">
            <DonateQR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
