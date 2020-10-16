import React from 'react';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Logo from '../../../../images/logos/logo.png';
import '../../../Style/Style.css';

const Navbar = () => {
let history = useHistory();

    return (
        <Container className="navbar-section pt-3">
            <Row>
                <Col md={5}>
                    <img className="logo" src={Logo} alt="" />
                </Col>
                <Col md={7} >
                    <Nav className="justify-content-end nav">
                        <Nav.Item >
                            <Nav.Link>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Our Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Our Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Contact Us</Nav.Link>
                        </Nav.Item>
                        <Button onClick={()=>{history.push("/login")}} className="blackButton ml-3" variant="dark" to="/login" >Login</Button>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
};

export default Navbar;