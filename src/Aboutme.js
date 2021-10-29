import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row'
import AhoBG from './images/AhoBG.jpg'
import Image from 'react-bootstrap/Image'

function Aboutme() {
    return (
        <div>
            <Container className="myphoto" fluid="md">
            <Col style={{fontFamily: 'Digital', fontSize: '30px', fontColor: 'cornflowerblue'}}>About Me</Col>
            <Image src={AhoBG} fluid />
                {/* <Row> */}
                    <Col style={{fontFamily: 'Digital'}}>My name is Veikko Aho,  translated it means brother in the Finnish Language. I am a new Web Developer looking to further my experience and education in any up and coming company or business.</Col>
<Col style={{fontFamily: 'Digital', color:'red'}}>I am a United States Air Force Veteran, and I have spent the past 14 years as a Paramedic and Volunteer Firefighter. My time in the as a Paramedic and in the Military has given me a drive for excellence a unique ability to adapt to any situation wrapped in compassion and the desire to help wherever possible. </Col>
<Col style={{fontFamily: 'Digital', color:'limegreen'}}>Please feel free to contact me, you can find my information above in the drop down menu under Contact-Me. </Col>
                {/* </Row> */}
            </Container>

        </div>
    )
}

export default Aboutme
