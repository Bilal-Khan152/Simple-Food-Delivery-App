import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/Firebase";
import MenuCard from "./MenuCard";

function MenuSection() {
  const [data, setData] = useState([]);

  const firebase = useFirebase();
  //console.log(firebase)

  useEffect(() => {
    firebase.getMenuCardData().then(
      (val) => setData(val.docs)
      // console.log("Your Data :" , val.docs  )
    );
  }, []);

    
  // if(data == []){
  //   return(
   
  //   )
  //  }


  return (
    <div>
      <div className="w-full">
        <p className="text-5xl text-black font-bold mt-6 mb-6 text-center ">
          Our Menu
        </p>
        <div className="w-44 h-1 border-b-4 border-yellow-400 mx-auto  mt-2 rounded-xl md:mt-4 mb-12"></div>
      </div>

      <div className="flex flex-wrap justify-center   ">
        {
        
         
        (data.length == 0 ?
           <>
          <div className=' min-h-screen flex justify-center items-center'>
          <div
          className="w-16 h-16 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"
         ></div>
          </div>
          
         
         </> : 
         
        data.map((ourValues) => (
          <MenuCard
            key={ourValues.id}
            id={ourValues.id}
            {...ourValues.data()}
          />
        ))
      
  )
     
      
      
       }


         
      </div>
    </div>
  );
}

export default MenuSection;
