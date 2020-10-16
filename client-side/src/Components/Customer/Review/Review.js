import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const Review = () => {
    const [reviews, setReviews] = useState({});

    const handleInput = (e) => {
        const newReviews = { ...reviews };
        newReviews[e.target.name] = e.target.value;
        setReviews(newReviews);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('name', reviews.name)
        formData.append('company', reviews.company)
        formData.append('review', reviews.review)

        fetch('http://localhost:8000/addAReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    alert("Your review submitted successfully");
                    document.getElementById("name").value = "";
                    document.getElementById("company").value = "";
                    document.getElementById("review").value = "";

                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault();
    }



    return (
        <div>
            <Form style={{ width: '50%', border: 'none' }}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" onChange={(e) => handleInput(e)} name="name" id="name" placeholder="Your name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" onChange={(e) => handleInput(e)} name="company" id="company" placeholder="Company’s name, Designation" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" onChange={(e) => handleInput(e)} name="review" id="review" rows={4} placeholder="Description" />
                </Form.Group>
                <Button className="blackButton" onClick={(e) => handleSubmit(e)} type="submit" variant="primary" >Send</Button>
            </Form>
        </div>
    );
};

export default Review;