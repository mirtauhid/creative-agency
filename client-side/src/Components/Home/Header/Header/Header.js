import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import '../../../Style/Style.css';

const Header = () => {
    return (
        <section className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </section>
    );
};

export default Header;