import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Service></Service>
            <Features></Features>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;