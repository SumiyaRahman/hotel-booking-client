import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import hotelLogo from "../../assets/Images/Images/hotelLogo.png";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
    .then(() => {
      console.log('successful sign out');
    })
    .catch(error => {
      console.log('failed to sign out', error.message);
      
    })
  }
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
          <Link to="/">
            <div className="flex items-center">
              <img className="w-16 md:w-20" src={hotelLogo} />
              <span className="md:text-2xl lg:text-[22px] xl:text-3xl play-fair tracking-wider hidden md:block text-[#1C1C1C]">
                SERENE STAYS
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 play-fair text-[#1C1C1C]">
          {links}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
          {user ? (
            <>
              <button onClick={handleSignOut} className="uppercase py-1 px-3 md:py-2 md:px-5 rounded bg-[#c19b77] text-white font-light md:font-medium text-xs md:text-sm tracking-widest">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <span className="text-[#373737] font-bold text-base underline">
                  Register
                </span>
              </Link>
              <Link to="/signIn">
                <button className="py-2 px-5 rounded bg-[#c19b77] text-white font-bold text-base">
                  Sign In
                </button>
              </Link>
            </>
          )}
        </div>
    </div>
  );
};

export default Navbar;
