import React from "react";
import tree from "/images/pages/home/events-tree.jpg";
import fund from "/images/pages/home/events-fund.jpg";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div>
      <div className="bg-white w-screen pt-16 pb-20" id="about-us">
        <h2 className="text-primary-200 text-5xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-110">
          Celebrating Our Impact Together
        </h2>
        <div
          className="bg-base-200 rounded-full mx-auto text-base-400
          text-xl p-3 bg-opacity-25 w-72 font-medium tracking-wide text-center shadow-md"
        >
          <h3>Our Charity Events</h3>
        </div>

        <div className="flex space-x-10 w-[800px] mx-auto">
          <div className="w-8/12 mx-auto my-10">
            <div className="card w-96 bg-base-300 bg-opacity-70 shadow-xl rounded-md transition hover:scale-110">
              <figure>
                <img src={tree} alt="TREE PLANTATION" />
              </figure>
              <div className="card-body text-center -mt-2">
                <p>
                  Join us in nurturing the Earth's embrace, one tree at a time.
                  Together, let's create a greener tomorrow and breathe life
                  into our planet.
                </p>
                <h2 className="card-title font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                  TREE PLANTATION
                </h2>
              </div>
            </div>
          </div>

          <div className="w-8/12 mx-auto my-10">
            <div className="card w-96 bg-base-300 bg-opacity-70 shadow-xl rounded-md transition hover:scale-110">
              <figure>
                <img src={fund} alt="TREE PLANTATION" />
              </figure>
              <div className="card-body text-center -mt-2">
                <p>
                  Unlock the power of generosity at our Fundraising Event. Your
                  support will ignite positive change and uplift lives in our
                  community.
                </p>
                <h2 className="card-title font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                  FUNDRAISING EVENTS
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/events"
            className="btn sm:btn-sm md:btn-md bg-base-300 text-primary-100 border-0 hover:bg-base-200 hover:text-primary-100 mx-auto w-44"
          >
            <p className="text-lg"> VIEW MORE</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
