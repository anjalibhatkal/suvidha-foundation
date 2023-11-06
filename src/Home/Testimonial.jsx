import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import images from "./../../images";

const renderTestimonialSlide = (id, imagePath, name, desc) => {
  return (
    <SwiperSlide key={id}>
      <div className="flex flex-col max-h-[400px] space-y-4 justify-center items-center mb-14">
        <div className="flex justify-center items-center space-x-3">
          <img
            src={imagePath}
            alt={name}
            width={50}
            height={50}
            className="rounded-full border-primary-100 border-4"
          />
          <h3 className="text-lg">{name}</h3>
        </div>
        <div
          className="h-[270px] w-[250px] flex justify-center items-center bg-gradient-to-b
 from-base-100 to-[#FD9346] py-5 px-10 text-center rounded-lg hover:scale-105 transition-all shadow-lg"
        >
          <p className="text-primary-100 text-md">"{desc}"</p>
        </div>
      </div>
    </SwiperSlide>
  );
};

const Testimonial = () => {
  return (
    <div>
      <div
        className="bg-base-100 w-screen py-20 border-t-red-800 border-t-4"
        id="about-us"
      >
        <h2 className="text-primary-200 text-5xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-110">
          What's Being Said About Our Charity Initiatives
        </h2>
        <div className="bg-base-200 rounded-full mx-auto text-base-400 text-xl p-3 bg-opacity-50 w-72 font-medium tracking-wide text-center shadow-md mb-10">
          <h3>Testimonial</h3>
        </div>
        <div
          id="testimonial-info"
          className="px-12 pt-12 w-[1000px] h-[450px] mx-auto rounded-md bg-white bg-opacity-90 shadow-2xl"
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={5}
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
            {images.map((item) =>
              renderTestimonialSlide(item.id, item.image, item.name, item.desc)
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
