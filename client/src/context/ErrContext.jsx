import {
    createContext,
    useContext,
    useState
} from "react"

export const ErrContext = createContext();

export const ErrProvider = ({ children }) => {
    const [ err, setErr ] = useState(null);

    return (
        <ErrContext.Provider value={{ err, setErr }}>
            {children}
        </ErrContext.Provider>
    )
}

export function useErr() {
    return useContext(ErrContext)
}