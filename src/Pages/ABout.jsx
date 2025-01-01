import React from "react"; 
import 'animate.css';

function ABout() {
  return (
    <div className="bg-black h-[77vh] flex items-center">
      <div className="text-white p-6   animate__animated    animate__backInUp">
        <p className=" text-xl sm:text-3xl"> Welcome to <span className="text-yellow-600"> Food  </span>  <span className="text-yellow-600">Point</span> . Where Flavor Meets Quality!</p><br />
        <p className="text-gray-100 text-xs sm:text-xl ">
          At Point, we’re more than just a food delivery service . we’re a
          celebration of flavors, tradition, and a dedication to quality. Our
          journey started with a passion for delivering authentic,
          mouth-watering dishes directly to your doorstep, crafted with the
          finest ingredients and cooked to perfection. Every meal we deliver
          represents our commitment to quality, from sourcing local, fresh
          produce to partnering with experienced chefs who share our love for
          food. With Point, expect nothing but the best . vibrant flavors, fast
          delivery, and an unforgettable food experience that keeps you coming
          back for more.
        </p>
      </div>
    </div>
  );
}

export default ABout;
