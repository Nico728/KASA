import React from 'react';
import Banner from '../../components/banner/Banner';
import bannerHome from '../../images/banniere.png';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner image={bannerHome} texte="Chez vous, partout et ailleurs" />
            <Footer />
        </div>
    );
};

export default Home;