import React from 'react';
import LandingStyle from "../Views/LandingPage/landingPage.module.css";
import { MdArrowForward, MdOutlineMail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaTelegramPlane } from "react-icons/fa"

export default function ContactUs() {
    return (
        <div className='container-fluid px-0'>
            <div className="row mx-0">
                <div className="col-lg-12 px-0">
                    <div className={LandingStyle.contact_section}>
                        <div className="text-center">
                            <div className={LandingStyle.contact_head}>
                                <p>LET’S CONNECT</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-lg-6 mb-5">
                                    <div className={LandingStyle.contact_form}>
                                        <div class="form-group mb-4">
                                            <label>What’s your name? <span className='text-danger'>*</span></label>
                                            <input type="text" class="form-control" placeholder="Enter your name" />
                                        </div>
                                        <div class="form-group mb-4">
                                            <label>What’s your email? <span className='text-danger'>*</span></label>
                                            <input type="email" class="form-control" placeholder="name@company.com" />
                                        </div>
                                        <div className="form-group mb-4">
                                            <label>Message</label>
                                            <textarea class="form-control" rows="3" placeholder='Share your message here'></textarea>
                                        </div>
                                        <button className="btn-primary px-4">Submit Form &nbsp;<MdArrowForward /></button>

                                    </div>
                                </div>
                                <div className="col-lg-5 mb-5">
                                    <div className={LandingStyle.contacts}>
                                        <h6>Prefer Email, You can reach us at</h6>
                                        <p><MdOutlineMail color={"#E93F33"} /> &nbsp; varun@payc.io</p>
                                    </div>
                                    <div className={LandingStyle.contacts}>
                                        <h6>We are located at</h6>
                                        <p><IoLocationOutline color={"#E93F33"} /> &nbsp; 30 N Gould St,Ste R, Sheridan 82801,  WY  USA</p>
                                    </div>
                                    <div className={LandingStyle.contacts}>
                                        <h6>Social Media Links</h6>
                                        <div className="d-flex align-items-center">
                                            <a href="https://www.linkedin.com/company/payc2019/mycompany/">
                                                <div className={LandingStyle.social}>
                                                    <FaLinkedinIn />
                                                </div>
                                            </a>
                                            <a href="https://www.facebook.com/PayCapp/">
                                                <div className={LandingStyle.social}>
                                                    <FaFacebookF />
                                                </div>
                                            </a>
                                            <a href="https://www.instagram.com/paycapp/">
                                                <div className={LandingStyle.social}>
                                                    <FaInstagram />
                                                </div>
                                            </a>
                                            <a href="https://twitter.com/PayCapp">
                                                <div className={LandingStyle.social}>
                                                    <FaTwitter />
                                                </div>
                                            </a>
                                            <a href="https://www.payc.io">
                                                <div className={LandingStyle.social}>
                                                    <FaTelegramPlane />
                                                </div>
                                            </a>
                                        </div>
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
