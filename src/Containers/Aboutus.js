import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/Navbar/Navbar'
import { Button, Container } from 'react-bootstrap'
import {useState} from 'react'
import {addDoc, collection ,doc, onSnapshot} from 'firebase/firestore'
import {db} from '../firebase'



function Aboutus() {
 const [text,setText] = useState("");
 const Submit = async(e) =>{
e.preventDefault();
console.log(text)
try{
 const docref =  await addDoc(collection(db,"About_Us"),{
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
    <div>Aboutus</div>
    <Container>
     <form action="" method="post" id="form" onSubmit={Submit}>
    <textarea name="" id="input" className='form-control' cols="30" rows="10" onChange={(event) =>{setText(event.target.value)}}></textarea>
    <button type='submit' className='btn btn-primary text-center' >Submit</button>
     </form>
    <div className="getData">
   {/* <Button className='bg-primary m-5' onClick={getData}>Get Data</Button> */}
   <p id="data"></p>
    </div>
    </Container>
    </>
  )
}

export default Aboutus