import React from "react";
import steamer from "../../../assets/aboutSteamers.png";
import steamerRing from "../../../assets/steamerRing.png";
import player from "../../../assets/aboutplayers.png";
import playerRing from "../../../assets/playerRing.png";
import Rollers from "../../../assets/aboutHighRollers.png";
import rollersRing from "../../../assets/rollersRing.png";

const About = () => {
  return (
    <div className="about my-20 p-[32px]">
      <div className="aboutTitle bg-about bg-center h-[150px] mx-[-50px] bg-cover items-center grid place-items-center">
        <h2 className="welcome text-white uppercase font-bold text-[28px]">
          <span className="">about</span>
          <span className="ml-4">arcader</span>
        </h2>
      </div>
      <div className="steamers w-[60%] flex flex-col justify-between mx-auto">
        <div className="">
          <div className="img bg-steamer bg-center bg-cover h-[50px] grid place-items-center">
            {/* <img src={steamer} alt="" srcset="" /> */}
            <h2 className="welcome relative text-white uppercase font-bold text-[28px] lg:text-[46px] lg:top-250px">
              <span className="">for</span>
              <span className="ml-4">streamsers</span>
            </h2>
          </div>
          <div className="text font-Blinker text-sm text-white text-left border-b-2 border-b-red-600">
            The world’s first exclusive gaming stream-2 -earn platform allowing
            free and fair monetisation of your gaming skills, for streamers and
            viewers alike.
          </div>
        </div>
        <div className="img grid place-items-center mt-14">
          <img src={steamerRing} alt="" srcset="" />
        </div>
      </div>

      <div className="players w-[60%] flex flex-col justify-between mx-auto">
        <div className="img grid place-items-center">
          <img src={player} alt="" srcset="" />
          <h2 className="welcome relative text-white uppercase font-bold text-[28px] lg:text-[36px]">
            <span className="">for</span>
            <span className="ml-4">players</span>
          </h2>
        </div>
        <div className="text font-Blinker text-sm text-white text-left border-r-2 border-b-2 rounded-br-[15px] border-r-red-600 border-b-red-600">
          Next gen esports arena powered by an equitable matchmaking algorithm
          with various different game-play modes to make the best out of your
          experience: Solo, Party, Teams, and Pro-Seasons.
        </div>
        <div className="img grid place-items-center mt-14">
          <img src={playerRing} alt="" srcset="" />
        </div>
      </div>

      <div className="highrollers w-[60%] flex flex-col justify-between mx-auto">
        <div className="img grid place-items-center">
          <img src={Rollers} alt="" srcset="" />
          <h2 className="welcome relative text-white uppercase font-bold text-[28px] lg:text-[46px] lg:top-250px">
            <span className="">for</span>
            <span className="ml-4">streamsers</span>
          </h2>
        </div>
        <div className="text font-Blinker text-sm text-white text-left border-b-2 border-b-red-600">
          A transparent risk-conscious prediction market platform where everyone
          wins, powered by an unbiased DAO-based adjudication mechanism.
        </div>
        <div className="img grid place-items-center mt-14">
          <img src={rollersRing} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default About;
