import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Container,Form,Button} from 'react-bootstrap'
import './Container.css'
import {useState} from 'react'
import {setDoc ,doc, onSnapshot, getDoc, updateDoc, arrayUnion} from 'firebase/firestore'
import {db} from '../firebase'
import { getStorage, ref,uploadBytes } from "firebase/storage";
function Sponsers() {
   const [name,setname] = useState("")
const [email,setemail] = useState("")
const [url,seturl] = useState("")
const [file,setfile] = useState(null)


const SponserData = {
  Name : name,
  email : email,
  url : url
}
const submitbtn = document.getElementById("submit")

const submitData = async(e)=>{
  e.preventDefault();
 submitbtn.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Submitting";

 try{
  const docref = doc(db,'Main','Sponsers')
  await updateDoc(docref,{ Sponsers_List : arrayUnion(SponserData)})
  if (file != null){
    const storage = getStorage()
  const storageRef = ref(storage,`Sponsers/${SponserData.Name}.jpg`)
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
     
 <div id="HeadingLine" className="text-center h3 text-white">Fill Sponser Data</div>
    <Form  method='post'autoComplete='off' noValidate validated onSubmit={submitData} id="form" >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='text-white'>Enter Sponser Name</Form.Label>
        <Form.Control type="text" placeholder="Sponser Name"  onChange={(e)=>{setname(e.target.value)}} required/>
        
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-white'>His/Her Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{setemail(e.target.value)}} required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label className='text-white'>Sponser's Website Url</Form.Label>
        <Form.Control type="url"  placeholder="Enter Website Url" onChange={(e)=>{seturl(e.target.value)}} required/>
        
      </Form.Group>
       <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className='text-white'> Upload A Photo </Form.Label>
        <Form.Control type="file" accept='.jpg,.jpeg,.webp,.png' onChange={(e)=>{setfile(e.target.files[0])}} required/>
       
      </Form.Group>
      <Button variant="primary" id='submit' type="submit">Submit</Button>
    </Form>
  </Container>
    </>
  )
}

export default Sponsers