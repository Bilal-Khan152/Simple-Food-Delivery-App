import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Logo from "./Logo";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleHomeOnClick = () => {
    navigate("/")
    setIsOpen(false)
  }
  const handleAboutOnClick = () => {
    navigate("/about")
    setIsOpen(false)
  }
  const handleContactOnClick = () => {
    navigate("/contact")
    setIsOpen(false)
  }
  const handleSignUpOnClick = () => {
    navigate("/register")
    setIsOpen(false)
  }
  const handleLoginOnClick = () => {
    navigate("/login")
    setIsOpen(false)
  }

 
   


  return (
    <>
      <div className="w-full h-[70px] sticky top-0 z-[50] flex items-center flex-wrap justify-between bg-slate-700  ">
        <Logo/>

        <div
          className={`
        ${
          isOpen
            ? "flex flex-col text-center absolute  w-screen  top-20 py-3   gap-5   bg-slate-500"
            : "hidden"
        } lg:flex lg:items-center lg:w-auto  `}
        >
          <p
            className="lg:md:text-xl me-4 md:ms-5 lg:ms-0 text-black lg:font-semibold hover:text-white cursor-pointer"
            onClick={handleHomeOnClick}
          >
            Home
          </p>
          <p
            className="lg:text-xl md:ms-5 me-4 text-black lg:font-semibold hover:text-white cursor-pointer"
            onClick={handleAboutOnClick}
          >
            About{" "}
          </p>
          <p
            className="lg:text-xl md:ms-5 me-4 text-black lg:font-semibold hover:text-white cursor-pointer"
            onClick={handleContactOnClick}
          >
            Contact us{" "}
          </p>
          {/* <p
            className="md:text-xl me-5 md:ms-5   text-black font-semibold hover:text-white cursor-pointer"
            onClick={() => navigate("/addMenu")}
          >
            Add Menu{" "}
          </p> */}

          <button
            onClick={handleLoginOnClick}
            className=" lg:group/button lg:me-4 lg:relative lg:inline-flex lg:items-center lg:justify-center lg:overflow-hidden lg:rounded-md lg:bg-blue-500/30 lg:backdrop-blur-lg lg:px-5 lg:py-1 lg:text-base lg:font-semibold lg:text-white lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:scale-100 lg:hover:shadow-xl lg:hover:shadow-blue-600/50 lg:border lg:border-white/20"
          >
            <span className="lg:text-lg">Login</span>
            <div className="lg:absolute lg:inset-0 lg:flex lg:h-full  lg:w-full lg:justify-center lg:[transform:skew(-13deg)_translateX(-100%)] lg:group-hover/button:duration-1000 lg:group-hover/button:[transform:skew(-13deg)_translateX(100%)] ">
              <div className=" relative h-full w-10 bg-white/30"></div>
            </div>
          </button>

          <button
            onClick={handleSignUpOnClick}
            className="lg:group/button lg:me-8 lg:relative lg:inline-flex lg:items-center lg:justify-center lg:overflow-hidden lg:rounded-md lg:bg-blue-500/30 lg:backdrop-blur-lg lg:px-5 lg:py-1 lg:text-base lg:font-semibold lg:text-white lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:scale-100 lg:hover:shadow-xl lg:hover:shadow-blue-600/50 lg:border lg:border-white/20"
          >
            <span className="lg:text-lg">Signup</span>
            <div className="lg:absolute lg:inset-0 lg:flex lg:h-full  lg:w-full lg:justify-center lg:[transform:skew(-13deg)_translateX(-100%)] lg:group-hover/button:duration-1000 lg:group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </div>

        <div className="me-6 lg:hidden  cursor-pointer">
          <IoMdMenu onClick={() => setIsOpen(!isOpen)} className="text-3xl" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
