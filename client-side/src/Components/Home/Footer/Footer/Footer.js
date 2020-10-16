import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../../../Style/Style.css';

const Footer = () => {
    return (
        <section className="footer-section">
            <Container className="pt-5">
                <Row>
                    <Col md={5} style={{ padding: '40px' }}>
                        <h2>Let us handle your <br /> project, professionally.</h2>
                        <br />
                        <p>With well written codes, we build amazing apps <br /> for all platforms, mobile and web apps in general.</p>
                    </Col>
                    <Col md={7} style={{ padding: '50px' }}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Your email address" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Your name / company’s name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="7" placeholder="Your message" />
                            </Form.Group>
                            <Form.Group>
                                <Button className="blackButton" type="submit" variant="dark">Send</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <h6 className="text-center"><small>copyright Orange labs 2020</small></h6>
            </Container>
        </section>
    );
};

export default Footer;