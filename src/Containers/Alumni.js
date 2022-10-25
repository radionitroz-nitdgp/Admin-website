import {addDoc} from 'firebase/firestore'
import React from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import Navbar from '../components/Navbar/Navbar'
import {setDoc ,doc, onSnapshot, getDoc, updateDoc, arrayUnion} from 'firebase/firestore'
import {db} from '../firebase'
import {useState} from 'react'

import './Container.css'
function Alumni() {
   const [name,setname] = useState("")
const [Year,setYear] = useState("")

const AlumniData = {
  Name : [5 , 20,  "jss"]
}
const submitData = async(e)=>{
  e.preventDefault();
 try{
  const docref = doc(db,'Main','Alumni')
  await setDoc(docref,AlumniData)
  // await updateDoc(docref,{ Year : arrayUnion(AlumniData)})
 alert("Data Submitted. ")
  document.getElementById("form").reset();
 }catch(e){
  console.log(e)
 }
}


  return (
    <>
  <Navbar/>
  <div className='text-white test-center'>still in testing !!!!!!</div>
    <Container className='Container-FormBox py-4 px-lg-5 my-3'>
<div id="HeadingLine" className="text-center h3 text-white">Fill Sponser Data</div>
    <Form  method='post'autoComplete='off' id="form" >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='text-white'>Enter Alumni Year</Form.Label>
        <Form.Control type="text" placeholder="eg: 2022-2023"  onChange={(e)=>{setYear(e.target.value)}} required/>
        
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label className='text-white'>Enter Alumni Name Name</Form.Label>
        <Form.Control type="text" placeholder="Alumni Name"  onChange={(e)=>{setname(e.target.value)}} required/>
        
      </Form.Group>
      <div className="form-group mb-3">
      <p className="form-label">Ebterfd</p>
      <input type="text" name="" className='form-control' id="" />
      </div>
      
      <Button variant="primary"  onClick={submitData} id="submit" type="submit">Submit</Button>
    </Form>
    </Container>
    </>
  )
}

export default Alumni