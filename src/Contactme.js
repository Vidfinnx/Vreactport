import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import night3 from './images/night3.jpg'
import Image from 'react-bootstrap/Image'

function Contactme() {

    
    return (
        <div>
            <Container className="myphoto" fluid="md">
            <Col style={{fontFamily: 'Digital', fontSize: '30px', fontColor: 'cornflowerblue'}}>Contact Me</Col>
            <Image src={night3} fluid />
                    <Col style={{fontFamily: 'Digital', color: 'limegreen', fontSize:'30px'}}>Phone: 707-372-6858</Col>
<Col style={{fontFamily: 'Digital', color: 'red', fontSize:'30px'}}>Email: <a href="mailto:Vidfinnx@yahoo.com">Vidfinnx@yahoo.com</a></Col>   
            </Container>

        </div>
    )
}

export default Contactme
