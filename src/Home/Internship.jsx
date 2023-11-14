import React from "react";
import student from "/icons/student-icon.png";
import { Link } from "react-router-dom";

const Internship = () => {
  return (
    <div>
      <div
        id="student-benefits"
        className="bg-gradient-to-b from-base-100 to-base-300 flex md:flex-row sm:flex-col justify-center items-center sm:px-7 md:px-24 sm:py-4 md:py-14"
      >
        <div id="internship-info" className="md:p-5">
          <h1 className="sm:text-2xl md:text-5xl font-bold text-primary-200 my-4">
            Our Internship & Mentorship Opportunities
          </h1>
          <p className="mb-5 sm:text-sm md:text-lg ml-1 text-primary-100">
            <i>
              Seize the opportunity to jumpstart your career with an internship
              that propels you towards success and offers invaluable experience.
            </i>
          </p>
          <div className="container bg-base-100 p-5 text-center bg-opacity-50 rounded-xl shadow-md">
            <p className="mb-3 sm:text-base md:text-lg text-primary-100">
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
        <img
          src={student}
          alt="Student Illustration"
          className="sm:w-[200px] md:w-[600px]"
        />
      </div>
    </div>
  );
};

export default Internship;
