import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const Routers = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Dashboard />} />
        </Routes>
    );
};

export default Routers;
