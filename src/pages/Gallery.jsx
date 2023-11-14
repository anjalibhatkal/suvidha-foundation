import React from "react";
import aboutImg from "/images/pages/about/about.jpg";
import workshop from "/images/pages/Gallery/Workshops.jpg";
import books from "/images/pages/Gallery/BooksDistribution.jpg";
import online from "/images/pages/Gallery/OnlineEvents.jpg";
import cloths from "/images/pages/Gallery/ClothsDistribution.jpg";
import tree from "/images/pages/Gallery/TreePlantation.jpg";
import education from "/images/pages/Gallery/FreeEducation.jpg";
import women from "/images/pages/Gallery/Women'sDay.jpg";
import events from "/images/pages/Gallery/SuvidhaEvents.jpg";
import women2 from "/images/pages/Gallery/SanitaryPad.jpg";
import animal from "/images/pages/Gallery/AnimalFeeding.jpg";
import food from "/images/pages/Gallery/FoodDistribution.jpg";

import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <div className="relative">
        <div
          style={{ backgroundImage: `url(${aboutImg})` }}
          className="bg-cover bg-center h-96"
        >
          <div className="bg-black/30 w-screen h-full flex justify-start items-end p-12"></div>
        </div>
        <p className="sm:text-sm md:text-4xl font-bold text-primary-100 text-center bg-base-300 md:w-[300px] sm:p-2 md:px-6 md:py-4 rounded-md absolute sm:top-[360px] md:top-[340px] sm:left-4 md:left-24">
          Gallery
        </p>
        <div
          className="bg-gradient-to-b
from-base-100/50 to-[#FD9346] py-20 sm:px-7 md:px-20"
        >
          <h2 className="text-primary-200 sm:text-xl md:text-4xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-105">
            Moments of Impact: <br />
            Capturing the Journey of Our NGO
          </h2>
          <div
            className="bg-base-200 rounded-full mx-auto text-base-400
          sm:text-sm sm:p-2 md:w-72
          md:text-lg md:p-3 bg-opacity-50 font-medium tracking-wide text-center shadow-md mb-5"
          >
            <h3>Our Gallery</h3>
          </div>
          <div>
            <div className="grid sm:grid-rows-1 md:grid-cols-3 sm:gap-1 md:gap-10 md:w-[1200px]">
              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/11DrNvVoYiIlmKUDW2AvsiklJTuIDL3Gk"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={workshop} alt="FREE WORKSHOPS" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      FREE WORKSHOPS
                    </h2>
                  </div>
                </Link>
              </div>

              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/1FKG4shImI-9JRavKIP-0b-Tp9Hd205VI"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={books} alt="BOOKS DISTRIBUTION" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      BOOKS DISTRIBUTION
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={events} alt="ONLINE EVENTS" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      ONLINE EVENTS
                    </h2>
                  </div>
                </Link>
              </div>

              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/1nOFKvOjhWsbfVVPGumOfpLrFe2364_zK"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={cloths} alt="CLOTHES DISTRIBUTION" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      CLOTHES DISTRIBUTION
                    </h2>
                  </div>
                </Link>
              </div>

              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/1V5Owzjc00GT_U2Mw_bdOMbiCYSxmScSw"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={tree} alt="TREE PLANTATION" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      TREE PLANTATION
                    </h2>
                  </div>
                </Link>
              </div>

              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/1ucG-Ltm_6fAwZ-1ta4-nHhRdKpu-3EAN"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={education} alt="FREE EDUCATION" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      FREE EDUCATION
                    </h2>
                  </div>
                </Link>
              </div>

              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/1_V-acFibBsweHcM-R-P__4EQWpauB6dK"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={women} alt=" WOMEN'S DAY" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      WOMEN'S DAY
                    </h2>
                  </div>
                </Link>
              </div>

              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/1AfCK5kJqf9_N_JGd8wqUhNesS8k1tVmw"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={food} alt="FOOD DISTRIBUTION" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      FOOD DISTRIBUTION
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/1LF6c_FtHzv1ldXKXZ6oRueaD6OtIWsms"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={events} alt="SUVIDHA EVENTS" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      SUVIDHA EVENTS
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/1tMkME479AhVFQ5pUZag3-YPgNWhIn7Rl"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={women2} alt="EMPOWERING WOMEN" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      EMPOWERING WOMEN
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="md:w-8/12 mx-auto my-4">
                <Link
                  to="https://drive.google.com/drive/u/0/folders/1xr7jhBYaap-tZ2puU5HiF6ccitJtBfaB"
                  className="card md:w-96 bg-gradient-to-b
from-base-100/50 to-base-300 shadow-xl rounded-md transition hover:scale-110"
                >
                  <figure>
                    <img src={animal} alt="ANIMAL FEEDING" />
                  </figure>
                  <div className="card-body text-center -mt-2">
                    <h2 className="card-title sm:text-base md:text-xl font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                      ANIMAL FEEDING
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
