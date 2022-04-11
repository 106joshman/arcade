import React from "react";
import { Link } from "react-router-dom";
import Controller from "../../../assets/heroImage.png";
import glow from '../../../assets/glow.png'

const Landingpage = () => {
  return (
    <div className="home text-white">
      <div className="spinImg grid place-items-center">
        <img src={Controller} alt="" srcset="" />
        
        <div className="glow">
        <img src={glow} alt="" srcset="" />
        </div>
      </div>
      <h2 className="welcome uppercase font-extrabold font-ultra text-[28px] mb-2.5">
        <span className="">Welcome</span>
        <span className="mx-4">to</span>
        <span className="">arcader</span>
      </h2>
      <div className="subText my-10 font-Blinker">
        <p className="">The world’s first DAO-powered esports playzone.</p>
        <p className="">Being built on Avalanche</p>
        <p className="live mt-2.5 flex justify-center">
          Go Live in 
          <div className="ml-1 timelapse text-[#8a92ef]">
            <span className="">53</span>
            {":"}
            <span className="">13</span>
            {":"}
            <span className="">03</span>
          </div>
        </p>
      </div>
      <div className="contact font-Blinker rounded-[15px] mt-10 font-semibold bg-gradient-to-r from-[#38d8d3] to-[#5d35cb] w-[150px] text-center shadow-lg shadow-[#5d35cb] mx-auto p-2.5">
        <Link to="" className="items-center">
          contact Us
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;
