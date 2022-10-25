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



function MemberFormNavbar() {
  return (
    <>
       <div className="NavlinkContainer d-flex flex-column flex-md-row  my-4 mx-5 pr-3 d-inline-block align-content-center">  
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/TeamMembers/FirstYearForm'}>  First Year</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/TeamMembers/SecondYearForm'}>  Second Year</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/TeamMembers/ThirdYearForm'}> Third Year</NavLink>
          <NavLink className={({isActive})=> (isActive? "Navlinks  NavActive px-2 py-2 mx-3" : "Navlinks  px-2 py-2 mx-3")} to={'/TeamMembers/FinalYearForm'}> Final Year</NavLink>
        </div>
    </>
  )
}

export default MemberFormNavbar