import React from 'react';
import LogoFooter from '../../images/footer.png';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <img className='footer_img' src={LogoFooter} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;