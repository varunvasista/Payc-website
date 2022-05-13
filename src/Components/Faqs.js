import React from 'react';
import LandingStyle from "../Views/LandingPage/landingPage.module.css";
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Faqs() {

    return (
        <div className="container-fluid px-0">
            <div className="row mx-0">
                <div className="col-lg-12 px-0">
                    <div className="greybg">
                        <div className="text-center">
                            <h6 className={LandingStyle.faqs_head}>FAQ's</h6>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center pb-5">
                                <div className="col-lg-8 col-md-12">
                                    <div class="accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What is payc crypto payment gateway?
                                                    <MdKeyboardArrowDown />
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    Payc crypto payment gateway is a crypto payment processor where we  provide crypto payment services for the merchants to accept cryptocurrencies in their e commerce or any e business websites or apps, similar to the payment processors, gateways, and acquiring bank credit cards use.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    What is Payc Mobile application?
                                                    <MdKeyboardArrowDown />
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    Payc Mobile App is a p2p crypto payment platform where you can pay your cryptocurrencies to anyone with a single QR code which manages all your cryptocurrencies with a single click, we also provide hotel booking, flight booking, mobile topup, utility bill payments etc & merchant services
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    What is Payc token ?
                                                    <MdKeyboardArrowDown />
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    Payc Token is a ERC20 standard based token built on polygon network, payc tokens can be used to pay in our network without any transaction fee and merchants can accept payc tokens to avoid paying the commission to the services
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="headingFour">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    What is the concept Single QR code ?
                                                    <MdKeyboardArrowDown />
                                                </button>
                                            </h2>
                                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div class="accordion-body">
                                                    Payc mobile app provides a unique and AI processed algorithmic QR code which reads the required cryptocurrency payment address and sends the funds to the right network during the p2p or merchant transaction, this solves the major issue of the crypto industry where we have 100’s of cryptocurrencies and their different payment addresses are used every day for payments
                                                </div>
                                            </div>
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
