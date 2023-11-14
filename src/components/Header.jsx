import React from "react";
import logo from "/images/SUVIDHA/Logos/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary-300 w-screen sm:px-2 sm:h-20 md:px-10 md:py-8 md:h-28 flex md:space-x-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="rounded text-base-300 hover:text-base-400 hover:bg-base-200 mx-1">
                <Link to="/">HOME</Link>
              </li>
              <li className="rounded text-base-300 hover:text-base-400 hover:bg-base-200 mx-1">
                <Link to="/about">ABOUT</Link>
              </li>
              <li
                tabIndex={0}
                className="rounded text-base-300 hover:text-base-400 hover:bg-base-200 mx-1"
              >
                <details>
                  <summary>PAGES</summary>
                  <ul className="p-2 bg-base-200 z-100">
                    <li className="rounded hover:bg-base-200 m-1">
                      <Link to="/certificates">CERTIFICATES</Link>
                    </li>
                    <li className="rounded hover:bg-base-200 m-1">
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

          <div className="bg-opacity-80 md:w-[21.5rem] sm:w-[13rem] sm:px-1 md:px-10 py-2 rounded-md flex items-start justify-center hover:cursor-pointer hover:bg-opacity-50">
            <Link to="/">
              <img src={logo} alt="Suvidha Foundation Logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
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
                  <li className="rounded hover:bg-base-200 m-1">
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
        <div className="navbar-end md:pr-12 sm:pr-10">
          <Link
            to="/donate"
            className="btn sm:btn-sm md:btn-md sm:text-[12px] md:text-base bg-base-300 text-primary-100 border-0 hover:bg-base-200"
          >
            SUPPORT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
