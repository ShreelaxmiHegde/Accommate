import {
    createContext,
    useState,
    useContext
} from "react"

export const AuthContext = createContext(); //creates context

export const AuthProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null)

    return (
        <AuthContext.Provider value={{ currUser, setCurrUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() { 
    return useContext(AuthContext) 
};