import {
    createContext,
    useContext,
    useState
} from "react"

const FlashContext = createContext();

export const FlashProvider = ({ children }) => {
    const [flash, setFlash] = useState({});

    const showFlash = (type, msg) => {
        setFlash({ type, msg });
    }

    return (
        <FlashContext.Provider value={{ flash, setFlash, showFlash }}>
            {children}
        </FlashContext.Provider>
    )
}

export function useFlash() {
    return useContext(FlashContext)
}