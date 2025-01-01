import { useState } from "react";
import React from "react";
import { useFirebase } from "../Context/Firebase";
import "animate.css" ;
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
 
  const navigate = useNavigate() ;
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebase();

  const handleOnClick = async () => {
    try {
      if (email == "" || password == "") {
        return alert("Please enter email and password");
      }
      await firebase.SignInUserWithEmailAndPassword(email, password);
      
     
      setEmail("");
      setPassword("");
      toast.success("You are successfully logged in")
      navigate('/')
    } catch (error) {
      console.log("Something is wrong ", error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-h-[77vh] bg-black">
      <div className="animate__animated   animate__pulse ">
        <p className="text-white text-xl sm:text-3xl font-semibold"><i>Email</i></p>
        <input
          className="  h-[30px] sm:w-[400px] sm:h-[50px] mt-2 px-2  border-white 
          
             w-[240px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500
          "
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter your email......"
        />
        <p className="text-gray-400 mt-1   text-[14px]">
          {" "}
          we will never share your email with anyone else{" "}
        </p>
        <p className="text-white mt-5 text-xl sm:text-3xl  font-semibold"><i>Password</i></p>
        <input
          className="sm:w-[400px] sm:h-[50px]  h-[30px] px-2 mt-2 border-white 
          
          
             w-[240px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500
          
          "
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter your password......"
        />{" "}
        <br />
        <div className="flex">
          <button onClick={handleOnClick}
          className='mt-6 text-[14px] sm:text-[18px] inline-block outline-none border-none cursor-pointer will-change-[box-shadow,transform] bg-slate-700 px-5   sm:px-8 py-0 rounded-md text-white h-8 sm:h-[2.6em] shadow-[0_1px_0_rgba(0,0,0,0.4)] transition-shadow  duration-150 ease-in-out' 
        >
            {" "}
            Login
          </button>
          <p className="text-white ms-2 me-2 font-semibold mt-8 sm:mt-9">OR</p>
          <button
            onClick={firebase.SignInUserWithGoogleAccount}
            className='mt-6  text-[14px] sm:text-[18px] inline-block outline-none border-none cursor-pointer will-change-[box-shadow,transform] bg-slate-700 px-5 sm:px-8 py-0 rounded-md text-white h-8 sm:h-[2.6em] shadow-[0_1px_0_rgba(0,0,0,0.4)] transition-shadow  duration-150 ease-in-out' 
          >
            {" "}
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
