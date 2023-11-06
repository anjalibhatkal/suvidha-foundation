import React from "react";
import eventsImg from "/images/pages/hero-img.jpg";
import tree from "/images/pages/home/events-tree.jpg";
import fund from "/images/pages/home/events-fund.jpg";
import clothes from "/images/SUVIDHA/Events/cloths.jpg";
import women from "/images/SUVIDHA/Events/women.jpg";
import food from "/images/SUVIDHA/Events/food.jpg";
import animal from "/images/SUVIDHA/Events/animal.jpg";
import sanitary from "/images/SUVIDHA/Events/sanitary.jpg";
import workshop from "/images/SUVIDHA/Events/workshop.jpg";

const EventsPage = () => {
  return (
    <div className="relative">
      <div
        style={{ backgroundImage: `url(${eventsImg})` }}
        className="bg-cover bg-center h-96"
      >
        <div className="bg-black/30 w-screen h-full flex justify-start items-end p-12"></div>
      </div>
      <p className="text-4xl font-bold text-primary-100 w-[300px] text-center bg-base-300 px-6 py-4 rounded-md absolute top-[340px] left-24">
        Events
      </p>
      <div
        className="bg-gradient-to-b
from-base-100/50 to-[#FD9346] py-20 px-20"
      >
        <h2 className="text-primary-200 text-4xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-110">
          Our Charity Events: <br />
          Celebrating Our Impact Together
        </h2>
        <div className="bg-base-200 rounded-full mx-auto text-base-400 text-xl p-3 bg-opacity-50 w-72 font-medium tracking-wide text-center shadow-md mb-5">
          <h3>Our Events</h3>
        </div>
        <div className="grid grid-cols-2 gap-6 w-[800px] place-items-center mx-auto">
          <div className="mx-auto my-4">
            <div
              className="card w-96 bg-gradient-to-b
from-base-100/50 to-base-400/80 shadow-xl rounded-md transition hover:scale-110"
            >
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

          <div className="mx-auto my-4">
            <div
              className="card w-96  bg-gradient-to-b
from-base-100/50 to-base-400/80  shadow-xl rounded-md transition hover:scale-110"
            >
              <figure>
                <img src={fund} alt="FUNDRAISING EVENTS" />
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
          <div className="  mx-auto my-4">
            <div
              className="card w-96  bg-gradient-to-b
from-base-100/50 to-base-400/80  shadow-xl rounded-md transition hover:scale-110"
            >
              <figure>
                <img src={clothes} alt="CLOTHS DISTRIBUTION" />
              </figure>
              <div className="card-body text-center -mt-2">
                <p>
                  Providing warmth and dignity through clothing. Join us in our
                  mission to bring smiles and comfort to those in need through
                  our cloth distribution event.
                </p>
                <h2 className="card-title font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                  CLOTHS DISTRIBUTION
                </h2>
              </div>
            </div>
          </div>

          <div className="  mx-auto my-4">
            <div
              className="card w-96  bg-gradient-to-b
from-base-100/50 to-base-400/80  shadow-xl rounded-md transition hover:scale-110"
            >
              <figure>
                <img src={women} alt="WOMEN'S DAY" />
              </figure>
              <div className="card-body text-center -mt-2">
                <p>
                  Celebrating the strength, resilience, and achievements of
                  women worldwide on this special Women's Day. Together, let's
                  honor their contributions.
                </p>
                <h2 className="card-title font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                  WOMEN'S DAY
                </h2>
              </div>
            </div>
          </div>

          <div className="  mx-auto my-4">
            <div
              className="card w-96  bg-gradient-to-b
from-base-100/50 to-base-400/80  shadow-xl rounded-md transition hover:scale-110"
            >
              <figure>
                <img src={food} alt="FOOD DONATION INITIATIVES" />
              </figure>
              <div className="card-body text-center -mt-2">
                <p>
                  Your generous contributions can fill empty plates and bring
                  smiles to those in need. Together, we can create a world where
                  everyone has access to nutritious meals.
                </p>
                <h2 className="card-title font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                  FOOD DONATION INITIATIVES
                </h2>
              </div>
            </div>
          </div>

          <div className="  mx-auto my-4">
            <div
              className="card w-96  bg-gradient-to-b
from-base-100/50 to-base-400/80  shadow-xl rounded-md transition hover:scale-110"
            >
              <figure>
                <img
                  src={animal}
                  alt="ENSURING ANIMAL WELLNESS THROUGH FEEDING PROGRAMS"
                />
              </figure>
              <div className="card-body text-center -mt-2">
                <p>
                  Join us in providing sustenance and compassion to our furry
                  companions. Together, let's make a positive impact on their
                  lives through our Animal Feeding event.
                </p>
                <h2 className="card-title font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                  ENSURING ANIMAL WELLNESS THROUGH FEEDING PROGRAMS
                </h2>
              </div>
            </div>
          </div>

          <div className="  mx-auto my-4">
            <div
              className="card w-96  bg-gradient-to-b
from-base-100/50 to-base-400/80  shadow-xl rounded-md transition hover:scale-110"
            >
              <figure>
                <img src={sanitary} alt="TREE PLANTATION" />
              </figure>
              <div className="card-body text-center -mt-2">
                <p>
                  Breaking barriers and promoting menstrual health with our
                  Sanitary Pad Initiative. Together, let's empower women and
                  ensure access to safe and dignified hygiene.
                </p>
                <h2 className="card-title font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                  SANITARY PADS DISTRIBUTION
                </h2>
              </div>
            </div>
          </div>

          <div className="  mx-auto my-4">
            <div
              className="card w-96  bg-gradient-to-b
from-base-100/50 to-base-400/80  shadow-xl rounded-md transition hover:scale-110"
            >
              <figure>
                <img src={workshop} alt="TREE PLANTATION" />
              </figure>
              <div className="card-body text-center -mt-2">
                <p>
                  Discover new skills, ignite your passions, and embrace
                  lifelong learning with our engaging and enriching free
                  workshops.
                </p>
                <h2 className="card-title font-bold bg-slate-50 justify-center rounded-2xl px-7 py-2">
                  FREE WORKSHOPS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
