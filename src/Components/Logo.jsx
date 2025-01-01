import React from 'react'
import { useNavigate } from 'react-router-dom'
function Logo() {

const navigate = useNavigate() ;

  return (
    <div className="ms-8 cursor-pointer" onClick={() => navigate("/")}>
    <p className="text-3xl md:text-5xl font-sans  text-black font-bold italic ">
      Food
      <span className=" text-yellow-600 ms-2">Point</span>
    </p>
  </div>
  )
}

export default Logo