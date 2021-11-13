import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './Reviews.css'


const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
        console.log(reviews);
    }, []);


    return (
        <div className="container review-container">
            <div className="text-center my-5">
                <h1>Reviews From Our Clients </h1>

            </div>

            <div className="mb-5">
                <Row xs={1} md={2} xl={3} className="g-4">
                    {
                        reviews.map(review => <div
                            key={review._id}
                        >


                            <Col>
                                <Card className="shadow">

                                    <Card.Body>
                                        <Card.Title><h3>{review.customerName
                                        }</h3></Card.Title>
                                        <Card.Text >
                                            <h5>{review.reviewText}</h5>
                                            <h5 className="mt-2">Rating: {review.rating}</h5>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </Col>



                        </div>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Reviews;