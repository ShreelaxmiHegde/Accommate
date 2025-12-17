import {
    Box,
    Typography,
    Button,
    Paper
} from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { Link } from "react-router-dom";

export default function NoListingFound() {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                textAlign: "center",
                background: "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                <Box
                    sx={{
                        width: 90,
                        height: 90,
                        borderRadius: "50%",
                        backgroundColor: "#f5f5f5",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <SearchOffIcon sx={{ fontSize: 45, color: "#9e9e9e" }} />
                </Box>

                <Typography variant="h5" fontWeight={600}>
                    No Listing Found
                </Typography>

                <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 360 }}>
                    The listing you’re looking for doesn’t exist, was removed, or the URL
                    might be incorrect.
                </Typography>

                <Box sx={{mt: 2}}>
                    <Button
                        variant="contained"
                        sx={{ mr: 1 }}
                        component={Link}
                        to="/"
                    >Go Home</Button>
                    <Button
                        variant="contained"
                        sx={{ ml: 1 }}
                        component={Link}
                        to="/explore"
                    >Explore</Button>
                </Box>
            </Box>
        </Paper>
    );
}