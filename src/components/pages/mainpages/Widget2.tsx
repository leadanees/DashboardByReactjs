import React, { type JSX } from "react";
import {
    FaCheckCircle,
    FaEdit,
    FaTrash,
    FaToggleOn,
    FaProductHunt,
    FaTelegramPlane,
    FaNetworkWired,
    FaBuilding,
    FaMobileAlt,
    FaLaravel,
    FaPhp,
    FaDatabase,
    FaBug,
    FaShieldAlt,
} from "react-icons/fa";
import DataTable from "react-data-table-component";

// Types
interface NewArrival {
    name: string;
    ftp: string;
    price: string;
    status: string;
    statusColor: string;
    icon: JSX.Element;
}

interface SalesProgressItem {
    name: string;
    stack: string;
    color: string;
    icon: JSX.Element;
}

// Data
const salesProgress: SalesProgressItem[] = [
    { name: "Briviba SaaS", stack: "PHP, SQLite, Artisan CLI", color: "#A084E8", icon: <FaLaravel size={24} /> },
    { name: "Briviba SaaS", stack: "PHP, SQLite, Artisan CLI", color: "#FFD93D", icon: <FaPhp size={24} /> },
    { name: "Briviba SaaS", stack: "PHP, SQLite, Artisan CLI", color: "#6BCB77", icon: <FaDatabase size={24} /> },
    { name: "Briviba SaaS", stack: "PHP, SQLite, Artisan CLI", color: "#FF6B6B", icon: <FaBug size={24} /> },
    { name: "Briviba SaaS", stack: "PHP, SQLite, Artisan CLI", color: "#A5D7E8", icon: <FaShieldAlt size={24} /> },
];

const newArrivals: NewArrival[] = [
    {
        name: "Sant Outstanding",
        ftp: "bprow@bnc.cc",
        price: "$2,000,000",
        status: "Approved",
        statusColor: "primary",
        icon: <FaProductHunt size={24} color="#f44336" />,
    },
    {
        name: "Telegram Application",
        ftp: "bprow@bnc.cc",
        price: "$4,600,000",
        status: "In Progress",
        statusColor: "warning",
        icon: <FaTelegramPlane size={24} color="#1da1f2" />,
    },
    {
        name: "Cisco Management",
        ftp: "bprow@bnc.cc",
        price: "$560,000",
        status: "Success",
        statusColor: "success",
        icon: <FaNetworkWired size={24} color="#4caf50" />,
    },
    {
        name: "HR Management",
        ftp: "bprow@bnc.cc",
        price: "$57,000",
        status: "Rejected",
        statusColor: "danger",
        icon: <FaBuilding size={24} color="#e91e63" />,
    },
    {
        name: "KTR Mobile Application",
        ftp: "bprow@bnc.cc",
        price: "$45,200,000",
        status: "In Progress",
        statusColor: "warning",
        icon: <FaMobileAlt size={24} color="#ffc107" />,
    },
];

// Columns
const columns = [
    {
        name: "Project",
        width: '220px',
        selector: (row: any) => row.name,
        sortable: true,
        cell: (row: any) => (
            <div className="d-flex align-items-center">
                <div className="me-2">{row.icon}</div>
                <div>
                    <strong>{row.name}</strong>
                    <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                        FTP: {row.ftp}
                    </div>
                </div>
            </div>
        ),
    },
    {
        name: "Price",
        selector: (row: any) => row.price,
        sortable: true,
        cell: (row: any) => (
            <div>
                <strong>{row.price}</strong>
                <div className="text-muted" style={{ fontSize: "0.75rem" }}>Paid</div>
            </div>
        ),
    },
    {
        name: "Status",
        selector: (row: any) => row.status,
        cell: (row: any) => (
            <span className={`badge bg-${row.statusColor}`}>{row.status}</span>
        ),
    },
    {
        name: "Actions",
        cell: (row: any) => (
            <div className="d-flex gap-2">
                <FaToggleOn size={18} className="text-primary" style={{ backgroundColor: '#bcbcf0', padding: '3px', borderRadius: '3px' }} title="Toggle" />
                <FaEdit size={18} className="text-primary" style={{ backgroundColor: '#bcbcf0', padding: '3px', borderRadius: '3px' }} title="Edit" />
                <FaTrash size={18} className="text-primary" style={{ backgroundColor: '#bcbcf0', padding: '3px', borderRadius: '3px' }} title="Delete" />
            </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
];


const customStyles = {
    rows: {
        style: {
            borderBottom: 'none !important',
            marginBottom: '10px',
        },
    },
    headRow: {
        style: {
            borderBottom: 'none', // removes header bottom border
        },
    },
    cells: {
        style: {
            borderBottom: 'none', // removes borders between cells
        },
    },
};

// Component
const Widget2: React.FC = () => {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                {/* Left Column */}
                <div className="col-md-4">
                    <div className="card p-4 shadow-sm w-100 h-100">
                        <div className="d-flex justify-content-between mb-3">
                            <h5>Sales Progress</h5>
                            <span className="text-muted">⋮</span>
                        </div>
                        <div className="card-body pt-0">
                            {salesProgress.map((item, idx) => (
                                <div key={idx} className="d-flex align-items-center mb-3">
                                    <div
                                        className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                                        style={{
                                            color: item.color,
                                            backgroundColor: `${item.color}33`, // Add opacity (33 = ~20% in hex)
                                            width: "40px",
                                            height: "40px",
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h6 className="mb-0">{item.name}</h6>
                                        <small className="text-muted">{item.stack}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-md-8">
                    <div className="card p-4 shadow-sm w-100 h-100">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <h5>New Arrivals</h5>
                                <small className="text-muted">More than 400+ new members</small>
                            </div>
                            <div>
                                <button className="btn btn-light btn-sm me-1">Month</button>
                                <button className="btn btn-light btn-sm me-1">Week</button>
                                <button className="btn btn-dark btn-sm">Day</button>
                            </div>
                        </div>

                        <div className="card-body pt-0">
                            <DataTable
                                columns={columns}
                                data={newArrivals}
                                pagination
                                highlightOnHover
                                responsive
                                customStyles={customStyles}
                                striped={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widget2;
