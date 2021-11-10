import React from 'react';
import './product.css'
import { Card, Col } from 'react-bootstrap';

const Product = ({ product }) => {
    const { productName, description, img, price } = product;
    return (
        <div>
            <Col>
                <Card className="shadow">
                    <Card.Img className="country-img" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{productName}</Card.Title>
                        <Card.Text >
                            {description.slice(0, 120)}
                            <h3 className="mt-2">Price: {price}$</h3>
                        </Card.Text>
                        {/* <NavLink to={`/booking/${_id}`} > <Button variant="success">Place Booking</Button> </NavLink> */}
                    </Card.Body>
                </Card>

            </Col>
        </div>
    );
};

export default Product;