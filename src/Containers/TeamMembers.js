import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import {Container,Form,Button} from 'react-bootstrap'
function TeamMembers() {
  return (
    <>
<Navbar/>
    <div>TeamMembers</div>
   <Container>
    <Form method='post' >
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Enter Event Name</Form.Label>
        <Form.Control type="text" placeholder="Event Name"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Event Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
       <Form.Group controlId="formFile" className="mb-3">
        <Form.Label> Upload A Event Poster </Form.Label>
        <Form.Control type="file"/>
       
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </Container>
    </>
  )
}

export default TeamMembers