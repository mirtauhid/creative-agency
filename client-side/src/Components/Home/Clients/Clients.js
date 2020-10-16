import React from 'react';
import SlackImg from '../../../images/logos/slack.png';
import GoogleImg from '../../../images/logos/google.png';
import UberImg from '../../../images/logos/uber.png';
import NetflixImg from '../../../images/logos/netflix.png';
import AirbnbImg from '../../../images/logos/airbnb.png';
import { Container } from 'react-bootstrap';
import '../../Style/Style.css';


const Clients = () => {
    return (
        <section>
            <Container className="clients-container d-flex justify-content-around mt-5 pt-5">
                <img style={{height: '36px', width: '140px'}} src={SlackImg} alt="" />
                <img style={{height: '44px', width: '129px'}} src={GoogleImg} alt="" />
                <img style={{height: '56px', width: '99px'}} src={UberImg} alt="" />
                <img style={{height: '67px', width: '120px'}} src={NetflixImg} alt="" />
                <img style={{height: '51px', width: '161px'}} src={AirbnbImg} alt="" />
            </Container>
        </section>
    );
};

export default Clients;