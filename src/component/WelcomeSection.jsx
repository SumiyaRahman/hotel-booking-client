import React from 'react';
import welcome from '../assets/Images/Images/welcome-spa.jpg'
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

const WelcomeSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 py-[100px]'>
        <div className='xl:relative'>
            <img src={welcome}/>
            <div className='xl:absolute bg-[#C19B77] w-full xl:w-60 text-center xl:border-[12px] xl:border-white left-[-50px] top-[460px]'>
                <h1 className='text-8xl text-white play-fair mb-4'>24</h1>
                <p className='text-sm tracking-widest text-white font-light pb-9'>Years of Experience</p>
            </div>
        </div>

        <div>
            <p className='tracking-[0.5rem] text-xs font-medium text-[#C19B77] mb-6'>INN & SUITES</p>
            <h1 className='play-fair text-3xl md:text-5xl leading-[3rem] md:leading-[4rem] mb-5 text-[#1C1C1C]'>Welcome to Serenity Stay Hotel</h1>
            <p className='leading-[1.5rem] md:leading-[1.9rem] text-xs md:text-sm text-[#ACACAC] font-light tracking-widest mb-12'>Nestled in nature's embrace, Serenity Stay Hotel offers an exquisite blend of elegance and comfort. Whether you're here for relaxation, adventure, or business, enjoy modern amenities, personalized services, and breathtaking views. Create lasting memories in a haven designed for extraordinary experiences.</p>
            <div className='border border-[#dbdbdb]'></div>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mt-5 gap-6'>
                <div>
                    <p className='mb-5 text-xs font-semibold tracking-[0.3rem] text-[#1C1C1C]'>MAIN MAIL</p>
                    <p className='text-[#ACACAC] text-sm font-light tracking-[0.1rem]'>serenestay@gmail.com</p>
                </div>
                <div>
                    <p className='mb-5 text-xs font-semibold tracking-[0.3rem] text-[#1C1C1C] uppercase'>stay tuned</p>
                    <div>
                        <ul className='flex gap-6 text-[#727272]'>
                            <li>
                                <a className='cursor-pointer' href="https://www.facebook.com" target='_blank'>
                                <FaFacebook></FaFacebook>
                                </a>
                            </li>
                            <li>
                                <a className='cursor-pointer' href="https://www.twitter.com" target='_blank'>
                                <FaTwitter></FaTwitter>
                                </a>
                            </li>
                            <li>
                                <a className='cursor-pointer' href="https://www.pinterest.com" target='_blank'>
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
