import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  return (
    <button
      className={`btn sm:btn-xs md:btn-md bg-primary-200 border-0 text-white rounded-full fixed sm:bottom-7 sm:right-7 d:bottom-[50px] md:right-[50px] transition-all ${
        isVisible ? "visible" : "hidden"
      }`}
      onClick={scrollUp}
    >
      <FaArrowUp className="top-btn__icon" />
    </button>
  );
};

export default GoToTop;
