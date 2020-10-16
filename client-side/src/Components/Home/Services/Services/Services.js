import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/services')
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])


    return (
        <section className="text-center" style={{marginTop: '100px'}}>
            <h3 style={{fontWeight: '700'}}>Provide awesome <span style={{ color: '#7AB259' }}>services</span></h3>
            <Container>
                <Row className="d-flex justify-content-between">
                    {
                        service.map(data => <ServiceCard data={data}></ServiceCard>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;