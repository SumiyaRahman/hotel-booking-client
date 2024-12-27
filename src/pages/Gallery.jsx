import React from "react";
import garden from '../assets/Images/Room Images/garden view.jpg'
import honey from '../assets/Images/Room Images/honeymoon suite.jpg'
import ocean from '../assets/Images/Room Images/ocean view.jpg'
import cabana from '../assets/Images/Room Images/cabana room.jpg'
import deluxe from '../assets/Images/Room Images/deluxe suite.jpg'
import family from '../assets/Images/Room Images/family suite.jpg'
import loft from '../assets/Images/Room Images/loft room.jpg'
import studio from '../assets/Images/Room Images/studio room.jpg'
import twin from '../assets/Images/Room Images/twin room.jpg'
import Navbar from "../component/Banner/Navbar";
import Footer from "../component/Footer";

const Gallery = () => {
  return (
    <div>
        <div className="max-w-7xl mx-auto px-5">
        <Navbar></Navbar>
      <div>
        <h1 className="play-fair text-4xl md:text-5xl leading-[3rem] md:leading-[4rem] mb-5 text-[#1C1C1C] text-center py-10">
          Explore Our Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <img src={garden}/>
            <img src={honey}/>
            <img src={ocean}/>
            <img src={cabana}/>
            <img src={deluxe}/>
            <img src={family}/>
            <img src={loft}/>
            <img src={studio}/>
            <img src={twin}/>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Gallery;
