import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './MangeAllOrder.css';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    return (
        <div className="orders-container">
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
                    allOrders.map(allOrder => <tbody key={allOrder._id}>
                        <tr>

                            <td>{allOrder.data.customerName}</td>
                            <td>{allOrder.productName}</td>
                            <td>{allOrder.price}</td>
                            <td>{allOrder.status}</td>

                        </tr>
                    </tbody>)
                }

            </Table>
        </div>
    );
};

export default ManageAllOrder;