import React, { useState } from "react";
import about from "/images/pages/home/aboutHome.jpg";

const Background = () => {
  const [activeTab, setactiveTab] = useState("vision");

  const handleActiveTab = (tab) => {
    setactiveTab(tab);
  };
  return (
    <div>
      <div className="bg-white w-screen py-14" id="about-us">
        <h2 className="text-primary-200 sm:text-xl md:text-5xl font-bold tracking-wide sm:mb-1 md:mb-4 text-center transition-transform hover:scale-105">
          Discover Our Background
        </h2>
        <div
          className="bg-base-200 rounded-full mx-auto text-base-400 sm:text-sm sm:p-1
          md:text-xl md:p-3 bg-opacity-25 w-48 font-medium tracking-wide text-center shadow-md"
        >
          <h3>Why choose us?</h3>
        </div>
        <div
          id="about-info"
          className="flex justify-center md:my-8 mx-auto md:flex-row md:w-[768px] sm:flex-col px-4 sm:space-y-4"
        >
          <div
            id="about-photo"
            className="flex justify-center items-center md:mt-16 md:mb-14 basis-1/2 md:mr-20 sm:hidden md:flex"
          >
            <div className="mask mask-squircle w-[440px] h-[440px] bg-base-200 -z-5 absolute">
              .
            </div>
            <div className="mask mask-squircle w-[400px] h-[400px] bg-base-400 -z-5 absolute">
              .
            </div>
            <img
              className="mask mask-squircle object-scale-down"
              src={about}
              alt="Empowerment of Women"
            />
            <div className="mask mask-squircle w-9 h-9 md:top-[1260px] md:left-[255px] bg-primary-200 absolute">
              .
            </div>
            <div className="mask mask-squircle w-5 h-5 md:top-[1240px] md:left-[240px] bg-base-300 absolute">
              .
            </div>
          </div>
          <div
            id="about-tabs"
            className="basis-1/2 md:ml-24 sm:ml-0 flex items-center flex-col"
          >
            <div className="tabs">
              <a
                id="mission-tab"
                className={`tab tab-bordered text-primary-100 text-base md:text-xl duration-500 ${
                  activeTab === "mission" ? "tab-active" : ""
                }`}
                onClick={() => handleActiveTab("mission")}
              >
                Mission
              </a>
              <a
                id="vision-tab"
                className={`tab tab-bordered text-primary-100 text-base md:text-xl duration-500 ${
                  activeTab === "vision" ? "tab-active" : ""
                }`}
                onClick={() => handleActiveTab("vision")}
              >
                Vision
              </a>
              <a
                id="about-tab"
                className={`tab tab-bordered text-primary-100 text-base md:text-xl transition duration-500 ${
                  activeTab === "about" ? "tab-active" : ""
                }`}
                onClick={() => handleActiveTab("about")}
              >
                About
              </a>
            </div>

            <div className="mt-6 relative rounded-2xl bg-base-200">
              <div
                id="mission-content"
                className="tab-panel sm:mt-0 md:mt-4 py-4 md:py-4 px-10 sm:text-sm md:text-base transition duration-300 space-x-1"
                style={{ display: activeTab === "mission" ? "block" : "none" }}
              >
                <ul className="list-disc text-primary-100">
                  <li>
                    To inspire students, assist them in innovation, and enable
                    their integration to shape the next generation of humanity.
                  </li>
                  <li>
                    To conduct food donation and awareness campaigns in rural
                    regions.
                  </li>
                </ul>
              </div>

              <div
                id="vision-content"
                className="tab-panel sm:mt-0 md:mt-4 py-4 md:py-4 px-10 sm:text-sm md:text-base transition duration-300 space-x-1"
                style={{ display: activeTab === "vision" ? "block" : "none" }}
              >
                <ul className="list-disc text-primary-100">
                  <li>
                    To nurture the next generation of entrepreneurs through
                    skill-based education.
                  </li>
                  <li>
                    To offer internships, training, workshops, and quality
                    education worldwide.
                  </li>
                </ul>
              </div>

              <div
                id="about-content"
                className="tab-panel sm:mt-0 md:mt-4 py-4 md:py-4 px-10 sm:text-sm md:text-base transition duration-300 space-x-1"
                style={{ display: activeTab === "about" ? "block" : "none" }}
              >
                <p className="text-primary-100">
                  Suvidha Mahila Mandal is a non-profit organization dedicated
                  to providing education to economically disadvantaged
                  individuals, empowering them to achieve educational equity and
                  enabling young minds to contribute to a promising future. The
                  organization offers student internships, mentorship programs,
                  and volunteer opportunities. Through these initiatives, the
                  organization aspires to realize its vision of delivering
                  innovative education that leaves a lasting impact on students,
                  equipping them for an unpredictable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
