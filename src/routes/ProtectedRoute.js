import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/Authenticator"
import PropTypes from "prop-types";
import { useContext } from "react";

export const ProtectedRoute = ({ children }) => {
    
    const {name} = useContext(AuthContext);

    return name ? children : <Navigate to={"/"}/>;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
}