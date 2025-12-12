import { 
    Box, 
    Stack, 
    Typography, 
    Paper,
    Divider,
    Avatar
} from "@mui/material";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import DirectionsIcon from '@mui/icons-material/Directions';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RoomIcon from "@mui/icons-material/MeetingRoom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PaymentsIcon from "@mui/icons-material/Payments";

export default function ListingDetails({ listing }) {
    return (
        <Paper
            elevation={2}
            sx={{
                borderRadius: 4,
                overflow: "hidden",
                mb: 4,
            }}
        >
            <Box
                component="img"
                src={listing.image?.url}
                alt={listing.title}
                sx={{
                    width: "100%",
                    height: 400,
                    objectFit: "cover",
                }}
            />

            <Box sx={{ p: 4, display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <Box sx={{ mb: 2, width: { xs: "100%", sm: "100%", md: "50%" }}}>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" } }}>
                        {listing.title}
                    </Typography>

                    <Typography variant="subtitle1" sx={{ color: "text.secondary", display: "flex", mt: 1 }}>
                        <LocationPinIcon sx={{ color: "error.main" }} />{listing.stateCity}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: "text.secondary", display: "flex", mt: 1 }}>
                        <DirectionsIcon sx={{ color: "info.main" }} />{listing.address}
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 700, mt: 2, fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.8rem" } }}>
                        About this accommodation
                    </Typography>
                    <Typography sx={{ lineHeight: 1.7 }}>
                        {listing.desc}
                    </Typography>
                </Box>

                <Paper
                    elevation={2}
                    sx={{
                        borderRadius: 4,
                        bgcolor: "white",
                        width: { xs: "100%", sm: "100%", md: "40%" },
                        ml: {md:3}
                    }}
                >
                    <Typography variant="h6" sx={{ ml: 2, mt: 2, fontWeight: 800 }}>
                        Room Details
                    </Typography>
                    <Divider sx={{ my: 1 }} />

                    <Stack spacing={2} sx={{ ml: 2, mb: 1 }}>
                        <DetailRow label="Price" value={<span style={{ display: "flex", alignItems: "center" }}>
                            <CurrencyRupeeIcon sx={{ fontSize: "1rem" }} />
                            {listing.price} / month
                        </span>} icon={<PaymentsIcon />} />
                        <DetailRow label="Capacity" value={`${listing.capacity} persons`} icon={<RoomIcon />} />
                        <DetailRow label="Nearest Campus" value={listing.nearestCampus} icon={<LocationOnIcon />} />
                        <DetailRow label="Property Type" value={listing.propertyType} icon={<HomeWorkIcon />} />
                    </Stack>
                </Paper>
            </Box>
        </Paper>
    );
}

const DetailRow = ({ label, value, icon }) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5}}>
        <Avatar
            sx={{
                bgcolor: "primary.main",
                width: 32,
                height: 32,
                fontSize: 18,
            }}
        >
            {icon}
        </Avatar>
        <Box>
            <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                {label}
            </Typography>
            <Typography sx={{ fontWeight: 700 }}>{value}</Typography>
        </Box>
    </Box>
);
