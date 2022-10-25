import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Container,Form,Button} from 'react-bootstrap'
import './Container.css'
import {useState} from 'react'
import {setDoc ,doc, onSnapshot, getDoc, updateDoc, arrayUnion} from 'firebase/firestore'
import {db} from '../firebase'
import { getStorage, ref,uploadBytes } from "firebase/storage";
function Gallery() {
   const [name,setname] = useState("")
const [Description,setDescription] = useState("")
const [file,setfile] = useState(null)


const GalleryData = {
  Name : name,
  Description : Description,
  
}
const submitbtn = document.getElementById("submit")

const submitData = async(e)=>{
  e.preventDefault();
 submitbtn.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Submitting";

 try{
  const docref = doc(db,'Main','Gallery')
  await updateDoc(docref,{ Gallery_List : arrayUnion(GalleryData)})
  if (file != null){
    const storage = getStorage()
  const storageRef = ref(storage,`Gallery/${GalleryData.Name}.jpg`)
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
     
 <div id="HeadingLine" className="text-center h3 text-white">Fill Gallery Data</div>
    <Form  method='post'autoComplete='off' noValidate validated id="form" >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='text-white'>Enter Gallery Name</Form.Label>
        <Form.Control type="text" placeholder="Gallery Name"  onChange={(e)=>{setname(e.target.value)}} required/>
        
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='text-white'>Gallery Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description"  onChange={(e)=>{setDescription(e.target.value)}} required/>
        
      </Form.Group>
    
       <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className='text-white'> Upload A Photo </Form.Label>
        <Form.Control type="file" accept='.jpg,.jpeg,.webp,.png' onChange={(e)=>{setfile(e.target.files[0])}} required/>
       
      </Form.Group>
      <Button variant="primary" id='submit'  onClick={submitData} type="submit">Submit</Button>
    </Form>
  </Container>
    </>
  )
}

export default Gallery