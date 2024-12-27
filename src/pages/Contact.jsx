import React from "react";
import Navbar from "../component/Banner/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <Navbar></Navbar>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.37)), url('https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex flex-col justify-center items-center px-5"
      >
        <h1 className="uppercase play-fair text-4xl md:text-6xl leading-[4rem] text-white mt-2">
          Contact
        </h1>
        <p className="text-white leading-[1.4rem] mt-4 md:mt-6 text-xs md:text-base font-light tracking-wider w-full lg:w-1/2 mx-auto text-center">
          Get in touch with us for any inquiries or bookings. Our team is here
          to assist you with your stay and provide the best service possible.
        </p>
      </div>

      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-5">
            <p className="tracking-[0.5rem] text-xs font-medium text-[#C19B77] mb-6">
              RESERVE A ROOM
            </p>
            <h2 className="play-fair text-4xl md:text-5xl font-semibold text-[#373737]">
              Get In Touch
            </h2>
            <p className="text-[#ACACAC] text-sm font-light tracking-[0.1rem] leading-[1.6rem] my-10">
              Our team is always ready to assist you with any questions or
              concerns you may have. Whether you're planning a stay with us or
              simply need more information, don't hesitate to reach out. We are
              here to make your experience exceptional and ensure you have
              everything you need. Get in touch with us, and we'll be happy to
              help you with your booking, special requests, or any other
              inquiries you may have.
            </p>

            <button
              onClick={() => navigate("/rooms")}
              className="bg-[#373737] text-white uppercase text-xs font-semibold tracking-[0.3rem] px-8 py-3 hover:bg-gray-700"
            >
              View All
            </button>
          </div>

          <div className="space-y-5">
            <form>
              <div className="flex flex-col space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border p-3 focus:outline-none focus:ring-2 focus:ring-[#C19B77] placeholder:text-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border p-3 focus:outline-none focus:ring-2 focus:ring-[#C19B77] placeholder:text-gray-500"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="border p-3 focus:outline-none focus:ring-2 focus:ring-[#C19B77] placeholder:text-gray-500 h-32"
                ></textarea>
              </div>

              <button className="bg-[#C19B77] text-white py-3 px-8 play-fair uppercase tracking-[0.1rem] text-sm font-semibold hover:bg-[#a78560] mt-6 w-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
