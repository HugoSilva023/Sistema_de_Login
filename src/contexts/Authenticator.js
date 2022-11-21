import {useState, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [name, setName] = useState(null);
    const [page, setPage] = useState(1);

    return (
        <AuthContext.Provider value={{ name, setName, page, setPage }}>
            {children}
        </AuthContext.Provider>
    )
}