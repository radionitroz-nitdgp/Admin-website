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



function Navbar() {
  return (
    <>
       <div className="NavlinkContainer my-4 mx-5 pr-3 d-inline-block align-content-center">  
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/Aboutus'}>  Aboutus</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/Events'}>  Events</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/Alumni'}> Alumni</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/Gallery'}> Gallery</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/Sponsers'}> Sponsers</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/TeamMembers'}> TeamMembers</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/VideoSeries'}> VideoSeries</NavLink>
          <Button className="bg-primary" onClick={()=>{Signout();user()}}>Signout</Button>
        </div>
    </>
  )
}

export default Navbar