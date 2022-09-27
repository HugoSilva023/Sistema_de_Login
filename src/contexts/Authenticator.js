import React, {useState, createContext} from "react";

import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log('login', {email, password})       

        if (password === '12341234' && email === 'desafio@ioasys.com.br') {
            setUser(true);
            navigate("/");

        } else {
            alert("Email e/ou senha incorretos.")
        }
    };

    const logout = () => {
        setUser(null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}