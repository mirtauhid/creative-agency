import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import '../../../Style/Style.css';

const ServiceCard = (props) => {
    console.log(props);
    const { title, description, _id } = props.data;
    const { img } = props.data.image;
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/login/${id}`);
    }


    return (
        <div id="services" onClick={() => handleClick(_id)} className="services-container text-center pt-5">
            <Col md={4}>
                <div className="box">
                    <img src={`data:image/png;base64,${img}`} alt="" />
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div >
            </Col>
        </div>
    );
};

export default ServiceCard;