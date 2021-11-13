import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {


    return (
        <div className=" footer-container text-center">
            <footer>



                <Row xs={2} md={2} xl={2} className="g-0">
                    <Col className="">

                        <h3 className="">Phone Support</h3>

                        <h5><i className="fas fa-phone"></i> 0126183662</h5>
                        <h5>24 Hour A Day</h5>

                        <h3 className="">Connect Us With</h3>
                        <address>
                            <h5><i className="far fa-envelope"></i> <a className="link" href="http://google.com"> Shoriful@gmail.com</a> </h5>

                            <h3>Social Media</h3>
                            <h5><i className="fab fa-facebook-square me-2"></i><i className="fab fa-instagram-square me-2"></i> <i className="fab fa-twitter-square"></i></h5>

                            <h5><i className="fas fa-map-marker-alt mt-2"></i> Sherpur Road, Nabiganj, Habiganj</h5>
                        </address>
                    </Col>

                    <Col className="">
                        <h3>UseFul links</h3>

                        <NavLink className="link mb-5" to="/home"> Home </NavLink><br />
                        <NavLink className="link mb-5" to="/AllProducts"> More Bikes </NavLink> <br />
                        <NavLink className="link mb-5" to="/dashboard"> Dashboard </NavLink> <br />
                        <NavLink className="link mb-5" to="/allProducts"> More Cycles </NavLink> <br />
                        <NavLink className="link mb-5" to="/login">Login</NavLink><br />

                    </Col>

                </Row>




                <p>© 2021  All Rights Reserved  Terms of Use  and  Privacy Policy</p>



            </footer>
        </div >
    );
};

export default Footer;