import React, { useEffect, useState } from 'react';
import './Order.css'
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://rocky-island-88656.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);
    return (
        <div className="orders-container">

            <h1>Orders : {orders.length} </h1>

            <h3>{user.displayName}</h3>

            <Table striped bordered hover className="p-0">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Status</th>

                    </tr>
                </thead>
                {
                    orders.map(order => <tbody key={order._id}>
                        <tr>

                            <td>{order.data.customerName}</td>
                            <td>{order.productName}</td>
                            <td>{order.price}</td>
                            <td>{order.Status}</td>

                        </tr>
                    </tbody>)
                }

            </Table>

        </div >
    );
};

export default Orders;