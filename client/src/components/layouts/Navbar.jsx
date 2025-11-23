import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import MenuIcon from "@mui/icons-material/Menu";
import AuthDialog from "../../pages/AuthDialog";

export default function Navbar() {
  const navItems = ["Home", "Find Stays", "Become a Host"];
  const [initialMode, setInitialMode] = useState("");
  const [authOpen, setAuthOpen] = useState(false);

  const handleModeChange = (mode) => {
    setInitialMode(mode);
    setAuthOpen(true);
  }

  const fontDefStyle = {
    textTransform: "none", 
    fontWeight: 500
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={3} sx={{backgroundColor:"white"}}>
      <Toolbar sx={{ display: "flex", justifyContent:{xs:"space-between", sm:"space-around"} , alignItems: "center", color: "#215da9" }}>
        <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 1, fontWeight: 900 }}>
          <i className="fa-solid fa-house-tsunami" style={{ color: "#215da9", fontSize: "1.7rem" }}></i>Accommate
        </Typography>

        <Tabs centered sx={{display: {xs:"none", sm:"flex"}, gap:2}}>
          <Tab icon={<HomeIcon />} sx={fontDefStyle}  label="Home" component={Link} to="/" />
          <Tab icon={<TravelExploreIcon />} label="Find Stays" sx={fontDefStyle} component={Link} to="/explore" />
          <Tab icon={<AddBusinessIcon />} label="Become a Host" sx={fontDefStyle} component={Link} to="/listing" />
        </Tabs>                  

        <Box direction="row" spacing={2} sx={{display: {xs:"none", sm:"flex"}, gap:2}}>
          <Button variant="outlined" sx={fontDefStyle} onClick={() => handleModeChange("login")}>Log In</Button>
          <Button variant="contained" sx={fontDefStyle} onClick={() => handleModeChange("signup")}>Sign Up</Button>
        </Box>

        <IconButton sx={{ display: { xs: "flex", sm: "none" } }} onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}
          sx={{
            "& .MuiDrawer-paper": { width: 200, height: 250, paddingTop: 2 },
          }}>

          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={handleDrawerToggle}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
            <Box sx={{display: "flex", flexDirection: "column", gap: 1, alignItems: "start", paddingLeft: 2}}>
              <Button variant="outlined" sx={fontDefStyle} onClick={() => handleModeChange("login")}>Log In</Button>
              <Button variant="contained" sx={fontDefStyle} onClick={() => handleModeChange("signup")}>Sign Up</Button>
            </Box>
          </List>
        </Drawer>

        <AuthDialog open={authOpen} initialMode={initialMode} onClose={() => setAuthOpen(false)} /> 
      </Toolbar>
    </AppBar>
  );
};