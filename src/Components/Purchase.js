import React from 'react';
import LandingStyle from "../Views/LandingPage/landingPage.module.css"

export default function Purchase() {
    return (
        <div className="container-fluid px-0">
            <div className="row mx-0">
                <div className="col-lg-12 px-0">
                    <div className="darkbg">
                        <div className={`${LandingStyle.padding_5} row mx-0 align-items-center justify-content-center`}>
                            <div className="col-lg-6 px-0">
                                <div className={LandingStyle.how_purchase}>
                                    <div className="d-flex align-items-center">
                                        <img src='/images/dots.svg' alt='dots' width={"100px"} />
                                        <h6 className={LandingStyle.purchase_text}>How to purchase the PayC Token</h6>
                                    </div>
                                    <div className={LandingStyle.purchase_listing}>
                                        <div className="d-flex align-items-center mb-4">
                                            <div className={LandingStyle.number}>
                                                1
                                            </div>
                                            <div className={LandingStyle.description}>
                                                <h6>Download Metamask</h6>
                                                <p>Download the official Metamask extension for Google Chrome from metamask.io and follow the steps to create your account</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <div className={LandingStyle.number}>
                                                2
                                            </div>
                                            <div className={LandingStyle.description}>
                                                <h6>Purchase Matic on Exchange</h6>
                                                <p>Buy some Matic on an exchange like Binance, as you will need Matic to purchase the PayC Token</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className={LandingStyle.number}>
                                                3
                                            </div>
                                            <div className={LandingStyle.description}>
                                                <h6>Purchase Matic on Exchange</h6>
                                                <p>You can now use your Matic to purchase your PayC token</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center px-0">
                                <img src='/images/purchase.png' className='img-fluid' alt='purchase' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
