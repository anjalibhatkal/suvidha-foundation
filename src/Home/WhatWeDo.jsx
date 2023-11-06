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
      <div id="what-we-do" className="w-screen pt-14 pb-20 px-24 bg-base-300">
        <h2 className="text-primary-300 text-5xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-110">
          What We Do?
        </h2>
        <div
          className="bg-base-100 rounded-full mx-auto text-base-400
          text-xl p-3 w-96 font-medium tracking-wide text-center shadow-m"
        >
          <h3>Causes for a Sustainable Future</h3>
        </div>

        <div
          id="what-we-do-info"
          className="grid grid-cols-2 mx-auto max-w-7xl bg-white/90 mt-7 py-10 px-24 rounded-lg"
        >
          <div className="flex space-x-6 justify-center items-center my-3">
            <img
              src={diet}
              alt="Food Icon"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="border-l-4 border-base-400 border-b-base-content h-32 p-4">
              <h1 className="text-2xl font-bold text-primary-100">
                Healthy Food
              </h1>
              <p className="hover:italic transition-transform duration-300 ease-in-out">
                By focusing on healthy food donations, our NGO aims to improve
                the well-being and quality of life for individuals and
                communities in need.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 justify-center items-center my-3">
            <img
              src={aware}
              alt="Social Awareness Icon"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="border-l-4 border-base-400 border-b-base-content h-32 p-4">
              <h1 className="text-2xl font-bold text-primary-100">
                Social Awareness
              </h1>
              <p className="hover:italic transition-transform duration-300 ease-in-out">
                We provide resources, conduct awareness campaigns, and
                facilitate access to hygiene facilities, aiming to create a
                healthier environment and prevent the spread of diseases.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 justify-center items-center my-3">
            <img
              src={tree}
              alt="Tree Plantation Icon"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="border-l-4 border-base-400 border-b-base-content h-32 p-4">
              <h1 className="text-2xl font-bold text-primary-100">
                Tree Plantation
              </h1>
              <p className="hover:italic transition-transform duration-300 ease-in-out">
                Through community engagement and active participation, we
                successfully planted thousands of trees, fostering a greener and
                healthier ecosystem for future generations.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 justify-center items-center my-3">
            <img
              src={health}
              alt="Health Care Icon"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="border-l-4 border-base-400 border-b-base-content h-32 p-4">
              <h1 className="text-2xl font-bold text-primary-100">
                Health Care
              </h1>
              <p className="hover:italic transition-transform duration-300 ease-in-out">
                We believe that access to healthcare is a fundamental right, and
                we work tirelessly to ensure that healthcare services are
                accessible, affordable, and of high quality for those in need.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 justify-center items-center my-3">
            <img
              src={edu}
              alt="Primary Education Icon"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="border-l-4 border-base-400 border-b-base-content h-32 p-4">
              <h1 className="text-2xl font-bold text-primary-100">
                Primary Education
              </h1>
              <p className="hover:italic transition-transform duration-300 ease-in-out">
                By collaborating with local communities and educators, we aim to
                empower children with the knowledge and skills they need for a
                brighter future.
              </p>
            </div>
          </div>
          <div className="flex space-x-6 justify-center items-center my-3">
            <img
              src={care}
              alt="Social Care Icon"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="border-l-4 border-base-400 border-b-base-content h-32 p-4">
              <h1 className="text-2xl font-bold text-primary-100">
                Social Care
              </h1>
              <p className="hover:italic transition-transform duration-300 ease-in-out">
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
