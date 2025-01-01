import React, { useState } from 'react' ;
import {useParams} from "react-router-dom" ;
import { useEffect } from 'react';
import {useFirebase} from "../Context/Firebase" ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ViewMenu() {
const [data , setData ] = useState(null) ;

// console.log(data)
const [url , setURL] = useState() ;
const [quantity ,setQuantity] = useState(1) ;
const [address,setAddress] = useState("") ;
const [mobileNumber , setMobileNumber] = useState() ;


    const firebase = useFirebase() ;
    const params = useParams() ;
   //console.log(params)


    const orderNow = async()=> {
      if(address == "" || mobileNumber == "" ){
        alert("All fields are required")
      }else{
      const result = await firebase.placeOrder(params.menuId,quantity,address,mobileNumber) ;
        console.log("order placed" , result)
        toast.success("Your order is succesfully placed")
      }
    }

   useEffect(()=>{
    firebase.getMenuById(params.menuId).then((value) => setData(value.data()))
   },[])  ;


        useEffect(()=>{
          if(data){
            const imgRef = data.imageURL ;
            firebase.getImageURL(imgRef).then(url => setURL(url)) ;
          }
        },[data])





    if(data == null){
   return(
    <>
     <div className=' min-h-screen flex justify-center items-center'>
     <div
     className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"
    ></div>
     </div>
     
    
    </>
   )
  }


   

  return (
    
    <div className='min-h-screen  w-full'>
        
 <div className=' flex  flex-col sm:flex-row  px-4 justify-evenly mt-16  '>
 
      <div>

 <img  src={url} alt="" className='sm:w-[400px] w-[250px] h-[200px]rounded sm:h-[250px]'/>

 </div>

  <div className='mt-2 sm:mt-0'> 
     <p className='font-bold'>Deal Name: <span className='font-semibold'>  {data.dealName} </span></p>
  
  <p className='font-bold'>Delivery Charges : <span className='font-semibold'> Rs.200</span></p>
  <p className='font-bold'>Price : Rs.{data.price} &times; {quantity}</p>
 
  <p className='font-bold' >Quantity :</p>
   <input type="number" className='py-1 px-2  border-2 border-black' value={quantity} onChange={e => setQuantity(e.target.value)} />
   {" "}
  <p className='font-bold' > Address :</p>
   <input type="text" placeholder='Enter your address' className='py-1 px-2  border-2 border-black' value={address} onChange={e => setAddress(e.target.value)} />
   
  <p className='font-bold' > Mobile no :</p>
   <input type="text" placeholder='Enter your mobile no' className='py-1 px-2  border-2 border-black' value={ mobileNumber} onChange={e => setMobileNumber(e.target.value)} />
   <p className='font-bold'>Total Amount : Rs.{data.price * quantity + 200}</p>  

{/*  
  <p className='font-bol'>If you are comfort with this deal so contact us   </p>
   <p className='font-bold'>Whatsapp : <span className='text-blue-800'> 03139594577 </span></p>
    <p  className='font-bold'>Phone : <span className='text-blue-800'>  03357704673 </span></p> */}


 </div>

     
        
        
        
         </div>
<div className='w-full text-center mt-16'>
         <button
         className='text-[18px] mb-5 sm:mb-0 inline-block outline-none border-none cursor-pointer will-change-[box-shadow,transform] bg-slate-700 px-16 py-0 rounded-lg text-white h-[2.6em] shadow-[0_1px_0_rgba(0,0,0,0.4)] transition-shadow  duration-150 ease-in-out' 
     onClick={orderNow}
    >Order now</button>
    <ToastContainer/>
    </div>
  
    </div>     
  
  )
}

export default ViewMenu   ;