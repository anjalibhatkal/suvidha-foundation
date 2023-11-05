import React from "react";
import logo from "/images/SUVIDHA/Logos/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary-300 w-screen px-10 py-8 h-28 flex space-x-3">
        <div className="navbar-start ">
          <div className=" bg-opacity-80 w-[21.5rem] px-10 py-2 rounded-lg flex items-start justify-center hover:cursor-pointer hover:bg-opacity-50">
            <Link to="/">
              <img src={logo} alt="Suvidha Foundation Logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            <li className="rounded text-base-300 hover:text-base-400 hover:bg-base-200 mx-3">
              <Link to="/">HOME</Link>
            </li>
            <li className="rounded text-base-300 hover:text-base-400 hover:bg-base-200 mx-3">
              <Link to="/about">ABOUT</Link>
            </li>
            <li
              tabIndex={0}
              className="rounded text-base-300 hover:text-base-400 hover:bg-base-200 mx-3"
            >
              <details>
                <summary>PAGES</summary>
                <ul className="p-2 bg-base-200 z-50">
                  <li className="rounded hover:bg-base-200 m-1">
                    <Link to="/certificates">CERTIFICATES</Link>
                  </li>
                  <li className="rounded hover:bg-base-200m-1">
                    <Link to="/internship">INTERNSHIP</Link>
                  </li>
                  <li className="rounded hover:bg-base-200 m-1">
                    <Link to="/events">EVENTS</Link>
                  </li>
                  <li className="rounded hover:bg-base-200 m-1">
                    <Link to="/gallery">GALLERY</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end pr-12">
          <Link
            to="/donate"
            className="btn bg-base-300 text-primary-100 border-0 hover:bg-base-200"
          >
            SUPPORT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
