import { useState } from "react";
import SideBardMenu from "./SideBardMenu";
import MainPage from "./MainPage";
import { FaBars } from "react-icons/fa";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";


const MainDashboardPage = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [showSidebarMobile, setShowSidebarMobile] = useState(true);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);
    const toggleSidebarMobile = () => setShowSidebarMobile(!showSidebarMobile);

    return (
        <section className="w-100 h-100 m-0 p-0">
            <section className="row g-0 w-100">
                {/* Sidebar */}
                <section
                    className={`text-white min-vh-100 d-flex flex-column position-relative ${isCollapsed ? "col-md-1 col-lg-1" : "col-md-3 col-lg-2"
                        } ${!showSidebarMobile && "d-none d-md-block"}`} // Add this class to hide sidebar on mobile if collapsed
                    style={{ backgroundColor: "#1e1e2d", transition: "width 0.3s" }}
                >
                    <SideBardMenu isCollapsed={isCollapsed} />

                    {/* Collapse Button */}
                    <button
                        onClick={toggleCollapse}
                        className="btn btn-sm btn-outline-secondary position-absolute top-0 end-0 m-2 d-none d-md-block"
                        style={{ backgroundColor: "transparent", border: "none" }} // Remove background and border
                    >
                        {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
                    </button>

                </section>

                {/* Toggle button for mobile */}
                <section className="d-block d-md-none position-absolute top-0 end-0 m-2 z-3">
                    <button className="btn btn-outline-light" onClick={toggleSidebarMobile}>
                        <FaBars />
                    </button>
                </section>

                {/* Main Content */}
                <section
                    className={`col ${isCollapsed ? "col-md-11 col-lg-11" : "col-md-9 col-lg-10"}`}
                >
                    <MainPage />
                </section>
            </section>
        </section>
    );
};

export default MainDashboardPage;
