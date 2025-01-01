import React, { useEffect, useState } from "react" ;  
import {useFirebase} from "../Context/Firebase" ;
import {useNavigate} from   "react-router-dom" ;


function MenuCard(props){

  //    console.log(props)

   const [url,setURL] = useState() ;

   const firebase = useFirebase() ;
   const navigate = useNavigate() ;
  
  useEffect(()=>{
   firebase.getImageURL(props.imageURL).then(img => setURL(img)) ;

  },[])

const handleONCLick = () => {
        
        if(firebase.isLoggedIn){
    navigate(`view/menudetail/${props.id}`)
  }else{
    alert("Please Login or Signup")
  }
}

  return (
    <div className="w-80 p-4 mx-3 mb-9 bg-black rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        className="w-full h-44 object-cover rounded-t-lg"
        alt="Card Image"
        src={url}
      />
      <div className="p-4">
        <h2 className="text-xl  text-white font-semibold"> {props.dealName} &#128525;</h2>
        <p className="text-gray-400">
           Description :{props.discription}
        </p>
         <p className="text-white">Price : {props.price} Rs</p>
        <div className="flex justify-between items-center mt-4">
          <button 
          onClick={handleONCLick}
          className="bg-blue-500
           hover:bg-blue-600
            text-white px-4
             py-2 rounded
              focus:outline-none focus:ring-2
               focus:ring-blue-400">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
