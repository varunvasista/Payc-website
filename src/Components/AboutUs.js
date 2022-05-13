import React from 'react';
import LandingStyle from "../Views/LandingPage/landingPage.module.css"

export default function AboutUs() {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-12">
                    <div className={LandingStyle.about_head}>
                        <p className={LandingStyle.us}>ENOUGH OF<span> YOU</span></p>
                        <p className={LandingStyle.us}>LET’S HEAR<span> ABOUT US</span></p>
                    </div>
                    <div className={LandingStyle.about_boxes}>
                        <div className={LandingStyle.about_box}>
                            <div className={LandingStyle.about_boxx}>
                                <img src='/images/a1.png' alt='about' />
                            </div>
                            <p className={LandingStyle.name}>Jason Bourne</p>
                            <p className={LandingStyle.designation}>Web Developer</p>
                        </div>
                        <div className={LandingStyle.about_box}>
                            <div className={LandingStyle.about_boxx}>
                                <img src='/images/a2.png' alt='about' />
                            </div>
                            <p className={LandingStyle.name}>Diego Maradonna</p>
                            <p className={LandingStyle.designation}>UI Designer</p>
                        </div>
                        <div className={LandingStyle.about_box}>
                            <div className={LandingStyle.about_boxx}>
                                <img src='/images/a3.png' alt='about' />
                            </div>
                            <p className={LandingStyle.name}>Jessica Alba</p>
                            <p className={LandingStyle.designation}>CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
