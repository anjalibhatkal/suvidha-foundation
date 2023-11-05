import React from "react";
import aboutImg from "/images/pages/about/about.jpg";
import about1 from "/images/pages/about/about1.jpg";
import Achievements from "../Home/Achievements";
import Team from "../Home/Team";

const About = () => {
  return (
    <div>
      <div className="relative">
        <div
          style={{ backgroundImage: `url(${aboutImg})` }}
          className="bg-cover bg-center h-96"
        >
          <div className="bg-black/30 w-full h-full flex justify-start items-end p-12"></div>
        </div>
        <p className="text-4xl font-bold text-primary-100 w-[300px] text-center bg-base-300 px-6 py-4 rounded-md absolute top-[340px] left-24">
          About Us
        </p>
        <div className="flex px-24 py-20 space-x-5 justify-around">
          <div className="flex space-y-6 justify-center flex-col items-center">
            <h1 className="text-3xl font-bold text-center text-base-300">
              <span className="text-5xl text-primary-100 ">
                Suvidha Foundation
              </span>{" "}
              <br />
              (Suvidha Mahila Mandal)
            </h1>
            <img src={about1} alt="About Image" width={320} />
          </div>
          <div className="w-[600px]">
            <p className="text-lg tracking-wide">
              We are a passionate and dedicated non-governmental organization
              (NGO) with a noble mission. Our goal is to make quality education
              accessible to individuals from financially challenged backgrounds,
              empowering them to achieve educational equality. We firmly believe
              that everyone, regardless of their financial circumstances,
              deserves the opportunity to access a quality education. <br />
              <br />
              We are committed to breaking down barriers and fostering a
              supportive learning environment for those who need it the most. By
              providing educational resources, scholarships, and mentorship, we
              aim to pave the way for brighter futures. Together, we can make a
              significant impact and create a more equitable and educated
              society. <br />
              <br />
              Join us in our mission, and be a part of this transformative
              journey. Your support and involvement can help change lives, open
              doors to new opportunities, and create a world where education
              knows no boundaries.
            </p>
          </div>
        </div>

        <div className="px-24 py-16 bg-base-400/100">
          <h1 className="text-4xl font-bold text-start border-b-2 border-base-100 text-base-100 p-2">
            Vision
          </h1>
          <ul className="text-xl tracking-wide p-5 text-base-100">
            <li>
              To nurture the next generation of entrepreneurs through
              skill-based education.
            </li>
            <li>
              To offer internships, training, workshops, and quality education
              worldwide.
            </li>
          </ul>
          <h1 className="text-4xl font-bold text-end border-b-2 border-base-100 text-base-100 p-2">
            Mission
          </h1>
          <ul className="text-xl text-end tracking-wide p-5 text-base-100">
            <li>
              To inspire students, assist them in innovation, and enable their
              integration to shape the next generation of humanity.
            </li>
            <li>
              To conduct food donation and awareness campaigns in rural regions.
            </li>
          </ul>
        </div>
        <Achievements />
        <Team />
      </div>
    </div>
  );
};

export default About;
