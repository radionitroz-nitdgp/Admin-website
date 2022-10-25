import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Container,Form,Button} from 'react-bootstrap'
import './Container.css'
import {useState} from 'react'
import {setDoc ,doc, onSnapshot, getDoc, updateDoc, arrayUnion} from 'firebase/firestore'
import {db} from '../firebase'
import { getStorage, ref,uploadBytes } from "firebase/storage";
import Footer from '../components/Footer/Footer'
function VideoSeries() {
   const [name,setname] = useState("")
const [url,seturl] = useState("")
const [file,setfile] = useState(null)


const VideoData = {
  Name : name,
  url : url
}
const submitbtn = document.getElementById("submit")
 const submitData = async(e) =>{
e.preventDefault();
submitbtn.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Submitting";
 try{
  const docref = doc(db,'Main','Video_Series')
  await updateDoc(docref,{ Video_List : arrayUnion(VideoData)})
  if (file != null){
    const storage = getStorage()
  const storageRef = ref(storage,`Video_Series/${VideoData.Name}.jpg`)
 uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
 });
  }
    submitbtn.innerHTML = "Submitted";
  alert("Data Uploaded Succesfully")
  document.getElementById("form").reset();
  submitbtn.innerHTML = "Submit";
   alert("Data Submitted. ")
  document.getElementById("form").reset();
 }catch(e){
  console.log(e)
 }
}



  return (
    <>
    <Navbar/>
   
  <Container className='Container-FormBox py-4 px-lg-5 my-3'>
     
 <div id="HeadingLine" className="text-center h3 text-white">Fill Video Series Data</div>
    <Form  method='post'autoComplete='off' onSubmit={submitData} id="form" >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='text-white'>Enter Video_Series Name</Form.Label>
        <Form.Control type="text" placeholder="Video_Series Name"  onChange={(e)=>{setname(e.target.value)}} required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='text-white'>Video_Series's Youtube Url</Form.Label>
        <Form.Control type="url"  placeholder="Enter Youtube Url" onChange={(e)=>{seturl(e.target.value)}} required/>
        
      </Form.Group>
       <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className='text-white'> Upload A Photo </Form.Label>
        <Form.Control type="file" accept='.jpg,.jpeg,.webp,.png' onChange={(e)=>{setfile(e.target.files[0])}} required/>
       
      </Form.Group>
      <Button variant="primary"    type="submit">Submit</Button>
    </Form>
  </Container>
  <Footer/>
    </>
  )
}

export default VideoSeries