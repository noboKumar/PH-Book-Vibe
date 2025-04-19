import React from "react";
import HeroImg from "../assets/power-the-48-laws-.jpeg"

const Hero = () => {
  return (
    <div className="bg-gray-200 rounded-2xl py-15 w-11/12 mx-auto">
      <div className="flex items-center justify-around">
        <div className="ml-15">
          <h1 className="text-5xl/relaxed font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] text-white py-6 my-5">View The List</button>
        </div>
        <img
          src={HeroImg}
          className="w-6/12"
        />
      </div>
    </div>
  );
};

export default Hero;
