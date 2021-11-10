import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products]);

    return (
        <div className="container">

            <div className="text-center my-5">
                <h3> Our Featured Bicycles</h3>
                <p>
                    These are our featured bikes. <br />
                    They are very good in quality
                </p>
            </div>

            <Row xs={1} md={2} xl={3} className="g-4">
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}
                    >

                    </Product>)
                }

            </Row>


        </div>
    );
};

export default Products;