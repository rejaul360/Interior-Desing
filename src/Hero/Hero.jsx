// import React from 'react';
import "./Hero.css";
import h_img from "../assets/Image (20).png";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="pt-10 ">
        <div className="main_hero grid grid-cols-1 md:grid-cols-2 p-2">
            <div className="flex justify-center">
            <div className=" ">
            <h1 className="text-center md:text-left mb-4 h_heading">
              Interior Design
            </h1>
            <p className="text-center md:text-left h_pera">
              Step into a world where the art of Interior Design is meticulously
              crafted to bring together timeless elegance and cutting-edge
              modern Innovation, Allowing you to transform your living spaces
              into the epitome of luxury and sophistication
            </p>
          </div>
            </div>
          <div className="flex lg:justify-end sm:justify-center">
            <img className="rounded" src={h_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
