import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    Button,
    Typography,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Divider,
    IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from "../../context/AuthContext";

export default function NavDrawer({ handleModeChange, handleLogout }) {
    const navItems = ["Home", "Find Stays", "Become a Host"];
    const navigate = useNavigate();
    const { currUser } = useAuth();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavigation = (item, idx) => {
        setSelectedIndex(idx);

        if (item === "Home") {
            navigate("/")
        } else if (item === "Find Stays") {
            navigate("/explore")
        } else {
            navigate("/listings/new")
        }
        handleDrawerToggle();
    }

    return (
        <>
            <IconButton sx={{ display: { xs: "flex", sm: "none" } }} onClick={handleDrawerToggle}>
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: 260,
                        borderTopLeftRadius: 16,
                        borderBottomLeftRadius: 16,
                        paddingY: 2,
                        paddingX: 1.5,
                        boxShadow: "0px 2px 20px rgba(0,0,0,0.15)",
                    },
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column" }}>

                    <Typography
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            px: 1.5,
                            mb: 1,
                        }}
                    ><i className="fa-solid fa-house-tsunami" style={{ color: "#215da9", fontSize: "1.7rem" }}></i>
                        <IconButton>
                            <CloseIcon onClick={() => setMobileOpen(false)} />
                        </IconButton>
                    </Typography>

                    <Divider sx={{ mb: 1 }} />

                    <List component="nav" sx={{ flexGrow: 1 }}>
                        {navItems.map((item, idx) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton
                                    onClick={() => handleNavigation(item, idx)}
                                    selected={selectedIndex === idx}
                                    sx={{
                                        borderRadius: 2,
                                        mb: 0.5,
                                        "&:hover": {
                                            backgroundColor: "rgba(0,0,0,0.05)",
                                        },
                                    }}
                                >
                                    <ListItemIcon sx={{ color: "info.dark" }} >
                                        {item === "Home" && <HomeIcon />}
                                        {item === "Find Stays" && <TravelExploreIcon />}
                                        {item === "Become a Host" && <AddBusinessIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 2 }} />

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            px: 1,
                        }}
                    >
                        {!currUser ? (
                            <>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        borderRadius: 2,
                                        py: 1,
                                        textTransform: "none",
                                        fontWeight: 600,
                                    }}
                                    onClick={() => handleModeChange("login")}
                                >
                                    Log In
                                </Button>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        borderRadius: 2,
                                        py: 1,
                                        textTransform: "none",
                                        fontWeight: 600,
                                    }}
                                    onClick={() => handleModeChange("signup")}
                                >
                                    Sign Up
                                </Button>
                            </>
                        ) : (
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    borderRadius: 2,
                                    py: 1,
                                    textTransform: "none",
                                    fontWeight: 600,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 1,
                                }}
                                onClick={handleLogout}
                            >
                                Logout
                                <LogoutIcon fontSize="small" />
                            </Button>
                        )}
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}