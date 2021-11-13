import React from 'react';

import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import TopSelling from '../TopSelling/TopSelling';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar'

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Products></Products>
            <TopSelling></TopSelling>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;