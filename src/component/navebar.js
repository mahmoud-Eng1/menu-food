
import React, {useState} from 'react'
import {Button, Container, Form, Navbar} from "react-bootstrap"

const Navebar = ({filtersearch}) => {
const [valuesearch, setvaluesearch] = useState("")
  const clicksearch = (word)=> {
    filtersearch(valuesearch)
  }
  return (
    <Navbar expand="lg" className="bg-dark">
    <Container>
      <Navbar.Brand href="#" >
      <div className='header'>ماكولاتي</div>
      </Navbar.Brand>
      <div className='content d-flex justify-content-between'>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="بحث"
            className="me-2"
            onChange={(e)=> {
              setvaluesearch(e.target.value)
            }}
            value ={valuesearch}
          />
          <Button onClick ={()=> clicksearch()} className='mx-2'>بحث</Button>
        </Form>
      </Navbar.Collapse>
      </div>
      
    </Container>
  </Navbar>
        
  )
}

export default Navebar