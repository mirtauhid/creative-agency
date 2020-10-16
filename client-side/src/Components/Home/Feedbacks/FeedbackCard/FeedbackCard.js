import React from 'react';
import { Col } from 'react-bootstrap';
import '../../../Style/Style.css';
import client from '../../../../images/customer-3.png';

const FeedbackCard = (props) => {
    const { name, company, review } = props.feedback;
    return (
        <div id="services" className="feedback-container text-center pt-5">
            <Col md={4}>
                <div className="card">
                    <div className="d-flex pt-3" style={{padding: '10px'}}>
                        <div>
                            <img style={{height: '64px', width: '64px', marginTop: '-5px'}} src={client} alt="" />
                        </div>
                        <div>
                            <h6>{name}</h6>
                            <small>{company}</small>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p>{review}</p>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default FeedbackCard;