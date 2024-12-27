import React from "react";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuClockAlert } from "react-icons/lu";
import { MdOutlineMarkEmailUnread, MdOutlinePhoneInTalk } from "react-icons/md";
import garden from '../assets/Images/Room Images/garden view.jpg'
import honey from '../assets/Images/Room Images/honeymoon suite.jpg'
import ocean from '../assets/Images/Room Images/ocean view.jpg'
import family from '../assets/Images/Room Images/family suite.jpg'
import deluxe from '../assets/Images/Room Images/deluxe suite.jpg'
import loft from '../assets/Images/Room Images/loft room.jpg'
import cabana from '../assets/Images/Room Images/cabana room.jpg'
import studio from '../assets/Images/Room Images/studio room.jpg'
import twin from '../assets/Images/Room Images/twin room.jpg'

const Footer = () => {
  return (
    <div className="mt-[100px]">
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-[#373737] text-white py-16 md:py-[100px] px-10">
        <div>
          <h4 className="play-fair text-xl tracking-[0.1rem]">About Us</h4>
          <p className="py-3 md:py-5 font-light tracking-wider leading-[1.3rem] md:leading-[1.7rem] text-xs md:text-sm">
            Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam
            efficitur dui vitae sem rutrum, id pretium nunc varius. Vestibulum
            hendrerit malesuada .
          </p>
          <div className="bg-[#BA8A70] inline-block px-3 py-2">
            <ul className="flex gap-5 text-white text-lg">
              <li>
                <a
                  className="cursor-pointer"
                  href="https://www.facebook.com"
                  target="_blank"
                >
                  <FaFacebook></FaFacebook>
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  href="https://www.twitter.com"
                  target="_blank"
                >
                  <FaTwitter></FaTwitter>
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer"
                  href="https://www.pinterest.com"
                  target="_blank"
                >
                  <FaPinterest></FaPinterest>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="play-fair text-xl tracking-[0.1rem]">All Contacts</h4>
          <ul className="space-y-4 md:space-y-5 mt-5">
            <li className="flex items-center text-xs md:text-sm font-light tracking-wider gap-3 md:gap-4">
              <span className="text-base">
                <IoLocationOutline />
              </span>
              <span>111 8th Ave, New York U.S.A.</span>
            </li>
            <li className="flex items-center text-xs md:text-sm font-light tracking-wider gap-3 md:gap-4">
              <span className="text-base">
                <MdOutlinePhoneInTalk />
              </span>
              <span>Reserve +1-202-555-0153</span>
            </li>
            <li className="flex items-center text-xs md:text-sm font-light tracking-wider gap-3 md:gap-4">
              <span className="text-base">
                <MdOutlineMarkEmailUnread />
              </span>
              <span>serenestay@gmail.com</span>
            </li>
            <li className="flex items-center text-xs md:text-sm font-light tracking-wider gap-3 md:gap-4">
              <span className="text-base">
                <LuClockAlert />
              </span>
              <span>08 am - 06 pm Sunday closed</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="play-fair text-xl tracking-[0.1rem]">Subscribe</h4>
          <p className="py-3 md:py-5 font-light tracking-wider leading-[1.3rem] md:leading-[1.7rem] text-xs md:text-sm">
            Sed sit amet nisl in velit viverra bibendum in ac nisi. Etiam
            efficitur dui vitae sem
          </p>
          <div className="space-y-3 md:space-y-5">
            <input
              className="input w-full rounded-none font-medium text-xs md:text-sm text-[#1C1C1C] placeholder:text-[#1C1C1C] placeholder:font-light placeholder:text-xs md:placeholder:text-sm tracking-wider"
              placeholder="Insert Your Email"
              type="email"
            />
            <button className="uppercase py-2 px-6 md:py-3 md:px-8 tracking-[0.1rem] text-xs bg-[#BA8A70]">
              submit
            </button>
          </div>
        </div>
        <div>
          <h4 className="play-fair text-xl tracking-[0.1rem]">Gallery</h4>
          <div className="grid grid-cols-4 gap-3 mt-5">
            <img src={garden} />
            <img src={honey} />
            <img src={ocean} />
            <img src={family} />
            <img src={deluxe} />
            <img src={loft} />
            <img src={cabana} />
            <img src={studio} />
            <img src={twin} />
          </div>
        </div>
      </footer>
      <div className="py-3 px-10 bg-[#2D2D2D] text-white text-center">
      <p className="text-xs md:text-sm font-light tracking-[0.1rem]">&copy; Hotel Serene Stays - Sumiya Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
