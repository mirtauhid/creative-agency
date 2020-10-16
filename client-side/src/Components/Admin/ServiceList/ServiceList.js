import React, { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';

const ServiceList = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(res => res.json())
            .then(data => {
                setLists(data);
            })
    }, [])

    return (
        <div style={{ padding: '0px 10px 10px 20px' }}>
            <Row className="t-head d-flex justify-content-around" style={{ lineHeight: '40px', background: '#FFFFFF', borderRadius: '5px', fontWeight: '700', marginBottom: '5px'}}>
                <small style={{ fontWeight: '700' }}>Name</small>
                <small style={{ fontWeight: '700' }}>Email ID</small>
                <small style={{ fontWeight: '700' }}>Service</small>
                <small style={{ fontWeight: '700' }}>Project Details</small>
            </Row>
            {
                lists.map(list =>
                    <Row className="t-head d-flex justify-content-around" style={{ lineHeight: '40px', background: '#FFFFFF', borderRadius: '5px', fontWeight: '700' }}>
                        <small>{list.name}</small>
                        <small>{list.email}</small>
                        <small>{list.title}</small>
                        <small>{list.details}</small>
                    </Row>
                )
            }
        </div>
    );
};

export default ServiceList;