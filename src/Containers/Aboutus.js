import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar/Navbar'
import { Button, Container, Form } from 'react-bootstrap'
import {useState} from 'react'
import {setDoc ,doc, onSnapshot} from 'firebase/firestore'
import {db} from '../firebase'
import './Container.css'


function Aboutus() {
 const [text,setText] = useState("");
 const Submit = async(e) =>{
e.preventDefault();
console.log(text)
try{
 const docref =  await setDoc(doc(db,"Main","About_Us"),{
    Description : text
  });
  console.log( docref.path)
}catch(e){
  console.log(e)
}
}

 
  return (
    <>
    <Navbar/>
    <div className="text-center display-6">Add New Data</div>
    <Container className='Container-FormBox my-3'>
     {/* <form action="" method="post" id="form" onSubmit={Submit}>
    <textarea name="" id="input" className='form-control' cols="30" rows="10" onChange={(event) =>{setText(event.target.value)}}></textarea>
    <button type='submit' className='btn btn-primary text-center' >Submit</button>
     </form> */}
     <Form method='post' id="form" onSubmit={Submit}>
     

      <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
        <Form.Label >Enter the About Section</Form.Label>
        <Form.Control id="input" as="textarea"  onChange={(e) =>{setText(e.target.value)}} rows={5} />
      </Form.Group>
    
      <Button variant="outline-primary" type="submit">
        Submit
      </Button>
    </Form>
   
    </Container>
    </>
  )
}

export default Aboutus