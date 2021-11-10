import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/Banner.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'



const Banner = () => {


    return (


        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="banner-info">
                        <h1>Welcome To BuzzX BiCycles</h1>
                        <h3>if you are looking for fine and exclusive bikes, You came to right place</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="banner-info">
                        <h1>Welcome To BuzzX BiCycles</h1>
                        <h3>if you are looking for fine and exclusive bikes, You came to right place</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="banner-info">
                        <h1>Welcome To BuzzX BiCycles</h1>
                        <h3>if you are looking for fine and exclusive bikes, You came to right place</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>

    );
};

export default Banner;