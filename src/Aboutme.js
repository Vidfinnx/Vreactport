import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row'
import AhoBG from './images/AhoBG.jpg'
import Image from 'react-bootstrap/Image'

function Aboutme() {
    return (
        <div>
            <Container  fluid="md">
            <Col style={{fontFamily: 'Digital', fontSize: '35px', fontColor: 'cornflowerblue'}}>About Me</Col>
            <Image src={AhoBG} fluid />
                <Row>
                    <Col style={{fontFamily: 'Digital',fontSize:'25px'}}>My name is Veikko Aho, that means brother in the Finnish Language.
I am a new Web Developer looking to further my experience and education
in any up and coming company or business</Col>
                </Row>
            </Container>

        </div>
    )
}

export default Aboutme
