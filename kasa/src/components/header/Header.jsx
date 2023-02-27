import React from 'react';
import Logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div>Acceuil</div>
            <div>A propos</div>
        </div>
    );
};

export default Header;