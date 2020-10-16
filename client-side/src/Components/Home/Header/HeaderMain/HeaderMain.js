import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import HeaderMainImg from '../../../../images/logos/Frame.png'
import '../../../Style/Style.css';

const HeaderMain = () => {
    return (
        <Container className="HeaderMain mt-5">
            <Row>
                <Col md={5} className="align-self-center">
                    <h1 style={{ fontWeight: '700' }}>Let’s Grow Your <br />
                    Brand To The <br />
                    Next Level
                    </h1>
                    <p className="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur <br />
                     adipiscing elit. Purus commodo ipsum duis <br />
                     laoreet maecenas. Feugiat </p>
                    <Button href="#services" className="blackButton" variant="dark">Hire Us</Button>
                </Col>
                <Col md={7}>
                    <img className="headerImage ml-n4" src={HeaderMainImg} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderMain;