import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../../../Style/Style.css';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/reviews')
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data);
                
            })
    }, [])

    return (
        <section className="text-center" style={{marginTop: '100px'}}>
            <h3 style={{fontWeight: '700',color: '#111430'}}>Clients <span style={{ color: '#7AB259' }}>feedback</span></h3>
            <Container>
                <Row className="d-flex justify-content-between">
                    {
                        feedbacks.map(feedback => <FeedbackCard feedback={feedback}></FeedbackCard>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Feedback;