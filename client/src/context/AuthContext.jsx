import {
    createContext,
    useState,
    useContext
} from "react"

export const AuthContext = createContext(); //creates context

export const AuthProvider = ({ children, initialUser=null }) => {
    const [currUser, setCurrUser] = useState(initialUser)

    return (
        <AuthContext.Provider value={{ currUser, setCurrUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() { 
    return useContext(AuthContext) 
};