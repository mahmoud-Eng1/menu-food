
import React from 'react'
import {Card, Col} from "react-bootstrap";
const CardsMenu = ({dataItems}) => {
  return (
    dataItems.length >= 1 ? dataItems.map((item)=> {
        return (
          <Col>
      <Card  className='parent d-flex flex-row mb-2'>
        <Card.Img className='imag' src={item.image} />
        <Card.Body kay={item.id}>
          <Card.Title className='d-flex justify-content-between'>
            <p>{item.title}</p>
            <h6>{item.price}جنيه</h6>
          </Card.Title>
          <Card.Text >
            {item.discription}
            
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        )
    }) : "لا يوجد لدينا اصناف"
      
    
  )
}

export default CardsMenu