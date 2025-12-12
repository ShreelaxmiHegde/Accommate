import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Typography,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LogoutIcon from '@mui/icons-material/Logout';
import AuthDialog from "../../pages/AuthDialog";
import { useAuth } from "../../context/AuthContext";
import { logout } from "../../api/user";
import { useFlash } from '../../context/FlashContext';
import NavDrawer from "./NavDrawer";

export default function Navbar() {
  const [initialMode, setInitialMode] = useState("");
  const [authOpen, setAuthOpen] = useState(false);
  const { currUser, setCurrUser } = useAuth();
  const { showFlash } = useFlash();

  const handleModeChange = (mode) => {
    setInitialMode(mode);
    setAuthOpen(true);
  }

  const fontDefStyle = {
    textTransform: "none",
    fontWeight: 500
  };

  const handleLogout = async (evt) => {
    evt.preventDefault();

    try {
      await logout();
      setCurrUser(null);
      showFlash("success", "You Logged Out Successfully!");
    } catch (err) {
      showFlash("error", `Logout was Failed! ${err.message}`);
    }
  }

  return (
    <AppBar position="sticky" color="transparent" elevation={3} sx={{ backgroundColor: "white" }}>
      <Toolbar sx={{ display: "flex", justifyContent: { xs: "space-between", sm: "space-around" }, alignItems: "center", color: "#215da9" }}>
        <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 1, fontWeight: 900 }}>
          <i className="fa-solid fa-house-tsunami" style={{ color: "#215da9", fontSize: "1.7rem" }}></i>Accommate
        </Typography>

        <Tabs value={false} centered sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          <Tab icon={<HomeIcon />} sx={fontDefStyle} label="Home" component={Link} to="/" />
          <Tab icon={<TravelExploreIcon />} label="Find Stays" sx={fontDefStyle} component={Link} to="/explore" />
          <Tab icon={<AddBusinessIcon />} label="Become a Host" sx={fontDefStyle} component={Link} to="/listings/new" />
        </Tabs>

        <Box direction="row" spacing={2} sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {!currUser && (
            <>
              <Button variant="outlined" sx={fontDefStyle} onClick={() => handleModeChange("login")}>Log In</Button>
              <Button variant="contained" sx={fontDefStyle} onClick={() => handleModeChange("signup")}>Sign Up</Button>
            </>
          )}

          {currUser && (
            <Button variant="contained" sx={fontDefStyle}
              onClick={handleLogout} >
              Logout<LogoutIcon sx={{ fontSize: "medium", ml: "0.3rem" }} />
            </Button>
          )}
        </Box>

        <NavDrawer handleModeChange={handleModeChange} handleLogout={handleLogout} />

        <AuthDialog open={authOpen} initialMode={initialMode} onClose={() => setAuthOpen(false)} />
      </Toolbar>
    </AppBar>
  );
};