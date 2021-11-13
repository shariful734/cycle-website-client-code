import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';

const PlacedOrder = () => {
    const { orderId } = useParams();
    const { user } = useAuth();

    const [product, setProduct] = useState({});
    const initialInfo = {
        customerName: user.displayName, email: user.email, productName: product.productName,
        price: product.price,
    }

    const [orders, setOrders] = useState({ initialInfo });



    useEffect(() => {
        fetch(`http://localhost:8000/Products/${orderId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const orderDetail = {
            productName: product.productName,
            price: product.price,
            status: "pending",
            data,
        }
        setOrders(orderDetail);
        console.log(orderDetail);

        axios.post('http://localhost:8000/orders', orderDetail)
            .then(res => {
                if (res.data.insertedId) {
                    alert('order placed successfully');
                    reset();
                }
            })


        reset();
    }



    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="my-5">
                <Row xs={2} md={2} xl={2} className="g-4">

                    <div className="add-product text-center  my-5">

                        <h1 className="my-4">Place Your Order  </h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input value={user.displayName} {...register("customerName")} />
                            <input value={user.email} {...register("email",)} />

                            <input placeholder="PhoneNo"  {...register("phoneNo:", { maxLength: 20 })} />
                            <textarea  {...register("Address",)} placeholder="address" />


                            <button className="bg-success" type="submit" >Order Now</button>
                        </form>

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
        </div>
    );
};

export default PlacedOrder;