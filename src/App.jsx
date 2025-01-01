 import {Route,Routes} from "react-router-dom" ;
 import './App.css'
 import { useEffect } from "react";




 // components 
 import Navbar from "./Components/Navbar";
 import Footer from "./Components/Footer";
//pages
import Register from "./Pages/Register"; 
import Login from "./Pages/Login";
import Home from "./Pages/Home" ; 
import ABout from "./Pages/ABout" ;
import ViewMenu from "./Pages/ViewMenu";
import Contact from "./Pages/Contact";
//  import AddMenu from "./Pages/AddMenu";
 
 import { toast,ToastContainer } from "react-toastify";
function App() {
  useEffect(()=>{
    toast.info('Great news! Our services are now available in Islamabad  Peshawar , Faislabad and Lahore ')
  },[])
 
  return (
    <>

    <Navbar/>
     
     <Routes>

      <Route path="/" element={ <Home/> } /> 

      <Route path="/about" element={ <ABout/> } /> 

      <Route path="/contact" element={ <Contact/> } /> 

      <Route path="/register" element={< Register/>} /> 

      <Route path="/login" element={< Login/>} /> 

      

      <Route path="/view/menudetail/:menuId" element={<  ViewMenu/>} /> 



         </Routes>
         < ToastContainer/>
     <Footer/>

        
    </>
  )
}

export default App


//  <Route path="/addMenu" element={<  AddMenu/>} />    