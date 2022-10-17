import React, {useEffect} from "react";
import {useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {db} from '../../firebase'
import '../Login/Login.module.css'
function Home(props) {
  const [values , setValues ] = useState({});
  const Submit = ()=>{
   db.collections('user')
  }
  

  return (
   <div >
      <div >
        <h1 >Login</h1>

        <input
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <input
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

       
       <button onClick={Submit}>Submit</button>
      </div>
    </div>
  );
}

export default Home;
