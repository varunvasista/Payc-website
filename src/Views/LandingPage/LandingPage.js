import React from 'react';
// import AboutUs from '../../Components/AboutUs';
import ContactUs from '../../Components/ContactUs';
import Faqs from '../../Components/Faqs';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import Purchase from '../../Components/Purchase';
import RoadMap from '../../Components/RoadMap';
import TheProduct from '../../Components/TheProduct';
import Tokenomics from '../../Components/Tokenomics';

export default function LandingPage() {
    return (
        <div>
            <Hero />
            <TheProduct />
            <Purchase />
            <RoadMap />
            <Tokenomics />
            <Faqs />
            {/* <AboutUs /> */}
            <ContactUs />
            <Footer />
        </div>
    )
}
