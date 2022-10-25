import React from 'react'

import {  NavLink } from 'react-router-dom'
import {Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import './Navbar.css'

 const Signout = ()=>{
   const navigate = useNavigate()
   signOut(auth).then(()=>{
    localStorage.setItem('isUser',JSON.stringify(false));
    navigate("/",{replace:true});
    console.log("logged out")
   }).catch((err) =>{
     console.log("err : " +err )
   })
 }
const user = () =>{
  window.isUser = false;
  console.log(window.isUser);
}
const IconStyle = {
    "font-size" : "2.1em",
    "right" : "0"
}
const NavStyle ={
 "backdrop-filter": "blur(10px)"
}



function Navbar() {
  return (
    <>
     {/* NAVBAR FOR SMALL SCREEN */}

    <div class="d-flex flex-column d-md-none" id="side_nav">
       <div onClick={CloseNavbar} className="openNavIcon text-white d-inline-block position-absolute m-1 pr-5" style={IconStyle} ><i class="fa fa-close" aria-hidden="true"></i> </div>
   
        <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3 col-6 my-1" : "Navlinks  px-2 py-2 mx-3 col-6 my-1")} to={'/Aboutus'}>  Aboutus</NavLink>
          <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3 col-6 my-1 " : "Navlinks  px-2 py-2 mx-3 col-6 my-1 ")} to={'/Events'}>  Events</NavLink>
          <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3 col-6 my-1" : "Navlinks  px-2 py-2 mx-3 col-6 my-1")} to={'/Alumni'}> Alumni</NavLink>
          <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3 col-6 my-1" : "Navlinks  px-2 py-2 mx-3 col-6 my-1")} to={'/Gallery'}> Gallery</NavLink>
          <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3 col-6 my-1" : "Navlinks  px-2 py-2 mx-3 col-6 my-1")} to={'/Sponsers'}> Sponsers</NavLink>
          <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3 col-6 my-1" : "Navlinks  px-2 py-2 mx-3 col-6 my-1")} to={'/TeamMembers/FirstYearForm'}> TeamMembers</NavLink>
          <NavLink onClick={CloseNavbar} className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3 col-6 my-1" : "Navlinks  px-2 py-2 mx-3 col-6 my-1")} to={'/VideoSeries'}> VideoSeries</NavLink>
          <Button className="bg-primary" onClick={()=>{Signout();user()}}>Signout</Button>
    

    </div>
      
         <div className="d-block d-md-none">
      
          <div onClick={OpenNavbar} className="openNavIcon text-white d-inline-block position-absolute m-4 pr-5" style={IconStyle} ><i class="fa fa-bars" aria-hidden="true"></i> </div>
 </div>

        {/* NAVBAR FOR LARGE SCREEN */}


      <div className="Navbar d-none d-md-block mt-5 d-flex justify-content-center" style={NavStyle}>
       
        <div className="NavlinkContainer mt-2 mb-4 mx-5 pr-3 d-inline-block d-flex justify-content-center">
           <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/Aboutus'}>  Aboutus</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/Events'}>  Events</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/Alumni'}> Alumni</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/Gallery'}> Gallery</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/Sponsers'}> Sponsers</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/TeamMembers/FirstYearForm'}> TeamMembers</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/VideoSeries'}> VideoSeries</NavLink>
          <Button className="bg-primary" onClick={()=>{Signout();user()}}>Signout</Button>
        </div>
      </div>
   
  

    </>
  )
}

export default Navbar

 // SIDE EFFECT IN  SIDENAV

    function OpenNavbar() {
        document.getElementById("side_nav").style.width = "100%"; // MAKE WIDTH 100% WHEN SIDENAV IS NEEDED 
    }

    function CloseNavbar() {
        document.getElementById("side_nav").style.width = "0"; //MAKE WIDTH 0 WHEN SIDENAV IS NOT NEEDED
    }