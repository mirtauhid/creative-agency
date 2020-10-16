import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../../Carousel/Carousel';
import '../../../Style/Style.css';

const OurWorks = () => {
    return (
        <Container className="our-works-container" fluid>
            <h3>Here are some of <span style={{ color: '#7AB259',fontWeight: '700' }}>our works</span></h3>
            <br />
            <Carousel></Carousel>
        </Container>
    );
};

export default OurWorks;