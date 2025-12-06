import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AuthDialog from "./AuthDialog";

export default function NotFound({ name }) {
    const [authOpen, setAuthOpen] = useState(false);
    const [initialMode, setInitialMode] = useState("");

    const handleClick = (mode) => {
        setInitialMode(mode);
        setAuthOpen(true);
    };

    return (
        <Box
            sx={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 2,
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: "6rem", md: "10rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                    color: "#e8431aff",
                }}
            >
                401
            </Typography>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    mt: 2,
                    letterSpacing: "-0.5px",
                }}
            >
                Unauthorized
            </Typography>

            <Typography
                sx={{
                    mt: 1,
                    maxWidth: 450,
                    color: "text.secondary",
                    fontSize: "1.05rem",
                }}
            >
                You are not authorized to access this page. Please <Link onClick={() => handleClick("login")}>Log In</Link> or <Link onClick={() => handleClick("signup")}>Sign Up</Link> to continue. 
            </Typography>

            <Button
                variant="contained"
                size="large"
                component={Link}
                to="/"
                sx={{
                    mt: 4,
                    textTransform: "none",
                    px: 4,
                    py: 1.3,
                    borderRadius: "10px",
                    bgcolor: "#215da9",
                    "&:hover": { bgcolor: "#1a4680" },
                }}
            >
                Go Back Home
            </Button>

            <AuthDialog
                open={authOpen}
                initialMode={initialMode}
                onClose={() => setAuthOpen(false)}
            />
        </Box>
    );
}
