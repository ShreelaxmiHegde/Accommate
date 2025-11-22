import { Box, Stack, Typography, Grid, Paper } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import KitchenIcon from "@mui/icons-material/Kitchen";
import BedIcon from "@mui/icons-material/Bed";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HotTubIcon from "@mui/icons-material/HotTub";
import SecurityIcon from "@mui/icons-material/Security";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import { useState } from "react";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

export default function AmenitiesSection() {
    const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

    const amenities = [
        { icon: <WifiIcon />, label: "Free Wi-Fi" },
        { icon: <BedIcon />, label: "Fully Furnished" },
        { icon: <AcUnitIcon />, label: "Air Conditioning" },
        { icon: <KitchenIcon />, label: "Kitchen Access" },
        { icon: <LocalLaundryServiceIcon />, label: "Laundry Service" },
        { icon: <HotTubIcon />, label: "Hot Water" },
        { icon: <SecurityIcon />, label: "24/7 Security" },
        { icon: <DirectionsWalkIcon />, label: "Near College" },
    ];

    const Demo = styled('div')(({ theme }) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
}));

    return (
        <Box sx={{ mt: 6, mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }} >
                Amenities & Facilities
            </Typography>

            {/* {amenities.map((item, idx) => )} */}
            {/* <Box sx={{ fontSize: "2rem", color: "primary.main" }}>
                {item.icon}
            </Box>

            <Typography sx={{ fontSize: "medium", fontWeight: 500, color: "text.secondary" }} >
                {item.label}
            </Typography> */}
            <Grid
                size={{
                    xs: 12,
                    md: 6,
                }}
            >
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                </Typography>
                <Demo>
                    <List dense={dense}>
                        {/* {generate( */}
                            <ListItem>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="text"
                                    // secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>,
                        {/* )} */}
                    </List>
                </Demo>
            </Grid>
        </Box>
    );
}
