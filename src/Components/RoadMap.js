import React from 'react';
import LandingStyle from "../Views/LandingPage/landingPage.module.css";

export default function RoadMap() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <h6 className={LandingStyle.roadmap_head}>The Roadmap</h6>
                    </div>
                    <div className={LandingStyle.roadmap_boxes}>
                        <div className={LandingStyle.roadmap_box}>
                            <p>2018 Q4</p>
                            <div className="d-flex align-items-center">
                                <div className={LandingStyle.circle}></div>
                                <div className={LandingStyle.dotted}></div>
                            </div>
                            <h6>Concept generation & research</h6>
                        </div>
                        <div className={LandingStyle.roadmap_box}>
                            <p>2019 Q1 & Q2</p>
                            <div className="d-flex align-items-center">
                                <div className={LandingStyle.circle}></div>
                                <div className={LandingStyle.dotted}></div>
                            </div>
                            <h6>Team assemble and proving the concept of work</h6>
                        </div>
                        <div className={LandingStyle.roadmap_box}>
                            <p>2019 Q3 & Q4</p>
                            <div className="d-flex align-items-center">
                                <div className={LandingStyle.circle}></div>
                                <div className={LandingStyle.dotted}></div>
                            </div>
                            <h6>Platform Research on crypto Payments & Strategic Plan </h6>
                        </div>
                        <div className={LandingStyle.roadmap_box}>
                            <p>2020 Q4</p>
                            <div className={LandingStyle.circle}></div>
                            <h6>Platform design & Crypto payment gateway development MVP</h6>
                        </div>

                        <div className={LandingStyle.roadmap_box}>
                            <p>2022 Q1</p>
                            <div className="d-flex align-items-center">
                                <div className={LandingStyle.circle}></div>
                                <div className={LandingStyle.dotted}></div>
                            </div>
                            <h6>Token Launch</h6>
                        </div>
                        <div className={LandingStyle.roadmap_box}>
                            <p>2022 Q1</p>
                            <div className="d-flex align-items-center">
                                <div className={LandingStyle.circle}></div>
                                <div className={LandingStyle.dotted}></div>
                            </div>
                            <h6>Planning of Token Launch</h6>
                        </div>
                        <div className={LandingStyle.roadmap_box}>
                            <p>2021 Q4</p>
                            <div className="d-flex align-items-center">
                                <div className={LandingStyle.circle}></div>
                                <div className={LandingStyle.dotted}></div>
                            </div>
                            <h6>Building of Main version from MVP</h6>
                        </div>
                        <div className={LandingStyle.roadmap_box}>
                            <p>2021 Q3</p>
                            <div className="d-flex align-items-center">
                                <div className={LandingStyle.circle}></div>
                                <div className={LandingStyle.vdotted}></div>
                            </div>
                            <h6>MVP completion & Alpha test </h6>
                        </div>

                        <div className={LandingStyle.roadmap_box}>
                            <p>2022 Q2</p>
                            <div className="d-flex align-items-center">
                                <div className={LandingStyle.bcircle}></div>
                                <div className={LandingStyle.vldotted}></div>
                                <div className={LandingStyle.dotted}></div>
                            </div>
                            <h6>Launch crypto payment gateway </h6>
                        </div>
                        <div className={LandingStyle.roadmap_box}>
                            <p>2022 Q3</p>
                            <div className="d-flex align-items-center">
                                <div className={LandingStyle.bcircle}></div>
                                <div className={LandingStyle.dotted}></div>
                            </div>
                            <h6>Establishing global user base & building mobile platform MVP</h6>
                        </div>
                        <div className={LandingStyle.roadmap_box}>
                            <p>2022 Q4</p>
                            <div className="d-flex align-items-center">
                                <div className={LandingStyle.bcircle}></div>
                                <div className={LandingStyle.dotted}></div>
                            </div>
                            <h6>Alpha test mobile platform MVP</h6>
                        </div>
                        <div className={LandingStyle.roadmap_box}>
                            <p>2023 Q1</p>
                            <div className={LandingStyle.bcircle}></div>
                            <h6>Launch mobile platform with all services</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
