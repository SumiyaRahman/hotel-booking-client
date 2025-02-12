import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
      });
  };

  const links = (
    <>
      <li>
        <NavLink 
          to="/"
          className={({ isActive }) => 
            isActive 
              ? "block py-2 text-[#c19b77] font-medium"
              : "block py-2 hover:text-[#c19b77] transition-colors duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/rooms"
          className={({ isActive }) => 
            isActive 
              ? "block py-2 text-[#c19b77] font-medium"
              : "block py-2 hover:text-[#c19b77] transition-colors duration-300"
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/about"
          className={({ isActive }) => 
            isActive 
              ? "block py-2 text-[#c19b77] font-medium"
              : "block py-2 hover:text-[#c19b77] transition-colors duration-300"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/gallery"
          className={({ isActive }) => 
            isActive 
              ? "block py-2 text-[#c19b77] font-medium"
              : "block py-2 hover:text-[#c19b77] transition-colors duration-300"
          }
        >
          Gallery
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink 
            to="/myBookings"
            className={({ isActive }) => 
              isActive 
                ? "block py-2 text-[#c19b77] font-medium"
                : "block py-2 hover:text-[#c19b77] transition-colors duration-300"
            }
          >
            My Bookings
          </NavLink>
        </li>
      )}
      <li>
        <NavLink 
          to="/contact"
          className={({ isActive }) => 
            isActive 
              ? "block py-2 text-[#c19b77] font-medium"
              : "block py-2 hover:text-[#c19b77] transition-colors duration-300"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <motion.div
      className="navbar fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md px-4 md:px-8 lg:px-16 py-2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
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
          <motion.ul
            tabIndex={0}
            className="dropdown-content bg-white/95 backdrop-blur-sm rounded-box z-[1] mt-3 w-64 p-6 shadow-lg play-fair space-y-4 absolute left-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links}
          </motion.ul>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">
            <div className="flex items-center">
              <img className="w-12 md:w-16 lg:w-20" src={hotelLogo} alt="Hotel Logo" />
              <div className="md:text-xl lg:text-2xl xl:text-3xl play-fair tracking-wider hidden md:block lg:hidden xl:block text-[#1C1C1C]">
                {["S", "E", "R", "E", "N", "E", " ", "S", "T", "A", "Y", "S"].map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center justify-center gap-8 play-fair text-[#1C1C1C]">
          {links}
        </ul>
      </div>
      <motion.div 
        className="navbar-end space-x-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        {user ? (
          <motion.button
            onClick={handleSignOut}
            className="uppercase py-1 px-3 md:py-2 md:px-5 rounded bg-[#c19b77] text-white font-light md:font-medium text-xs md:text-sm tracking-widest hover:bg-[#a88664] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Out
          </motion.button>
        ) : (
          <>
            <Link to="/register">
              <motion.span 
                className={`text-xs md:text-base font-medium tracking-wider underline transition-colors duration-300 ${
                  location.pathname === '/register' 
                    ? 'text-[#c19b77]' 
                    : 'text-[#373737] hover:text-[#c19b77]'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                Register
              </motion.span>
            </Link>
            <Link to="/signIn">
              <motion.button
                className={`py-1 px-2 md:px-5 rounded font-medium text-xs md:text-base tracking-wider transition-colors duration-300 ${
                  location.pathname === '/signIn'
                    ? 'bg-[#a88664] text-white'
                    : 'bg-[#c19b77] text-white hover:bg-[#a88664]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </Link>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
