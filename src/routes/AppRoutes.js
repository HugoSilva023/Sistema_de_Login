import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";

function AppRotes () {
    return (
        <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/Home" element={<Home />} />
                </Routes>   
        </Router>
    );
};

export default AppRotes;