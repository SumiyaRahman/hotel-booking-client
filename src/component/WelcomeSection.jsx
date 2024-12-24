import React from 'react';
import welcome from '../assets/Images/welcome-spa.jpg'
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 py-[100px]'>
        <div className='lg:relative'>
            <img className='' src={welcome}/>
            <div className='lg:absolute bg-[#C19B77] w-full lg:w-52 text-center lg:border-[12px] lg:border-white left-[-40px] top-[350px]'>
                <h1 className='text-8xl text-white play-fair mb-4'>24</h1>
                <p className='text-sm tracking-widest text-white font-light pb-6'>Years of Experience</p>
            </div>
        </div>

        <div>
            <p className='tracking-[0.5rem] text-xs font-medium text-[#C19B77] mb-6'>INN & SUITES</p>
            <h1 className='play-fair text-5xl leading-[4rem] mb-5 text-[#1C1C1C]'>Welcome to Serenity Stay Hotel</h1>
            <p className='leading-[1.9rem] text-sm text-[#ACACAC] font-light tracking-widest mb-12'>Nestled in nature's embrace, Serenity Stay Hotel offers an exquisite blend of elegance and comfort. Whether you're here for relaxation, adventure, or business, enjoy modern amenities, personalized services, and breathtaking views. Create lasting memories in a haven designed for extraordinary experiences.</p>
            <div className='border border-[#dbdbdb]'></div>
            <div className='flex justify-between items-center mt-5'>
                <div>
                    <p className='mb-5 text-xs font-semibold tracking-[0.3rem] text-[#1C1C1C]'>MAIN MAIL</p>
                    <p className='text-[#ACACAC] text-sm font-light tracking-[0.1rem]'>serenestay@gmail.com</p>
                </div>
                <div>
                    <p className='mb-5 text-xs font-semibold tracking-[0.3rem] text-[#1C1C1C] uppercase'>stay tuned</p>
                    <div>
                        <ul className='flex gap-6 text-[#727272]'>
                            <li>
                                <a href="https://www.facebook.com">
                                <FaFacebook></FaFacebook>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com">
                                <FaTwitter></FaTwitter>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com">
                                <FaPinterest></FaPinterest>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WelcomeSection;
