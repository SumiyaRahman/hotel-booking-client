import React from "react";
import { Link, NavLink } from "react-router-dom";
import hotelLogo from '../../assets/Images/hotelLogo.png'

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/myBookings">My Bookings</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-white rounded-box z-[1] mt-3 w-52 p-2 shadow play-fair "
          >
            {links}
          </ul>
        </div>
        <div>
        <Link to='/'>
        <div className="flex items-center">
        <img className="w-16 md:w-20" src={hotelLogo} />
        <span className="text-3xl play-fair tracking-wider hidden md:block text-white">SERENE STAYS</span>
        </div>
        </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 play-fair text-white">{links}</ul>
      </div>
      <div className="navbar-end gap-2 md:gap-5">
        <Link to="/register">
          <span className="text-white font-bold text-xs  md:text-base underline play-fair">
            Register
          </span>
        </Link>
        <Link to="/signIn">
          <button className="py-1 px-2 md:py-2 md:px-5 rounded bg-[#BA8A70] text-[#FFFFFF] font-bold text-xs md:text-base play-fair">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
