import React from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const products = [
        {
            productName: "Rex 555",
            description: "This bike is very light,this make if made for racing, it has strong body and has gear.if you ride this cycle you will feel like flying",
            img: "https://m.media-amazon.com/images/I/41BLCKbHhXL._SX425_.jpg",
            price: 340,

        },
        {
            productName: "Electro Sk",
            description: "Electric Bicycles have electric motors, usually inside the hub of either the front or rear wheel.It has front and back lights and a bell. ",
            img: "https://media.istockphoto.com/photos/electric-bicycle-isolated-on-white-picture-id1298430084?b=1&k=20&m=1298430084&s=170667a&w=0&h=uZvKJ80c9m0hsuJoozTdSksyjlLVGprNowXougse-bc=",
            price: 400,

        },
        {
            productName: "Flyer 10",
            description: "The difference between a woman's bicycle and other bicycles is the location of the top tube. When women began to ride bikes, they wore long skirts.",
            img: "https://media.istockphoto.com/photos/yellow-black-racing-sport-road-bike-bicycle-racer-isolated-picture-id1070233662?k=20&m=1070233662&s=612x612&w=0&h=s4dHq7IR98vIwVwRWYCiMNot8UpD0ndBXN1W2mjSNeI=",
            price: 200,

        },
        {
            productName: "HoT 1020",
            description: " optimized for the rough-and-tumble of urban commuting. The city bike differs from the familiar European city bike in its mountain bike heritage",
            img: "https://polebicycles.com/wp-content/uploads/2021/04/Pole-EVOLINK-1point4-DS-big-1-2-scaled.jpg",
            price: 310,

        },
        {
            productName: "HoT 1000",
            description: " It has front and back lights and a bell, and carriers for small cargoes. It has mudguards to keep water and mud from spraying the rider. ",
            img: "https://polebicycles.com/wp-content/uploads/2021/05/Stamina-160-Remastered-Stock-Custom-Clearcoat-DS_menu-960x640.jpg",
            price: 270,

        },
        {
            productName: "DxT Runner",
            description: "A racing bicycle, also known as a road bike, and once popularly known as a ten speed, is a bicycle designed for competitive",
            img: "https://www.sefiles.net/merchant/91/images/site/raleigh_rx_13_z-slimC.jpg?t=1517345246716",
            price: 350,

        },
        {
            productName: "Bisto Mark 3",
            description: "A road bicycle usually has narrow wheels, less than 1 (25 mm) wide, with a frame that is much lighter than a mountain bicycle.",
            img: "https://m.media-amazon.com/images/I/81wGn2TQJeL._SX425_.jpg",
            price: 210,

        },
        {
            productName: "TxT 111",
            description: "wide tires, and strong wheels. The tire is specially designed to ride smoothly on hills, grass, and mountains.",
            img: "https://www.collinsdictionary.com/images/full/bicycle_154285904.jpg",
            price: 290,

        },
        {
            productName: "Biox 10",
            description: "The mountain bicycle is used for riding on rough roads. They have many speeds (usually more than 20),",
            img: "https://www.sefiles.net/images/library/zoom/brooklyn-bicycle-co.-willow-3-speed-202521-17.jpg",
            price: 300,

        },
        {
            productName: "RTZ 3000",
            description: "The cyclist's feet push the pedals to make them go around in circles, which moves the chain, which turns the back wheel of the bike to make the bike move forwards. ",
            img: "https://images.financialexpress.com/2021/06/world-bicycle-day-2021-hero-lectro-c5.jpg",
            price: 220,

        },
        {
            productName: "Tx 100",
            description: "The city bicycle is made for errands and commuting in cities. It has a comfortable seat but is heavy. It has front and back lights and a bell, and carriers for small cargoes.",
            img: "https://media.istockphoto.com/photos/yellow-black-racing-sport-road-bike-bicycle-racer-isolated-picture-id1070233662?k=20&m=1070233662&s=612x612&w=0&h=s4dHq7IR98vIwVwRWYCiMNot8UpD0ndBXN1W2mjSNeI=",
            price: 200,

        },
    ]
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
                        key={product.productName}
                        product={product}
                    >

                    </Product>)
                }

            </Row>


        </div>
    );
};

export default Products;