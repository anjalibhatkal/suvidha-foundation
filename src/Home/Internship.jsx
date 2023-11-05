import React from "react";
import student from "/icons/student-icon.png";
import { Link } from "react-router-dom";

const Internship = () => {
  return (
    <div>
      <div
        id="student-benefits"
        className="bg-gradient-to-b flex justify-center items-center from-base-100 to-base-300 w-screen px-24 py-14"
      >
        <div id="internship-info" className="p-3">
          <h1 className="text-5xl font-bold text-primary-200 mb-4">
            Our Internship & Mentorship Opportunities
          </h1>
          <p className="mb-5 text-lg w-[600px] ml-1 text-primary-100">
            <i>
              Seize the opportunity to jumpstart your career with an internship
              that propels you towards success and offers invaluable experience.
            </i>
          </p>
          <div className="container bg-base-100 p-5  text-center w-[550px] bg-opacity-50 rounded-xl shadow-md">
            <p className="mb-3 text-lg w-[500px] text-primary-100">
              The Suvidha Foundation Internship Program offers students and
              recent graduates a unique opportunity to gain experience,
              contribute to our work, and build a professional portfolio based
              on their skills.
            </p>
            <Link
              to="/internship"
              className="btn bg-base-100 sm:btn-sm md:btn-md text-primary-100 hover:bg-primary-200 hover:border-0 hover:text-primary-100 border-solid border-2 border-primary-200"
            >
              APPLY NOW
            </Link>
          </div>
        </div>
        <img src={student} alt="Student Illustration" width={"400px"} />
      </div>
    </div>
  );
};

export default Internship;
