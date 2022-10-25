import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { isUser } from "../PrivateRoute/PrivateRoute";
import InputControl from "./InputControl/InputControl";
import { auth } from "../../firebase";
import {Container,Form,Button} from 'react-bootstrap'

import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [user,setUser] = useState([])
  useEffect(()=>{
  localStorage.setItem("isUser",JSON.stringify(false))
},[user])
  
const LoginBtn = document.getElementById("LoginBtn")

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
   console.log("gsgxs")
   LoginBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Logging'
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        console.log("login")
    console.log(window.isUser)
    window.isUser = true
    localStorage.setItem('isUser',JSON.stringify(true))
         navigate("/home");
         console.log("Logged in")
         LoginBtn.innerHTML = 'Login'
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Enter Email ID</Form.Label>
        <Form.Control type="email" placeholder="Email ID"  onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } required/>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label >Enter Password</Form.Label>
        <Form.Control type="password" placeholder="password"  onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } required/>
      </Form.Group>

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission} id="LoginBtn">
            Login 
          </button>
         
        </div>
      </div>
    </div>
  );
}

export default Login;
