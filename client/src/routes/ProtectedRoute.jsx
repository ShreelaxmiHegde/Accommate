import { useState } from "react";
import { useAuth } from "../context/AuthContext"
import AuthDialog from "../pages/AuthDialog";
import AccessDenied from "../pages/AccessDenied";

export default function ProtectedRoute({ children }) {
    const { currUser } = useAuth();
    const [authOpen, setAuthOpen] = useState(true);
    const childName = children.type.name;

    return (
        <>
            {!currUser && <AccessDenied name={childName} />}
            {currUser ?
                children
                :
                <AuthDialog
                    open={authOpen}
                    initialMode={"login"}
                    onClose={() => setAuthOpen(false)}
                />
            }
        </>
    );
}