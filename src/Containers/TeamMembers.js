import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Container,Form,Button} from 'react-bootstrap'
import './Container.css'
import {useState} from 'react'
import {setDoc ,doc, onSnapshot, getDoc, updateDoc, arrayUnion} from 'firebase/firestore'
import {db} from '../firebase'
import { getStorage, ref,uploadBytes } from "firebase/storage";


function TeamMembers() {
const [name,setname] = useState("")
const [email,setemail] = useState("")
const [number,setnumber] = useState("")
const [file,setfile] = useState("")
const MemberData = {
  Name : name,
  email : email,
  number : number
}
const submitFinalYearData = async(e)=>{
  e.preventDefault();
 try{
  const docref = doc(db,'Main','Members')
  await updateDoc(docref,{ Final_Year_List : arrayUnion(MemberData)})
  const storage = getStorage()
  const storageRef = ref(storage,`Members/Final_Year/${MemberData.Name}.jpg`)
 uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
 });
 }catch(e){
  console.log(e)
 }
}
const submitThirdYearData = async(e)=>{
  e.preventDefault();
 try{
  const docref = doc(db,'Main','Members')
  await updateDoc(docref,{ Third_Year_List : arrayUnion(MemberData)})
  const storage = getStorage()
  const storageRef = ref(storage,`Members/Third_Year/${MemberData.Name}.jpg`)
 uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
 });
 }catch(e){
  console.log(e)
 }
}
const submitFirstYearData = async(e)=>{
  e.preventDefault();
 try{
  const docref = doc(db,'Main','Members')
  await updateDoc(docref,{ First_Year_List : arrayUnion(MemberData)})
  const storage = getStorage()
  const storageRef = ref(storage,`Members/First_Year/${MemberData.Name}.jpg`)
 uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
 });
 }catch(e){
  console.log(e)
 }
}
const submitSecondYearData = async(e)=>{
  e.preventDefault();
 try{
  const docref = doc(db,'Main','Members')
  await updateDoc(docref,{ Second_Year_List : arrayUnion(MemberData)})
  const storage = getStorage()
  const storageRef = ref(storage,`Members/Second_Year/${MemberData.Name}.jpg`)
 uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
 });
 }catch(e){
  console.log(e)
 }
}



  const heading = document.getElementById("HeadingLine")
  const FirstYearBtn = document.getElementById("FirstYear")
  const SecondYearBtn = document.getElementById("SecondYear")
  const ThirdYearBtn = document.getElementById("ThirdYear")
  const FinalYearBtn = document.getElementById("FinalYear")

const FirstYearForm = ()=>{
  heading.innerText = "Fill First Year Data"
  SecondYearBtn.style.display = "none"
  ThirdYearBtn.style.display = "none"
  FinalYearBtn.style.display = "none"
  FirstYearBtn.style.display = "block"
  document.getElementById("form").reset();
}
const SecondYearForm = ()=>{
  heading.innerText = "Fill Second Year Data"
  SecondYearBtn.style.display = "block"
  ThirdYearBtn.style.display = "none"
  FinalYearBtn.style.display = "none"
  FirstYearBtn.style.display = "none"
  document.getElementById("form").reset();
  
}
const ThirdYearForm = ()=>{
  heading.innerText = "Fill Third Year Data"
  SecondYearBtn.style.display = "none"
  ThirdYearBtn.style.display = "block"
  FinalYearBtn.style.display = "none"
  FirstYearBtn.style.display = "none"
  document.getElementById("form").reset();
  
}
const FinalYearForm = ()=>{
  heading.innerText = "Fill Final Year Data"
  SecondYearBtn.style.display = "none"
  ThirdYearBtn.style.display = "none"
  FinalYearBtn.style.display = "block"
  FirstYearBtn.style.display = "none"
  document.getElementById("form").reset();
  
}


  return (
    <>
<Navbar/>
  
   <Container className='Container-FormBox py-4 px-lg-5 my-3'>
   <Container className='Container-FormBox py-4 px-lg-5 my-3'>
    <Button className='mx-3 btn-outline-light' onClick={FirstYearForm}>FIRST YEAR</Button>
    <Button className='mx-3 btn-outline-light' onClick={SecondYearForm}>SECOND YEAR</Button>
    <Button className='mx-3 btn-outline-light' onClick={ThirdYearForm}>THIRD YEAR</Button>
    <Button className='mx-3 btn-outline-light' onClick={FinalYearForm}>FINAL YEAR</Button>
  </Container>
   <div id="HeadingLine" className="text-center h3 text-white">Fill First Year Data</div>
    <Form method='post'autoComplete='off' id="form" >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='text-white'>Enter Member Name</Form.Label>
        <Form.Control type="text" placeholder="Event Name"  onChange={(e)=>{setname(e.target.value)}} required/>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-white'>His/Her Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}} required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label className='text-white'>His/Her Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" onChange={(e)=>{setnumber(e.target.value)}} required/>
        
      </Form.Group>
       <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className='text-white'> Upload A Profile Photo </Form.Label>
        <Form.Control type="file" onChange={(e)=>{setfile(e.target.files[0])}} />
       
      </Form.Group>
      <Button variant="primary" id='FirstYear'  onClick={submitFirstYearData} type="submit">Submit</Button>
      <Button variant="primary" id='SecondYear' onClick={submitSecondYearData} type="submit">Submit</Button>
      <Button variant="primary" id='ThirdYear' onClick={submitThirdYearData} type="submit">Submit</Button>
      <Button variant="primary" id='FinalYear'  onClick={submitFinalYearData} type="submit">Submit</Button>
    </Form>
   </Container>
    </>
  )
}

export default TeamMembers