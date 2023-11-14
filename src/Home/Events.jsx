import React from "react";
import tree from "/images/pages/home/events-tree.jpg";
import fund from "/images/pages/home/events-fund.jpg";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div>
      <div
        className="bg-white w-screen sm:px-12 sm:py-5 md:pt-14 md:pb-20 md:px-24"
        id="about-us"
      >
        <h2 className="text-primary-200 sm:text-xl md:text-5xl font-bold tracking-wide sm:mb-1 md:mb-4 text-center transition-transform hover:scale-105">
          Celebrating Our Impact Together
        </h2>
        <div
          className="bg-base-200 rounded-full mx-auto text-base-400
          sm:text-sm sm:p-2 md:w-80
          md:text-lg md:p-3 bg-opacity-25 font-medium tracking-wide text-center shadow-md"
        >
          <h3>Our Charity Events</h3>
        </div>

        <div className="flex md:flex-row sm:flex-col justify-around items-center sm:space-y-1">
          <div className="mx-auto sm:my-4 md:my-10">
            <div className="card md:w-96 bg-base-300 bg-opacity-70 shadow-xl rounded-md transition hover:scale-110">
              <figure>
                <img src={tree} alt="TREE PLANTATION" />
              </figure>
              <div className="card-body text-center -mt-2 sm:text-sm">
                <p>
                  Join us in nurturing the Earth's embrace, one tree at a time.
                  Together, let's create a greener tomorrow and breathe life
                  into our planet.
                </p>
                <h2 className="card-title font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2 sm:text-sm">
                  TREE PLANTATION
                </h2>
              </div>
            </div>
          </div>

          <div className="mx-auto sm:my-4 md:my-10">
            <div className="card md:w-96 bg-base-300 bg-opacity-70 shadow-xl rounded-md transition hover:scale-110">
              <figure>
                <img src={fund} alt="TREE PLANTATION" />
              </figure>
              <div className="card-body text-center -mt-2 sm:text-sm">
                <p>
                  Unlock the power of generosity at our Fundraising Event. Your
                  support will ignite positive change and uplift lives in our
                  community.
                </p>
                <h2 className="card-title font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2 sm:text-sm">
                  FUNDRAISING EVENTS
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center my-3">
          <Link
            to="/events"
            className="btn sm:btn-sm md:btn-md bg-base-300 text-primary-100 border-0 hover:bg-base-200 hover:text-primary-100 mx-auto w-44"
          >
            <p className="sm:text-base md:text-lg">VIEW MORE</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
