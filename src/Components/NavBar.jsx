import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const navLinks = (
    <>
      <NavLink to="/">
        <li className="mx-2">Home</li>
      </NavLink>
      <NavLink to="/listedBook">
        <li className="mx-2">Listed Books</li>
      </NavLink>
      <NavLink to="/pagesToRead">
        <li className="mx-2">Pages to Read</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="space-x-4">
          <a className="btn bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
