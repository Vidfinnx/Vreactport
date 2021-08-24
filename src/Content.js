import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Space from './images/AhoBG.jpg'







const content = (props) => {
  console.log(props.img);
  return (
    <div>
      <Card>
      <Card.Header>{props.title}</Card.Header>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.body}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  )
};
export default content;
