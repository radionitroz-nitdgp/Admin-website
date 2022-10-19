import React, {  } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import Login from './components/Login/Login'

import { auth } from './firebase'

import './App.css'
import Aboutus from './Containers/Aboutus'
import Alumni from './Containers/Alumni'
import Events from './Containers/Events'
import Gallery from './Containers/Gallery'
import Sponsers from './Containers/Sponsers'
import TeamMembers from './Containers/TeamMembers'
import VideoSeries from './Containers/VideoSeries'
 import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
 

  return (
    <div className="App">
      <Routes>
        {console.log(auth.currentUser)}
       
          <Route path="/" element={<Login />} />
        
          <Route path="/home"  element={<PrivateRoute><Home/></PrivateRoute>} />
          <Route path="/Aboutus"  element={<PrivateRoute><Aboutus /></PrivateRoute>} />
          <Route path="/Events"  element={<PrivateRoute><Events /></PrivateRoute>} />
          <Route path="/Alumni"  element={<PrivateRoute><Alumni /></PrivateRoute>} />
          <Route path="/Gallery"  element={<PrivateRoute><Gallery /></PrivateRoute>} />
          <Route path="/Sponsers"  element={<PrivateRoute><Sponsers /></PrivateRoute>} />
          <Route path="/TeamMembers"  element={<PrivateRoute><TeamMembers /></PrivateRoute>} />
          <Route path="/VideoSeries"  element={<PrivateRoute><VideoSeries /></PrivateRoute>} />
        
      </Routes>
    </div>
  )
}

export default App
