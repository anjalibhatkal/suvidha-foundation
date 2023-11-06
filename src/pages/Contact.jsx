import React from "react";
import contact from "/images/pages/contact.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="relative">
        <div
          style={{ backgroundImage: `url(${contact})` }}
          className="bg-cover bg-center h-96"
        >
          <div className="bg-black/30 w-full h-full flex justify-start items-end p-12"></div>
        </div>
        <p className="text-4xl font-bold text-primary-100 w-[300px] text-center bg-base-300 px-6 py-4 rounded-md absolute top-[340px] left-24">
          Contact Us
        </p>
        <div className="bg-gradient-to-b from-base-100/50 to-[#FD9346] py-20 px-24">
          <h2 className="text-primary-200 text-4xl font-bold tracking-wide mb-4 text-center transition-transform hover:scale-110">
            Contact Us For Any Query
          </h2>
          <div className="bg-base-400 rounded-full mx-auto text-base-100 text-xl p-3 bg-opacity-80 w-72 font-medium tracking-wide text-center shadow-md mb-5">
            <h3>Get In Touch</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl py-5 tracking-wider text-center">
              Thank you for your interest in Suvidha Foundation! We value your
              feedback, questions, and ideas. Our mission is to make a positive
              impact on the world, and we believe that the first step towards
              change begins with open and meaningful communication.
              <br />
              <br />
              Whether you want to inquire about our projects, explore
              partnership opportunities, report an issue, or simply say hello,
              we're here to listen. Your voice matters, and we're eager to hear
              from you.
              <br />
              <br />
              Please use the form below to get in touch with us. We strive to
              respond to your inquiries promptly and efficiently, and we're
              excited to start a conversation with you.
            </p>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform"
              className="btn w-64 sm:btn-sm md:btn-md bg-base-400 text-base-100 border-0 hover:bg-base-200 hover:text-primary-100 mr-5 shadow-lg py-5 mt-2"
            >
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
