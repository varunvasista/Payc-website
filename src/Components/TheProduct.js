import React from 'react';
import LandingStyle from "../Views/LandingPage/landingPage.module.css"
import { BsPlayCircleFill } from 'react-icons/bs';

export default function TheProduct() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className={LandingStyle.the_product}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={LandingStyle.left_product}>
                                    <h6>The Product</h6>
                                    <p>You can store multiple cryptocurrencies on our mobile app, which is a breeze to use. All of your funds are protected by state-of-the-art security technologies, so you can make a transaction in seconds without any worries.</p>
                                    <p className='pt-4'>And if you want to swap one cryptocurrency for another? <br /><span>Well, that's instant too!</span></p>
                                    <a href='https://youtu.be/e4-NI2oT1Dg'>
                                        <div className={LandingStyle.how_works}>
                                            <BsPlayCircleFill className={LandingStyle.play} />
                                            <p>See How It Works</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={LandingStyle.right_product}>
                                    <div className={` ${LandingStyle.card} mb-4`}>
                                        <img src='/images/brain.png' alt='brain' />
                                        <h6>Al - Based<br />Infrastrcuture</h6>
                                        <p>Our platform provides user friendly which is integrated with machine learning and Al-based  algorithms to make payments simple and easy with a single QR code to receive any cryptocurrency without any hassle.</p>
                                    </div>
                                    <div className={` ${LandingStyle.card} mb-4`}>
                                        <img src='/images/multiple.png' alt='multiple' />
                                        <h6>Multiple Services At <br />One Place</h6>
                                        <p>We have plenty of other services, including utility bill payments, mobile top-ups, flights, bus tickets, hotel bookings, Metro payment services, merchant services and more.</p>
                                    </div>
                                    <div className={` ${LandingStyle.card} mb-4`}>
                                        <img src='/images/rule.png' alt='rule' />
                                        <h6>One card to rule<br />them all</h6>
                                        <p>Our unique model means that we can do much more than just help you process a crypto payment quickly and easily. We also allow you to spend that crypto through our PayC Debit Card powered by VISA so you can use it instantly.</p>
                                    </div>
                                    <div className={LandingStyle.card}>
                                        <img src='/images/merchant.png' alt='merchant' />
                                        <h6>Complete Merchant<br />Services</h6>
                                        <p>And as a merchant? You can receive cryptocurrency instantly without even waiting for the transaction to be mined. You can use the currency like any other user would—or convert it into fiat currency and spend it at merchants that support our platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
