import React from 'react'

import {  NavLink } from 'react-router-dom'
import {Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

// const Signout = ()=>{
//   const navigate = useNavigate()
//   signOut(auth).then(()=>{
    
//   }).catch((err) =>{
//     console.log("err : " +err )
//   })
// }
const user = () =>{
  window.isUser = false;
  console.log(window.isUser);
}

const Signout = () =>{
  
  const navigate = useNavigate()
navigate("/");
    console.log("Sign Out",{replace:true})
}

function Navbar() {
  return (
    <>
       <div className="NavlinkContainer my-4 mx-5 pr-3 d-inline-block ">  
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/Aboutus'}>  Aboutus</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/Events'}>  Events</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/Alumni'}> Alumni</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/Gallery'}> Gallery</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/Sponsers'}> Sponsers</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/TeamMembers'}> TeamMembers</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks NavActive px-2 py-4 mx-3" : "Navlinks px-2 py-4 mx-3")} to={'/VideoSeries'}> VideoSeries</NavLink>
          <Button className="bg-primary" onClick={()=>{Signout();user()}}>Signout</Button>
        </div>
    </>
  )
}

export default Navbar