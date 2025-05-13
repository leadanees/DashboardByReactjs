import React, { useState, useEffect } from "react";
import {
    FaChevronDown,
    FaChevronUp,
    FaUser,
    FaComments,
    FaFileAlt,
    FaAddressBook
} from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";

interface SideBardMenuProps {
    isCollapsed: boolean;
}

const SideBardMenu: React.FC<SideBardMenuProps> = ({ isCollapsed }) => {
    const [showApplications, setShowApplications] = useState(true);

    const toggleApplications = () => {
        if (!isCollapsed) setShowApplications(prev => !prev);
    };

    useEffect(() => {
        if (isCollapsed) setShowApplications(false);
    }, [isCollapsed]);

    return (
        <div
            className="text-white vh-100 d-flex flex-column p-3 p-sm-3 p-md-4"
            style={{ minWidth: isCollapsed ? "60px" : "180px" }}
        >
            <h5
                className="ms-4 mb-4 text-uppercase"
                style={{
                    fontSize: isCollapsed ? "1rem" : "1.25rem",
                }}
            >
                {!isCollapsed && "DASHBOARD"}
            </h5>
            <h3
                className="mb-4 text-uppercase d-flex align-items-center"
                style={{
                    fontSize: isCollapsed ? "0.75rem" : "1rem",
                    color: "#959191"
                }}
            >
                <FaDiamond
                    className="me-2"
                    style={{
                        color: "#6b8eff",
                        fontSize: "1rem"
                    }}
                />
                {!isCollapsed && (
                    <span className="d-inline-block text-truncate" style={{ maxWidth: "100%" }}>
                        Dashboard
                    </span>
                )}
            </h3>

            {/* Section Title */}
            {!isCollapsed && (
                <span className="mb-3 mt-2 d-block" style={{ color: "#959191", fontSize: "0.85rem" }}>
                    Custom
                </span>
            )}

            {/* Toggle menu */}
            <div
                className="d-flex justify-content-between align-items-center"
                onClick={toggleApplications}
                style={{ cursor: "pointer" }}
            >
                <span className="d-flex align-items-center">
                    <FaAddressBook className="me-2" />
                    {!isCollapsed && (
                        <span className="d-inline-block text-truncate" style={{ maxWidth: "100%" }}>
                            Applications
                        </span>
                    )}
                </span>
                {!isCollapsed && (showApplications ? <FaChevronUp /> : <FaChevronDown />)}
            </div>

            {/* Dropdown list */}
            {showApplications && !isCollapsed && (
                <ul className="list-unstyled mt-2 ps-4">
                    <SidebarItem icon={<FaUser />} label="Users" />
                    <SidebarItem icon={<FaAddressBook />} label="Contacts" />
                    <SidebarItem icon={<FaComments />} label="Chat" />
                    <SidebarItem icon={<FaFileAlt />} label="Pages" />
                </ul>
            )}
        </div>
    );
};

interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => (
    <li
        className="mb-2 d-flex align-items-center p-2"
        style={{
            color: "#959191",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        }}
    >
        <span className="me-2">{icon}</span>
        {label}
    </li>
);

export default SideBardMenu;
