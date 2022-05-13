import React from 'react';
import LandingStyle from "../Views/LandingPage/landingPage.module.css"

export default function Tokenomics() {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-12">
                    <div className={LandingStyle.token_head}>
                        <h6>Tokenomics</h6>
                        <p className={LandingStyle.supply}>SUPPLY: <span>8,888,888,888,888 </span> TOKENS</p>
                        <p className={LandingStyle.public}>PUBLIC TOKEN DISTIBUTION : <span>60%</span> </p>
                    </div>
                    <div className={LandingStyle.token_boxes}>
                        <div className={LandingStyle.token_box}>
                            <p>PRIVATE ROUND</p>
                            <h6>10%</h6>
                        </div>
                        <div className={LandingStyle.token_box}>
                            <p>SEED ROUND</p>
                            <h6>5%</h6>
                        </div>
                        <div className={LandingStyle.token_box}>
                            <p>LAUNCHPAD SALE <br /> (UNISWAP)</p>
                            <h6>45%</h6>
                        </div>
                        <div className={LandingStyle.token_box}>
                            <p>MARKETING</p>
                            <h6>10%</h6>
                        </div>
                        <div className={LandingStyle.token_box}>
                            <p>TEAM & ADVISORY</p>
                            <h6>10%</h6>
                        </div>
                        <div className={LandingStyle.token_box}>
                            <p>TREASURY</p>
                            <h6>10%</h6>
                        </div>
                        <div className={LandingStyle.token_box}>
                            <p>CONTIGENCY</p>
                            <h6>2%</h6>
                        </div>
                        <div className={LandingStyle.token_box}>
                            <p>R & D</p>
                            <h6>5%</h6>
                        </div>
                        <div className={LandingStyle.token_box}>
                            <p>CONTIGENCY</p>
                            <h6>3%</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
