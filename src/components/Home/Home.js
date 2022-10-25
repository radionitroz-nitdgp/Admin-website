import React from 'react'
import {Container} from 'react-bootstrap'
import Navbar from '../Navbar/Navbar'
function Home() {
  return (
   <>
    <Navbar/>
    <Container>

    <div className='text-center text-white display-3 mt-5 '>CHOOSE WHAT TO UPDATE</div>
    </Container>
   </>
  )
}

export default Home