import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Container,Form,Button} from 'react-bootstrap'
import '../Container.css'
import {useState} from 'react'
import {setDoc ,doc, onSnapshot, getDoc, updateDoc, arrayUnion} from 'firebase/firestore'
import {db} from '../../firebase'
import { getStorage, ref,uploadBytes } from "firebase/storage";
import MemberFormNavbar from '../../components/Navbar/MemberFormNavbar'
function FinalYearForm() {
   const [name,setname] = useState("")
const [email,setemail] = useState("")
const [number,setnumber] = useState("")
const [file,setfile] = useState(null)

const MemberData = {
  Name : name,
  email : email,
  number : number
}
const submitbtn = document.getElementById("submit")

const submitData = async(e)=>{
  e.preventDefault();
 try{
  const docref = doc(db,'Main','Members')
  await updateDoc(docref,{ Final_Year_List : arrayUnion(MemberData)})
  submitbtn.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Submitting";
  if(file !=null) {
    const storage = getStorage()
    const storageRef = ref(storage,`Members/Final_Year/${MemberData.Name}.jpg`)
   uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
   });
  }
   submitbtn.innerHTML = "Submitted";
  alert("Data Uploaded Succesfully")
  document.getElementById("form").reset();
  submitbtn.innerHTML = "Submit";
 }catch(e){
  console.log(e)
 }
}
  return (
    <>
    <Navbar/>
   
  <Container className='Container-FormBox py-4 px-lg-5 my-3'>
     <Container className='Container-FormBox py-4 px-lg-5 my-3'>
    <MemberFormNavbar/>
  </Container>
 <div id="HeadingLine" className="text-center h3 text-white">Fill Final Year Data</div>
    <Form method='post'autoComplete='off' novalidate validated id="form" onSubmit={submitData}>
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
        <Form.Control type="file" accept='.jpg,.jpeg,.webp,.png' onChange={(e)=>{setfile(e.target.files[0])}} required/>
       
      </Form.Group>
      <Button variant="primary"    type="submit" id="submit">Submit</Button>
    </Form>
  </Container>
    </>
  )
}

export default FinalYearForm