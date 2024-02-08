import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH WEB DEVELOPMENT
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2 ">
          Grow With Web Development Skills.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-3">
            Fast, Flexible Faniacting for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-3"
            strings={["Learn", "New", "Skills","With","Me"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
          <Link className="bg-gradient-to-r from-[#00df9a] to-[#32a8a4] hover:from-[#32a8a4] hover:to-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white transition-transform transform hover:scale-105 ease-in-out shadow-md focus:outline-none focus:ring focus:border-blue-300" to='https://www.w3schools.com/'>Get Started</Link>
      </div>
    </div>
  );
};

export default Hero;
