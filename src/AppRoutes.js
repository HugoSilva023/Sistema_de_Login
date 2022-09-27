import React, {useContext} from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import {AuthProvider, AuthContext} from "./contexts/Authenticator";

function AppRotes () {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);

        if (!authenticated) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/Home" element={<Home />} />
                </Routes>   
            </AuthProvider>
        </Router>
    );
};

export default AppRotes;