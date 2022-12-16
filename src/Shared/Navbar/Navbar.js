import React from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon, AtSymbolIcon, LinkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const navButtons = (
    <>
      <li>
        <Link className="font-semibold" to="/">
          Home
        </Link>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/nasir-u-5399221b0/">
          Linked In <LinkIcon className="h-6 w-6 text-white"></LinkIcon>
         </a>
      </li>
      <li>
         <a href="mailto:nasirullah878@gmail.com">
          Contact me <AtSymbolIcon className="h-6 w-6 text-white"></AtSymbolIcon>
         </a>
      </li>
    </>
  );

  return (
    <div className="top-fixed">
      <div className="navbar h-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navButtons}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <p>Junior Web Developer</p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navButtons}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
