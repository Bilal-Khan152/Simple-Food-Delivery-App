// import React, { useState } from 'react'
// import {useFirebase} from "../Context/Firebase" ;
// import { toast } from 'react-toastify';

// function AddMenu() {
// const [coverPic , setCoverPic ] = useState() ;
// const [dealName , setDealName] = useState("") ;
// const [discription , setDiscription] = useState("") ;
// const [price,setPrice] = useState("") ;

//    const firebase = useFirebase() ;
//      //console.log(firebase)

//       const  handleOnClick = async () => {
  
//            if(firebase.isLoggedIn ){
//         await firebase.AddMenuOnHomeScreen(coverPic , dealName ,discription,price)  
//         toast.success("successfully added a new menu ")
//          setCoverPic() ;
//          setDealName("")
//          setDiscription("")
//          setPrice("") 

//         }else{
//           alert("please login or signup")
//         }

//     }
    
     
      

//     return (
//         <div className="w-full flex justify-center h-screen bg-black">
//           <div className="mt-[40px] md:mt-[10px] lg:mt-[10px] xl:mt-[80px] animate__animated   animate__pulse">
//             <p className="text-white  text-xl  md:text-3xl font-semibold">Image</p>
//             <input
//               className="w-[300px] h-[30px] md:w-[400px] md:h-[50px] mt-2 px-2 rounded-md border-white "
//               onChange={(e) => setCoverPic(e.target.files[0])}
//               type="file"
              
            
//             />
             
//             <p className="text-white mt-5 sm:mt-3  text-xl  md:text-3xl   font-semibold">Deal Name</p>
//             <input
//               className="w-[300px] h-[30px] md:w-[400px] md:h-[50px]  px-2 mt-2 border-white rounded-md "
//               onChange={(e) => setDealName(e.target.value)}
//               value={dealName}
//               type="text"
              
//             />{" "}
//             <p className="text-white mt-5  text-xl  md:text-3xl   font-semibold">Discription</p>
//             <input
//               className="w-[300px] h-[30px] md:w-[400px] md:h-[50px]  px-2 mt-2 border-white rounded-md "
//               onChange={(e) => setDiscription(e.target.value)}
//               value={discription}
//               type="text"
              
//             />{" "}
//             <p className="text-white mt-5  text-xl  md:text-3xl   font-semibold">Price</p>
//             <input
//               className="w-[300px] h-[30px] md:w-[400px] md:h-[50px]  px-2 mt-2 border-white rounded-md "
//               onChange={(e) => setPrice(e.target.value)}
//               value={price}
//               type="text"
              
//             />{" "}
//            <br />
//             <button onClick={handleOnClick}   className='text-[18px] inline-block outline-none border-none cursor-pointer will-change-[box-shadow,transform] bg-slate-700 px-16 py-0 rounded-lg text-white h-[2.6em] shadow-[0_1px_0_rgba(0,0,0,0.4)] transition-shadow  duration-150 ease-in-out mt-6' >
//               {" "}
//               Create 
//             </button>
//           </div>
//         </div>
//       );
// }

// export default AddMenu ;