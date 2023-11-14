import React from "react";

import diet from "/icons/diet.png";
import aware from "/icons/brand-awareness.png";
import tree from "/icons/plantation.png";
import health from "/icons/healthcare.png";
import edu from "/icons/campus.png";
import care from "/icons/social-care.png";

const WhatWeDo = () => {
  return (
    <div>
      <div
        id="what-we-do"
        className="w-screen sm:px-12 sm:py-7 md:pt-14 md:pb-20 md:px-24 bg-base-300"
      >
        <h2 className="text-primary-300 sm:text-xl md:text-5xl font-bold tracking-wide sm:mb-1 md:mb-4 text-center transition-transform hover:scale-105">
          What We Do?
        </h2>
        <div
          className="bg-base-100 rounded-full mx-auto text-base-400
          sm:text-sm sm:p-2 md:w-80
          md:text-lg md:p-3 bg-opacity-50 font-medium tracking-wide text-center shadow-md"
        >
          <h3>Causes for a Sustainable Future</h3>
        </div>

        <div
          id="what-we-do-info"
          className="grid grid-cols-2 mx-auto md:max-w-7xl bg-white/90 mt-7  sm:py-2 md:py-10 sm:px-5 md:px-24 rounded-lg"
        >
          <div className="flex sm:space-x-2 md:space-x-6 justify-center items-center sm:my-1 md:my-3">
            <img src={diet} alt="Food Icon" className="sm:w-5 md:w-12" />
            <div className="sm:border-l-2 md:border-l-4 border-base-400 border-b-base-content sm:h-10 sm:p-1 md:h-32 md:p-4">
              <h1 className="sm:text-sm md:text-2xl font-bold text-primary-100">
                Healthy Food
              </h1>
              <p className="sm:hidden md:flex">
                By focusing on healthy food donations, our NGO aims to improve
                the well-being and quality of life for individuals and
                communities in need.
              </p>
            </div>
          </div>
          <div className="flex sm:space-x-2 md:space-x-6 justify-center items-center sm:my-1 md:my-3">
            <img
              src={aware}
              alt="Social Awareness Icon"
              className="sm:w-5 md:w-12"
            />
            <div className="sm:border-l-2 md:border-l-4 border-base-400 border-b-base-content sm:h-10 sm:p-1 md:h-32 md:p-4">
              <h1 className="sm:text-sm md:text-2xl font-bold text-primary-100">
                Social Awareness
              </h1>
              <p className="sm:hidden md:flex">
                We provide resources, conduct awareness campaigns, and
                facilitate access to hygiene facilities, aiming to create a
                healthier environment and prevent the spread of diseases.
              </p>
            </div>
          </div>
          <div className="flex sm:space-x-2 md:space-x-6 justify-center items-center sm:my-1 md:my-3">
            <img
              src={tree}
              alt="Tree Plantation Icon"
              className="sm:w-5 md:w-12"
            />
            <div className="sm:border-l-2 md:border-l-4 border-base-400 border-b-base-content sm:h-10 sm:p-1 md:h-32 md:p-4">
              <h1 className="sm:text-sm md:text-2xl font-bold text-primary-100">
                Tree Plantation
              </h1>
              <p className="sm:hidden md:flex">
                Through community engagement and active participation, we
                successfully planted thousands of trees, fostering a greener and
                healthier ecosystem for future generations.
              </p>
            </div>
          </div>
          <div className="flex sm:space-x-2 md:space-x-6 justify-center items-center sm:my-1 md:my-3">
            <img
              src={health}
              alt="Health Care Icon"
              className="sm:w-5 md:w-12"
            />
            <div className="sm:border-l-2 md:border-l-4 border-base-400 border-b-base-content sm:h-10 sm:p-1 md:h-32 md:p-4">
              <h1 className="sm:text-sm md:text-2xl font-bold text-primary-100">
                Health Care
              </h1>
              <p className="sm:hidden md:flex">
                We believe that access to healthcare is a fundamental right, and
                we work tirelessly to ensure that healthcare services are
                accessible, affordable, and of high quality for those in need.
              </p>
            </div>
          </div>
          <div className="flex sm:space-x-2 md:space-x-6 justify-center items-center sm:my-1 md:my-3">
            <img
              src={edu}
              alt="Primary Education Icon"
              className="sm:w-5 md:w-12"
            />
            <div className="sm:border-l-2 md:border-l-4 border-base-400 border-b-base-content sm:h-10 sm:p-1 md:h-32 md:p-4">
              <h1 className="sm:text-sm md:text-2xl font-bold text-primary-100">
                Primary Education
              </h1>
              <p className="sm:hidden md:flex">
                By collaborating with local communities and educators, we aim to
                empower children with the knowledge and skills they need for a
                brighter future.
              </p>
            </div>
          </div>
          <div className="flex sm:space-x-2 md:space-x-6 justify-center items-center sm:my-1 md:my-3">
            <img src={care} alt="Social Care Icon" className="sm:w-5 md:w-12" />
            <div className="sm:border-l-2 md:border-l-4 border-base-400 border-b-base-content sm:h-10 sm:p-1 md:h-32 md:p-4">
              <h1 className="sm:text-sm md:text-2xl font-bold text-primary-100">
                Social Care
              </h1>
              <p className="sm:hidden md:flex">
                Our programs encompass a range of support services, including
                counseling, vocational training, and advocacy, with the goal of
                empowering individuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
