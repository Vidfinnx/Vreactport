import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'








const content = (props) => {
  return (
    <div>
      <Card>
      <Card.Header>{props.title}</Card.Header>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Text>
      {props.body}
    </Card.Text>
    <Button href={props.url} variant="primary">Go To Project</Button>
    <Button href={props.repo} variant="danger">Go To Repo</Button>
  </Card.Body>
</Card>
    </div>
  )
};
export default content;
