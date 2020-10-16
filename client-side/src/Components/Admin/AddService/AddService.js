import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../../Style/Style.css';

const AddService = () => {
    const [services, setServices] = useState({});
    const [files, setFiles] = useState(null);

    const handleInput = (e) => {
        const newServices = { ...services };
        newServices[e.target.name] = e.target.value;
        setServices(newServices);
    }

    const handleFileInput = e => {
        const newFile = e.target.files[0];
        setFiles(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', files)
        formData.append('title', services.title)
        formData.append('description', services.description)

        fetch('http://localhost:8000/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert("New service added successfully");
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }

    return (
        <div>
            <Form style={{ paddingLeft: '20px' }}>
                <Row style={{ padding: '20px', width: '100%', height: '300px', background: '#FFFFFF', borderRadius: '10px' }}>
                    <Col md={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label style={{ fontWeight: '700' }}>Service Title</Form.Label>
                            <Form.Control onChange={(e) => handleInput(e)} name="title" type="text" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ fontWeight: '700' }}>Description</Form.Label>
                            <Form.Control onChange={(e) => handleInput(e)} name="description" as="textarea" placeholder="Enter description" rows={5} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.File style={{ fontWeight: '700' }} name="file" onChange={(e) => handleFileInput(e)} label="Icon" />
                        </Form.Group>
                        
                    </Col>
                </Row>
                <Button onClick={(e) => handleSubmit(e)} style={{ float: "right", margin: '20px', height: '40px', width: '100px' }} type="submit" variant="success">Submit</Button>
            </Form>
        </div>
    );
};

export default AddService;