import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import bannerAbout from '../../images/banniereAbout.png';
import Collapse from '../../components/collapse/Collapse';
import aboutData from '../../datas/aboutData/aboutData.json';

const About = () => {
    return (
        <div>
            <Header />
            <Banner image={bannerAbout} titre="" />
            <div>
                {/*aboutData.map((about) => 
                    <Collapse key={about.id} titre={about.title} description={about.description} />
                )*/}
            </div>
            <Footer />
        </div>
    );
};

export default About;