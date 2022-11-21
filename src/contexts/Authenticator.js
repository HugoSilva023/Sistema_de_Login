import {useState, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [name, setName] = useState(null);

    return (
        <AuthContext.Provider value={{ name, setName }}>
            {children}
        </AuthContext.Provider>
    )
}