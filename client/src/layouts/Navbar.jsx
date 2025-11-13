import React from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const Navbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fontDefStyle = {
    textTransform: "none", 
    fontWeight: 500
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={3}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", color: "#2563eb", fontWeight: 700 }}>
        <Typography variant="h5" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <i className="fa-solid fa-house-tsunami" style={{ color: "#2563eb", fontSize: "1.7rem" }}></i> <span>Accommate</span>
        </Typography>

        <Tabs value={value} onChange={handleChange} centered>
          <Tab icon={<HomeIcon />} sx={fontDefStyle}  label="Home" />
          <Tab icon={<TravelExploreIcon />} label="Find Stays" sx={fontDefStyle}  />
          <Tab icon={<AddBusinessIcon />} label="Become a Host" sx={fontDefStyle}  />
        </Tabs>

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" sx={fontDefStyle} >Login</Button>
          <Button variant="contained" sx={fontDefStyle} >Sign Up</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
