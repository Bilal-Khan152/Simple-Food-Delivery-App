import React, { useState } from 'react' 
import { useFirebase } from '../Context/Firebase';
import { toast } from 'react-toastify';

function Contact() {
  
    const firebase = useFirebase() ;
     
     const [userName,setUserName] = useState('') ;
    const [email ,setEmail ] = useState('') ; 
    const [message , setMessage ] = useState('') ;

    const handleSubmit = async () => {

        console.log("Message Recieved")
         if(firebase.isLoggedIn && userName != "" && email != "" && message != ""){     
      await firebase.placeMesseage(userName , email , message)
      toast.success("Your message succesfully submited")
      setEmail("")
      setMessage("")
      setUserName("")

    }else{
      alert("please login and all fields are requires")
    }
   
  
    }
  


  return (
    <div className='min-h-[77vh] bg-black px-12 flex items-center justify-center'>

     <div>
       
        
     <p className="text-white text-xl sm:text-3xl font-semibold"><i>Username</i></p>
        <input
          className="  h-[30px] sm:w-[400px] sm:h-[50px] mt-2 px-2  border-white 
          
                  w-[240px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500
          
          "
          type="email"
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
          placeholder="Enter your name . . . . . ."
        />
        
     <p className="text-white text-xl sm:text-3xl font-semibold"><i>Email</i></p>
        <input
          className="  h-[30px] sm:w-[400px] sm:h-[50px] mt-2 px-2   border-white
          
          
                  w-[240px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500
          
          "
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          
          type="email"
          placeholder="Enter your email . . . . . . "
        />
  

  <p className="text-white text-xl sm:text-3xl font-semibold"><i>Message</i></p>
  <textarea 
  className="   sm:w-[400px] sm:h-[100px] mt-2 px-2 border-white 
  
                  w-[240px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500
  
  "
     value={message}
     onChange={(e)=>setMessage(e.target.value)}
     placeholder='Enter your message . . . . . .'
  >
   
   
    
  </textarea>
 
    <br />  
    <button
           onClick={ handleSubmit} 
            className='mt-6  text-[14px] sm:text-[18px] inline-block outline-none border-none cursor-pointer will-change-[box-shadow,transform] bg-slate-700 px-5 sm:px-8 py-0 rounded-md text-white h-8 sm:h-[2.6em] shadow-[0_1px_0_rgba(0,0,0,0.4)] transition-shadow  duration-150 ease-in-out' 
          >
            {" "}
            Submit
          </button>



     </div>





    </div>
  )
}

export default Contact