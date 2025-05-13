import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Widget1Categories from "./Widget1Categories";

const Widget1 = () => {
    const mainCards = [
        { title: "SaaS Application", icon: "bi-laptop" },
        { title: "Main Categories", icon: "bi-list-check" },
        { title: "Video Tutorials", icon: "bi-camera-video", active: true },
        { title: "Sales Statistics", icon: "bi-bar-chart" },
        { title: "ARC Security", icon: "bi-shield-lock" },
    ];

    const giftCards = [
        { title: "Great Gifts", icon: "bi-gift" },
        { title: "Great Gifts", icon: "bi-x-circle" },
        { title: "Great Gifts", icon: "bi-fingerprint" },
        { title: "Great Gifts", icon: "bi-stars" },
        { title: "Great Gifts", icon: "bi-basket" },
        { title: "Great Gifts", icon: "bi-rocket" },
    ];

    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-md-9">
                    <div className="row g-3 mb-4">
                        {mainCards.map((card, index) => (
                            <div key={index} className="col-6 col-sm-4 col-md-2">
                                <div
                                    className={`card text-center shadow-sm border-0 ${card.active ? "text-white" : ""}`}
                                    style={card.active ? { backgroundColor: "#26e08a" } : {}}
                                >

                                    <div className="card-body py-4 d-flex flex-column align-items-center justify-content-center">
                                        <i className={`bi ${card.icon} fs-4 mb-2`} />
                                        <p className="mb-0 small">{card.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Widget1Categories />
                </div>

                <div className="col-md-3 mt-4 mt-md-0">
                    <div className="row g-3">
                        {giftCards.map((card, index) => (
                            <div key={index} className="col-6 col-sm-4 col-md-6">
                                <div className="card text-center shadow-sm border-0 h-100">
                                    <div className="card-body py-4 d-flex flex-column align-items-center justify-content-center">
                                        <i className={`bi ${card.icon} fs-3 text-secondary mb-2`} />
                                        <p className="mb-0 small" style={{fontWeight:'600'}}>{card.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widget1;
