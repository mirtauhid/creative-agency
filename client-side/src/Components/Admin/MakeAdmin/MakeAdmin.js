import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const MakeAdmin = () => {
    const [admin, setAdmin] = useState({
        email: ''
    });

    const handleValidity = (e) => {
        if (/\S+@\S+\.\S+/.test(e.target.value)) {
            const newValue = {
                email: e.target.value
            }
            setAdmin(newValue);
        }
        e.preventDefault();
    }
    const handleSubmit = (e) => {
        e.persist();
        const email = admin.email;
        fetch('http://localhost:8000/admin?email=' + email)
            .then(res => res.json())
            .then(data => {
                if (data.length === 0) {
                    handleAddAdmin(e)
                } if (data.length > 0) {
                    const newValue = {
                        email: ''
                    }
                    setAdmin(newValue);
                    alert('Email already exists')
                    document.getElementById("inlineFormInputName2").value = "";
                }
            })
        e.preventDefault();
    }


    const handleAddAdmin = (e) => {
        e.preventDefault();
        if (admin.email != null && admin.email != "") {
            const newAdmin = { ...admin };
            fetch('http://localhost:8000/admin', {
                method: 'POST',
                headers: { 'Content-Type': ' application/json' },
                body: JSON.stringify(newAdmin)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedCount > 0) {
                        alert("Submitted successfully")
                    } if (data.insertedCount == 0) {
                        alert("Failed to insert");
                    }
                })

            const dataUpdate = {
                email: ""
            }
            setAdmin(dataUpdate);
            document.getElementById("inlineFormInputName2").value = "";
        } else {
            alert('Please enter a valid email address')
            document.getElementById("inlineFormInputName2").value = "";
        }
    }



    return (
        <div style={{ padding: '30px', width: '100%', height: '300px', background: '#FFFFFF', borderRadius: '10px' }}>
            <Form.Label htmlFor="inlineFormInputName2" >Email</Form.Label>
            <Form className="d-flex">
                <Form.Control
                    className="mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="jon@gmail.com"
                    style={{ width: '50%' }}
                    onChange={handleValidity}
                    required
                />
                <Button onClick={(e) => handleSubmit(e)} variant="success" type="button" className="mb-2">Submit</Button>
            </Form>
        </div>
    );
};

export default MakeAdmin;