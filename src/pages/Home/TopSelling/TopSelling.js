import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import bike1 from '../../../images/bike1.jpg';
import bike2 from '../../../images/bike2.jpg';
import bike3 from '../../../images/bike3.jpg';

const TopSelling = () => {
    return (
        <div className="container my-5">
            <h2 className="text-primary">Top Selling Bikes</h2>
            <br />
            <Row xs={1} md={2} lg={3} className="g-4">

                <Col>
                    <Card className="shadow">
                        <Card.Img className="product-img" variant="top" src={bike1} />

                        <Card.Body>
                            <Card.Title className="fs-2"><h1>Rex 555</h1></Card.Title>
                            <Card.Text>
                                <p>This bike is very light,this make if made for racing, it has strong body and has gear.if you ride this cycle you will feel like flying</p>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

                <Col>
                    <Card className="shadow">
                        <Card.Img className="product-img" variant="top" src={bike2} />

                        <Card.Body>
                            <Card.Title className="fs-2"><h1>Bisto Mark 3</h1></Card.Title>
                            <Card.Text>
                                <p>A road bicycle usually has narrow wheels, less than 1 (25 mm) wide, with a frame that is much lighter than a mountain bicycle.</p>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col>
                    <Card className="shadow">
                        <Card.Img className="product-img" variant="top" src={bike3} />

                        <Card.Body>
                            <Card.Title className="fs-2"><h1>RTZ 3000</h1></Card.Title>
                            <Card.Text>
                                <p>The cyclist's feet push the pedals to make them go around in circles, which moves the chain, which turns the back wheel.</p>
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default TopSelling;