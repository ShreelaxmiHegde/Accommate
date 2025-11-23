import { 
    Box, 
    Typography, 
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import KitchenIcon from "@mui/icons-material/Kitchen";
import BedIcon from "@mui/icons-material/Bed";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import HotTubIcon from "@mui/icons-material/HotTub";
import SecurityIcon from "@mui/icons-material/Security";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";


export default function AmenitiesSection() {

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

    return (
        <Box sx={{ mt: 6, mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, }} >
                Amenities & Facilities
            </Typography>

            <List>
                {amenities.map((a) =>
                    <ListItem>
                        <ListItemIcon sx={{ color: "primary.main" }}> {a.icon} </ListItemIcon>
                        <ListItemText primary={a.label} />
                    </ListItem>,
                )}
            </List>
        </Box>
    );
}
