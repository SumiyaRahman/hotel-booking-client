import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full">
      
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div className="bg-img">
          <div className="max-w-7xl mx-auto px-5 h-100vh">
            <div className="pt-[200px] text-center">
              <p className="uppercase text-[#C19B77] text-xs font-semibold tracking-[0.3rem]">
                Book your room now!
              </p>
              <h1 className="play-fair text-7xl font-semibold mt-10 leading-[3.5rem] text-white">
                Luxury
              </h1>
              <h1 className="play-fair text-7xl font-semibold mt-10 leading-[3.5rem] text-white">
                Comfort Serenity
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <div className="slide-2">
          <div className="max-w-7xl mx-auto px-5 h-100vh">
            <div className="pt-[200px] text-center">
              <p className="uppercase text-[#C19B77] text-xs font-semibold tracking-[0.3rem]">
                Book your room now!
              </p>
              <h1 className="play-fair text-7xl font-semibold mt-10 leading-[3.5rem] text-white">
                Experience
              </h1>
              <h1 className="play-fair text-7xl font-semibold mt-10 leading-[3.5rem] text-white">
                Ultimate Comfort
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <div className="slide-3">
          <div className="max-w-7xl mx-auto px-5 h-100vh">
            <div className="pt-[200px] text-center">
              <p className="uppercase text-[#C19B77] text-xs font-semibold tracking-[0.3rem]">
                Book your room now!
              </p>
              <h1 className="play-fair text-7xl font-semibold mt-10 leading-[3.5rem] text-white">
                Your Perfect Stay
              </h1>
              <h1 className="play-fair text-7xl font-semibold mt-10 leading-[3.5rem] text-white">
                Awaits You
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
