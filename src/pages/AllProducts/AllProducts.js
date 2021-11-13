import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('https://rocky-island-88656.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))

    }, []);
    console.log(allProducts);
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="container">
                <div className="text-center my-5">
                    <h1>Here You Can See All The Available Products We Have</h1>
                    <h3>chose a product you like</h3>
                </div>

                <div className="mb-5">
                    <Row xs={1} md={2} xl={3} className="g-4">
                        {
                            allProducts.map(products => <div
                                key={products.productName}
                            >


                                <Col>
                                    <Card className="shadow">
                                        <Card.Img className="product-img" variant="top" src={products.img} />
                                        <Card.Body>
                                            <Card.Title>{products.productName}</Card.Title>
                                            <Card.Text >
                                                {products.description.slice(0, 120)}
                                                <h3 className="mt-2">Price: {products.price}$</h3>
                                            </Card.Text>
                                            <NavLink to={`/placedOrder/${products._id}`} > <Button variant="success">Place Booking</Button> </NavLink>
                                        </Card.Body>
                                    </Card>

                                </Col>



                            </div>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;