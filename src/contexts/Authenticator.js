import {useState, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [userId, setUserID] = useState(null);
    const [name, setName] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [gender, setGender] = useState(null);

    return (
        <AuthContext.Provider value={{ userId, setUserID, name, setName, birthDate, setBirthDate, gender, setGender }}>
            {children}
        </AuthContext.Provider>
    )
}