import React from "react";
import "animate.css";

function HeroSection() {
  return (
    <div className="flex justify-center items-center  
      bg-black 
    h-screen 
    
    ">
      <div className="   animate__animated  animate__backInDown">
        <div className="TEXT">
          <p className=" text-center text-xl md:text-2xl lg:text-4xl font-semibold 
             text-indigo-800
          sm:font-semibold md:font-bold import  ">
            "Welcome to{" "}
            <span className="text-yellow-600 italic text-xl md:text-3xl"> Food Point</span>
            . Your Destination for Deliciousness!"
          </p>
        </div>

        <div className=" mt-7 text-white  sm:w-[70vw] lg:w-[60vw] mx-auto text-center  ">
          <p className=" text-xs sm:text-xl line-clamp-4  font-semibold cssanimation leFadeIn sequence">
            "Craving something tasty? You've come to the right spot! At Food
            Point, we bring you fresh, mouth-watering meals delivered straight
            to your door. Browse our menu and discover flavors that hit the spot
            every time. "
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
