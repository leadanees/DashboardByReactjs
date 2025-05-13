import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler);

const Widget1Categories = () => {
    const chartLabels = Array(20).fill("");

    const chartData = {
        labels: chartLabels,
        datasets: [
            {
                label: "",
                data: [25, 20, 15, 25, 20, 30, 25, 35, 30, 28, 40, 35, 38, 30, 25, 20, 15, 10, 15, 20],
                fill: true,
                backgroundColor: "rgba(15, 13, 13, 0.1)",
                borderColor: "#373636",
                tension: 0.4,
                pointRadius: 0,
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
    };

    return (
        <div className="row g-3">
            {/* Left Card - Categories */}
            <div className="col-lg-6 col-md-12">
                <div className="card shadow-sm h-100">
                    <div className="card-body d-flex flex-column justify-content-between h-100 position-relative">
                        <div
                            className="d-flex justify-content-between align-items-center mb-3"
                            style={{ position: 'absolute', zIndex: 99999, width: '100%' }}
                        >
                            <h6 className="card-title mb-0 ms-2" style={{ color: 'white' }}>Categories</h6>
                            <div className="dropdown mt-3 me-5">
                                <button
                                    className="btn btn-sm btn-outline-light dropdown-toggle text-white border"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Export
                                </button>
                                <ul className="dropdown-menu" data-bs-auto-close="outside">
                                    <li><a className="dropdown-item" href="#">PDF</a></li>
                                    <li><a className="dropdown-item" href="#">Excel</a></li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="chart-container mb-2"
                            style={{
                                height: "75%",
                                minHeight: "200px",
                                backgroundColor: "#f83636",
                                borderRadius: "8px",
                                paddingBottom: "8px",
                                position: 'relative',
                            }}
                        >
                            <Line data={chartData} options={chartOptions} />
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-lg-6 col-md-12">
                <div className="card shadow-sm h-100">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="card-title mb-0 fw-semibold">Recent Activities</h6>
                            <i className="bi bi-three-dots-vertical fs-6 text-muted"></i>
                        </div>

                        <p className="text-muted small mb-3">890,344 Sales</p>

                        <ul className="list-unstyled position-relative ps-4">
                            {/* Vertical line */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    bottom: "0",
                                    left: "77px", // center of the dot
                                    width: "2px",
                                    backgroundColor: "#e0e0e0",
                                    zIndex: 0,
                                    marginTop:'10px'
                                }}
                            ></div>

                            {/* Timeline item 1 */}
                            <li className="d-flex mb-3 align-items-start position-relative" style={{ zIndex: 1 }}>
                                <strong className="me-2" style={{ width: "45px" }}>08:42</strong>
                                <div
                                    className="me-3 mt-1"
                                    style={{
                                        width: "18px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor: "#6a1b9a",
                                        zIndex: 1,
                                    }}
                                ></div>
                                <div>
                                    <span className="text-muted">
                                        Outlines keep you honest. Indulging in poorly driving and keep structure
                                    </span>
                                </div>
                            </li>

                            {/* Timeline item 2 */}
                            <li className="d-flex mb-3 align-items-start position-relative" style={{ zIndex: 1 }}>
                                <strong className="me-2" style={{ width: "45px" }}>10:00</strong>
                                <div
                                    className="me-3 mt-1"
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor: "#00bcd4",
                                        zIndex: 1,
                                        marginLeft: '-4px'
                                    }}
                                ></div>
                                <div>
                                    <span className="text-muted"> <strong>AEOL</strong> meeting with</span>
                                </div>
                                <div>

                                </div>
                            </li>

                            {/* Timeline item 3 */}
                            <li className="d-flex mb-3 align-items-start position-relative" style={{ zIndex: 1 }}>
                                <strong className="me-2" style={{ width: "45px" }}>14:37</strong>
                                <div
                                    className="me-3 mt-1"
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor: "#f44336",
                                        zIndex: 1,
                                        marginLeft: '-3px'
                                    }}
                                ></div>
                                <div>
                                    <span className="text-muted"><strong>Make deposit </strong><span style={{ color: 'purple', fontWeight: '600' }}>USD 700</span> to ESL</span>
                                </div>
                            </li>

                            {/* Timeline item 4 */}
                            <li className="d-flex align-items-start position-relative" style={{ zIndex: 1 }}>
                                <strong className="me-2" style={{ width: "45px" }}>16:50</strong>
                                <div
                                    className="me-3 mt-1"
                                    style={{
                                        width: "24px",
                                        height: "10px",
                                        borderRadius: "50%",
                                        backgroundColor: "#2196f3",
                                        zIndex: 1,
                                    }}
                                ></div>
                                <div>
                                    <span className="text-muted">
                                        Outlines keep you honest. Indulging in poorly driving and keep structure keep you honest great
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Widget1Categories;
