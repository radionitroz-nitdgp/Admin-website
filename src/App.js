import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Login from './components/Login/Login'

import { auth } from './firebase'
import {   useNavigate } from "react-router-dom";

import './App.css'
import Home from './components/Home/Home'

function App() {
 

  return (
    <div className="App">
      <Routes>
        {console.log(auth.currentUser)}
       
          <Route path="/" element={<Login />} />
        
          <Route path="/home"  element={<Home />} />
        
      </Routes>
    </div>
  )
}

export default App
