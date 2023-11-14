import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import intern from "/images/pages/intern.jpg";
import item1 from "/images/pages/intern1.jpg";
import item2 from "/images/pages/intern2.jpg";
import item3 from "/images/pages/intern3.jpg";
import images from "./../../testimonial";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper/modules";

const renderTestimonialSlide = (id, src) => {
  return (
    <SwiperSlide key={id}>
      <div className="flex justify-center items-center bg-base-300 py-10 mb-10">
        <img src={src} alt="Intern Review" width={200} height={200} />
      </div>
    </SwiperSlide>
  );
};

const ApplyIntern = () => {
  return (
    <div>
      <div className="relative">
        <div
          style={{ backgroundImage: `url(${intern})` }}
          className="bg-cover bg-center h-96"
        >
          <div className="bg-black/30 w-full h-full flex justify-start items-end p-12"></div>
        </div>
        <p className="sm:text-sm md:text-4xl font-bold text-primary-100 text-center bg-base-300 md:w-[300px] sm:p-2 md:px-6 md:py-4 rounded-md absolute sm:top-[360px] md:top-[340px] sm:left-4 md:left-24">
          Internships
        </p>
        <div
          className="bg-gradient-to-b
from-base-100/50 to-[#FD9346] pt-20 sm:px-7 md:px-24"
        >
          <h2 className="text-primary-200 sm:text-xl md:text-4xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-105">
            Elevate Your Future: <br /> Join our Internship and Mentorship
            Program.
          </h2>
          <div
            className="bg-base-200 rounded-full mx-auto text-base-400
          sm:text-sm sm:p-2 md:w-72
          md:text-lg md:p-3 bg-opacity-50 font-medium tracking-wide text-center shadow-md mb-5"
          >
            <h3>Our Internships</h3>
          </div>
          <div className="flex md:flex-row sm:flex-col sm:space-y-2 md:space-x-10 items-center justify-center sm:px-7 md:px-24 sm:py-3 md:py-10">
            <div className="flex space-y-3 text-center justify-center flex-col items-center">
              <h1 className="sm:text-base md:text-3xl font-bold text-base-300">
                <span className="sm:text-xl md:text-5xl text-primary-100 ">
                  Suvidha Foundation
                </span>{" "}
                <br />
                Internships
              </h1>
              <div className="border-t-2 border-spacing-y-20 border-base-300 py-3">
                <p className="sm:text-lg md:text-2xl text-primary-100">
                  Join Our Impactful Internship Program and Make a Difference.
                </p>
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSdPAVP_An-H2y9DgR9kgmMrroeBk3kZJVUR93IC1vJevWM6BA/viewform"
                  className="btn sm:btn-sm md:btn-md bg-base-300 text-primary-100 border-0 hover:bg-base-200 hover:text-primary-100 my-2 shadow-lg"
                >
                  APPLY NOW
                </Link>
              </div>
            </div>
            <div>
              <img
                src={item1}
                alt="Interns Image"
                className="sm:w-44 md:w-80 items-center"
              />
            </div>
          </div>
          <div className="flex md:flex-row sm:flex-col sm:space-y-4 md:space-x-10 items-center justify-center sm:px-7 md:px-24 md:my-12 border-t-8 border-spacing-y-20 border-primary-200 sm:py-5 md:py-10">
            <div>
              <img src={item2} alt="Interns Image" width={2000} />
            </div>
            <div>
              <h1 className="sm:text-xl md:text-3xl font-bold text-primary-300 sm:mb-2 md:mb-5">
                Student Internship and Mentorship Programs.
              </h1>
              <p className="sm:text-base md:text-xl text-primary-100">
                At Suvidha Foundation, we offer a range of free internship
                opportunities, both technical and non-technical, as well as
                social work programs. Our internship programs aim to provide
                valuable hands-on experience to students and individuals,
                allowing them to contribute to our organization's initiatives
                and projects.
              </p>
            </div>
          </div>
          <div className="flex  md:flex-row sm:flex-col sm:space-y-4 md:space-x-10 items-center justify-center sm:px-7 md:px-24 md:my-12 border-t-8 border-spacing-y-20 border-primary-200 sm:py-5 md:py-10">
            <div>
              <h1 className="sm:text-xl md:text-3xl font-bold text-primary-300 sm:mb-2 md:mb-5">
                Why Should You Apply for This Internship?
              </h1>
              <p className="sm:text-base md:text-xl text-primary-100">
                Student internship and mentorship program at our NGO Suvidha
                Foundation (Suvidha Mahila Mandal) offers valuable opportunities
                for students to gain practical experience, contribute to
                meaningful projects, and receive guidance from experienced
                professionals in the nonprofit sector. During a student
                internship, individuals have the chance to work closely with the
                NGO's team, understanding its mission, values, and operations.
              </p>
            </div>
            <div>
              <img src={item3} alt="Interns Image" width={4000} />
            </div>
          </div>
          <div
            className="sm:py-4 md:py-20 border-t-red-800 border-t-4"
            id="about-us"
          >
            <h2 className="text-primary-300 sm:text-xl md:text-5xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-105">
              Internship Reviews: What Students Say
            </h2>
            <div
              className="bg-base-400 rounded-full mx-auto
          sm:text-sm sm:p-2 md:w-72
          md:text-lg md:p-3 bg-opacity-50 font-medium tracking-wide text-center shadow-md text-base-100 mb-10"
            >
              <h3>Testimonial</h3>
            </div>
            <div
              id="testimonial-info"
              className="md:px-12 pt-12 w-[1000px] h-[480px] md:mx-auto rounded-md bg-white bg-opacity-90 shadow-2xl"
            >
              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {images.map((image) =>
                  renderTestimonialSlide(image.id, image.src)
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyIntern;
