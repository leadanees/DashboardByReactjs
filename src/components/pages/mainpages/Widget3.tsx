import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FaChartBar, FaUserPlus, FaBoxes, FaBug } from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);


const Widget3 = () => {

    return (
        <div className="container-fluid py-4">
            <div className="row align-items-stretch" style={{ minHeight: '100%' }}>
                {/* Left Column */}
                <div className="col-md-7 d-flex flex-column">
                    <div className="card p-4 shadow-sm w-100 h-100">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <h5>Recent Stats</h5>
                                <small className="text-muted">More than 500+ new members</small>
                            </div>
                            <div>
                                <button className="btn btn-light btn-sm me-1">Month</button>
                                <button className="btn btn-dark btn-sm me-1">Week</button>
                                <button className="btn btn-light btn-sm">Day</button>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <Bar
                                data={{
                                    labels: ['1 Aug', '8 Aug', '15 Aug', '22 Aug', '29 Aug', '5 Sep'],
                                    datasets: [
                                        {
                                            label: 'New',
                                            data: [72, 95, 125, 100, 115, 135],
                                            backgroundColor: '#FFA500',
                                            borderRadius: 8,
                                            barThickness: 20,
                                        },
                                        {
                                            label: 'Old',
                                            data: [60, 80, 110, 85, 100, 120],
                                            backgroundColor: '#E0E7ED',
                                            borderRadius: 8,
                                            barThickness: 20,
                                        },
                                    ],
                                }}
                                options={{
                                    responsive: true,
                                    plugins: {
                                        legend: {
                                            display: false,
                                        },
                                        tooltip: {
                                            enabled: true,
                                        },
                                    },
                                    scales: {
                                        x: {
                                            grid: {
                                                display: false,
                                            },
                                            stacked: false,
                                        },
                                        y: {
                                            beginAtZero: true,
                                            grid: {
                                                color: '#F2F2F2',
                                            },
                                            ticks: {
                                                stepSize: 30,
                                            },
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-5 d-flex flex-column">
                    <div className="row g-3 h-100">
                        <div className="col-6 col-md-6 col-lg-6">
                            <div className="card p-4 shadow-sm text-center" style={{ backgroundColor: '#FFF4DD' }}>
                                <div className="text-warning mb-2" style={{ fontSize: '2rem' }}>
                                    <FaChartBar />
                                </div>
                                <h6 className="text-muted m-0">Weekly Sales</h6>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-6">
                            <div className="card p-4 shadow-sm text-center" style={{ backgroundColor: '#F1EDFD' }}>
                                <div className="text-primary mb-2" style={{ fontSize: '2rem' }}>
                                    <FaUserPlus />
                                </div>
                                <h6 className="text-muted m-0">New Users</h6>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-6">
                            <div className="card p-4 shadow-sm text-center" style={{ backgroundColor: '#FFE7E9' }}>
                                <div className="text-danger mb-2" style={{ fontSize: '2rem' }}>
                                    <FaBoxes />
                                </div>
                                <h6 className="text-muted m-0">Item Orders</h6>
                            </div>
                        </div>

                        <div className="col-6 col-md-6 col-lg-6">
                            <div className="card p-4 shadow-sm text-center" style={{ backgroundColor: '#DFF6F4' }}>
                                <div className="text-info mb-2" style={{ fontSize: '2rem' }}>
                                    <FaBug />
                                </div>
                                <h6 className="text-muted m-0">Bug Reports</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default Widget3;