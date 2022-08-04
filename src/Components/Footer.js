import React from 'react';
import LandingStyle from "../Views/LandingPage/landingPage.module.css"

export default function Footer() {
    return (
        <div className='container-fluid px-0'>
            <div className="row mx-0 mb-4">
                <div className="col-lg-12 px-0">
                    <div className={LandingStyle.hero_section}>
                        <div className={LandingStyle.logo}>
                            <a href="/">
                                <img src='/images/logo.png' alt='logo' />
                            </a>
                        </div>
                        <div className={LandingStyle.footer}>
                            <p className={LandingStyle.fp1}>PayC is a single QR code for all your crypto needs.No more complicated, <br /> time-consuming processes—just scan and go! </p>
                            <p className={LandingStyle.reserved}>Payc Limited. All rights reserved 2022.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
