import { Route, Routes } from "react-router-dom";
import MainDashboardPage from "./components/pages/MainDashboardPage";

const Approuter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainDashboardPage />} />
            </Routes>
        </>
    );
};

export default Approuter;
