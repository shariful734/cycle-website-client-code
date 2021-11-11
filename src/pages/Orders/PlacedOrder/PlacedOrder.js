import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const PlacedOrder = () => {
    const { orderId } = useParams();

    const [product, setProduct] = useState({});

    // const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:8000/Products/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    return (
        <div className="my-5">
            <Row xs={2} md={2} xl={2} className="g-4">

                <div className="add-product text-center  my-5">

                    <h1 className="my-4">Place Your Order  </h1>
                    {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input value={user.displayName} {...register("customerName")} />
        <input value={user.email} {...register("email",)} />
        <input placeholder="countryName" {...register("countryName",)} />
        <input placeholder="PhoneNo"  {...register("phoneNo:", { required: true, maxLength: 20 })} />
        <textarea  {...register("Address",)} placeholder="address" />


        <button className="bg-success" type="submit" >  Book Now</button>
    </form> */}

                </div>
                <div>
                    <Col>
                        <Card className="shadow">
                            <Card.Img className="product-img" variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                                <Card.Text >
                                    {product.description}
                                    <h3 className="mt-2">Price: {product.price}$</h3>
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </Col>
                </div>
            </Row>

        </div>
    );
};

export default PlacedOrder;