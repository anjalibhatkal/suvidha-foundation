import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

import item1 from "/images/pages/home/carousel1.jpg";
import item2 from "/images/pages/home/carousel2.jpg";
import item3 from "/images/pages/home/carousel3.jpg";
import item4 from "/images/pages/home/carousel4.jpg";
import carouselBg from "/images/bg-orange.jpg";

const Carousel = () => {
  const descriptions = [
    "Suvidha Foundation, celebrating 77 years of empowering communities for a brighter future.",
    "Support Suvidha Foundation and enjoy tax exemptions while empowering communities for a brighter future.",
    "Join our internship programs and gain experience in fundraising and web development while making a positive impact.",
    "Join us in our efforts to spread happiness and make a meaningful difference in countless lives.",
  ];

  const durations = [4000, 3480, 3600, 3000];
  const [content, setContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContent((content) => (content + 1) % descriptions.length);
    }, durations[content]);

    return () => {
      clearInterval(interval);
    };
  }, [content, durations]);

  return (
    <div
      style={{ backgroundImage: `url(${carouselBg})` }}
      className="bg-cover bg-center sm:h-[350px] md:h-[600px]"
    >
      <div className="bg-white/5 h-full">
        <div
          id="carousel-part"
          className="flex items-center justify-center py-14 mx-auto sm:px-0 md:px-64 sm:pb-20 md:flex-row md:w-screen md:space-x-20"
        >
          <div
            id="carousel-info"
            className="md:basis-1/2 mx-auto md:w-[1000px] p-5"
          >
            <div className="md:h-72 sm:h-44">
              <h2 className="text-2xl md:text-5xl mb-3 text-primary-300">
                <b>
                  Our{" "}
                  <span>
                    <Typewriter
                      words={[
                        "77th Independence Day celebration.",
                        "donations-tax exemption program.",
                        "Internship & Mentorship program.",
                        "mission: Millions smiling.",
                      ]}
                      typeSpeed={40}
                      deleteSpeed={20}
                      loop={0}
                      delaySpeed={1500}
                    />
                  </span>
                  <Cursor />
                </b>
              </h2>
              <div className="text-left my-3">{descriptions[content]}</div>
            </div>
            <div className="button-grp flex my-2">
              <Link
                to="/"
                className="btn sm:btn-sm md:btn-md bg-base-300 text-primary-100 border-0 hover:bg-base-100 hover:text-primary-100 mr-5 shadow-lg"
              >
                Watch Video
              </Link>
              <Link
                to="/donate"
                className="btn bg-base-100 sm:btn-sm md:btn-md text-primary-100 hover:bg-base-300 hover:border-0 hover:text-primary-100 border-solid border-2 border-base-300 shadow-lg"
              >
                Donate Now
              </Link>
            </div>
          </div>

          <div
            id="carousel-photos"
            className="justify-center items-center mt-9 mb-14 basis-1/2 ml-20 sm:hidden md:flex"
          >
            <div className="mask mask-squircle w-[460px] h-[460px] bg-base-100 bg-opacity-90 z-10 absolute">
              .
            </div>
            <div className="mask mask-squircle w-[420px] h-[420px] bg-base-300 z-20 absolute">
              .
            </div>

            <div className="carousel rounded-box mask mask-squircle w-96 h-96 z-30">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3300,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={item1}
                    alt="Team photo"
                    className="object-cover w-fit h-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={item2}
                    alt="Team photo"
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={item3}
                    alt="Team photo"
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={item4}
                    alt="Team photo"
                    className="object-cover w-full h-full"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="mask mask-squircle w-10 h-10 md:top-[200px] md:right-[280px] bg-base-400 z-40 absolute ">
              .
            </div>
            <div className="mask mask-squircle w-5 h-5 md:top-[240px] md:right-[260px] bg-primary-200 z-40 absolute ">
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
// sm:top-[400px] sm:left-[400px]
// sm:top-[440px] sm:left-[440px]
