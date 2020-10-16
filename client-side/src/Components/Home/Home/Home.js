import React from 'react';
import Feedback from '../Feedbacks/Feedback/Feedback';
import Clients from '../Clients/Clients';
import Header from '../Header/Header/Header';
import OurWorks from '../OurWorks/OurWorks/OurWorks';
import Services from '../Services/Services/Services';
import Footer from '../Footer/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Clients></Clients>
            <Services></Services>
            <OurWorks></OurWorks>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;