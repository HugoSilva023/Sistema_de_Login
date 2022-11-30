import {useState, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [name, setName] = useState(null);
    const [page, setPage] = useState(1);
    const [theBook, setTheBook] = useState({})

    return (
        <AuthContext.Provider value={{ name, setName, page, setPage, theBook, setTheBook }}>
            {children}
        </AuthContext.Provider>
    )
}