// import React from "react";
import {
    FaSearch,
    FaTh,
    FaChartBar,
    FaShoppingBasket,
    FaGripHorizontal,
    FaPlus,
} from "react-icons/fa";

const Header1 = () => {
    const data = {
        name: "Evotech Solution",
        Symbol: "ES",
    };

    return (
        <div
            style={{
                backgroundColor: "#ffffff",
                padding: "12px 24px",
                borderBottom: "1px solid #eaecef",
                fontSize: "0.9rem",
            }}
        >
            {/* Top Row */}
            <div className="d-flex justify-content-end align-items-center gap-3 mb-3 flex-wrap">
                <FaSearch className="text-primary fs-6 me-3" />
                <FaTh className="text-primary fs-6 me-3" />
                <FaChartBar className="text-primary fs-6 me-3" />
                <FaShoppingBasket className="text-primary fs-6 me-3" />
                <FaGripHorizontal className="text-primary fs-6 me-3" />
                <span className="fw-medium text-secondary">{data.name}</span>
                <div
                    className="rounded-circle text-white text-center"
                    style={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#c6f6d5",
                        color: "#28c76f",
                        lineHeight: "30px",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                    }}
                >
                    {data.Symbol}
                </div>
            </div>
<hr />
            <div className="row align-items-center">
                <div className="col-md-6 col-12 d-flex flex-wrap align-items-center gap-2 mb-2 mb-md-0">
                    <h6 className="m-0 fw-bold text-dark me-5">Dashboard</h6>
                    <button
                        className="btn btn-sm ms-5"
                        style={{
                            backgroundColor: "#fff4e0",
                            color: "#ff9f43",
                            fontWeight: "500",
                            border: "1px solid #ffe0b2",
                        }}
                    >
                        Add New
                    </button>
                </div>

                {/* Right */}
                <div className="col-md-6 col-12 d-flex flex-wrap justify-content-md-end gap-2">
                    <button className="btn btn-light-blue btn-sm me-3 active">Today</button>
                    <button className="btn btn-light-blue btn-sm me-3">Month</button>
                    <button className="btn btn-light-blue btn-sm me-3">Year</button>
                    <button className="btn btn-light-blue btn-sm me-3">Actions</button>
                    <button
                        className="btn btn-sm d-flex align-items-center justify-content-center"
                        style={{ backgroundColor: "#c6f6d5", color: "#28c76f" }}
                    >
                        <FaPlus className="me-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header1;
