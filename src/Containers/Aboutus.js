import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar/Navbar'
import { Button, Container, Form } from 'react-bootstrap'
import {useState , } from 'react'

import {setDoc ,doc, onSnapshot, getDoc} from 'firebase/firestore'
import {db} from '../firebase'
import './Container.css'


function Aboutus() {
 const [text,setText] = useState("");
//  const [AboutUsData,setData] = useState("");
const submitbtn = document.getElementById("submit")
 const Submit = async(e) =>{
e.preventDefault();
submitbtn.innerHTML = "<i class='fa fa-spinner fa-spin'></i> Submitting";
console.log(text)
try{
  const docref =  await setDoc(doc(db,"Main","About_Us"),{
    Description : text
  });
  submitbtn.innerHTML = "Submitted";
  alert("Data Uploaded Succesfully")
  document.getElementById("form").reset();
  submitbtn.innerHTML = "Submit";
}catch(e){
  console.log(e)
}
}
const getData = async()=>{
  try{
const docref = doc(db,"Main","About_Us")
   const docSnap = await getDoc(docref)
    if(docSnap.exists()){
      console.log("fetched data  : " + docSnap.data().Description)
       document.getElementById("AboutUsContainer").innerHTML = `${ docSnap.data().Description}`;
    }
    else{
      console.log("No Data")
    }
   
   
  }catch(e){
    console.log(e)
  }
   
}

 
  return (
    <>
    <Navbar/>
    <div className="text-center display-6 text-white">Add New Data</div>
    <Container className='Container-FormBox py-4 px-lg-5 my-3'>
     {/* <form action="" method="post" id="form" onSubmit={Submit}>
    <textarea name="" id="input" className='form-control' cols="30" rows="10" onChange={(event) =>{setText(event.target.value)}}></textarea>
    <button type='submit' className='btn btn-primary text-center' >Submit</button>
     </form> */}
     <Form method='post' novalidate validated id="form" onSubmit={Submit}>
     

      <Form.Group className="mb-3 "  controlId="exampleForm.ControlTextarea1">
        <Form.Label className=' text-center text-white fs-5' >Enter the About Section</Form.Label>
        <Form.Control  id="input" as="textarea" placeholder='Enter Here'  onChange={(e) =>{setText(e.target.value)}} rows={5} required />
      </Form.Group>
    
      <Button variant="primary"  className='text-center py-2' type="submit" id="submit">
        Submit
      </Button>
    </Form>
   
    </Container>
    {/* <Container className='Container-FormBox py-4 px-lg-5 my-3'>
    <div className="text-center display-6 text-white">View About-Us </div>
     <Button variant="outline-warning" onClick={getData}  className='text-center py-2'>View Data</Button>
     <Container id="AboutUsContainer text-white h4">Data</Container>
    </Container> */}
    </>
  )
}

export default Aboutus