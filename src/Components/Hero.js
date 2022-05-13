import React from 'react';
import LandingStyle from "../Views/LandingPage/landingPage.module.css"
import { MdArrowForward } from 'react-icons/md';

export default function Hero() {
    return (
        <div className='container-fluid px-0'>
            <div className="row mx-0">
                <div className="col-lg-12 px-0">
                    <div className={LandingStyle.hero_section}>
                        <div className={LandingStyle.logo}>
                            <a href="/">
                                <img src='/images/logo.png' alt='logo' />
                            </a>
                        </div>
                        <div className={LandingStyle.hero_main}>
                            <h6 className={LandingStyle.hero_heading}>Paying for things with crypt<span>O</span> currencies has never been easier.</h6>
                            <p>Introducing Payc, the hassle-free crytpo-based payment gateway mobile-based application that is changing the way people transact with their digital currency. <br />
                                We are listed on Uniswap
                            </p>
                            <div className="text-center mt-4">
                                <a href="https://app.uniswap.org/#/swap?chain=polygon&outputCurrency=0xc02C66E6eAA68fD5F5bDdb0C15C914c914EA542B">
                                    <button className="btn-primary px-4">Buy PayC Token at Uniswap &nbsp;<MdArrowForward /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
