import {
    Box,
    Typography,
    Rating,
    Stack,
    Paper,
    Grid,
    Avatar,
    Chip
} from "@mui/material";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WifiIcon from '@mui/icons-material/Wifi';
import ChairIcon from '@mui/icons-material/Chair';
import ShowerIcon from '@mui/icons-material/Shower';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

export default function FacilityReview({ listing }) {

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    }

    const iconMap = {
        "Wi-Fi": <WifiIcon />,
        "Furnished": <ChairIcon />,
        "24/7 Water": <WaterDropIcon />,
        "Private Bathroom": <ShowerIcon />,
        "AC": <HeatPumpIcon />,
        "Kitchen": <KitchenIcon />,
        "Laundry": <LocalLaundryServiceIcon />
    }

    return (
        <Paper
            elevation={2}
            sx={{
                borderRadius: 4,
                overflow: "hidden",
                mb: 4,
                p: 4,
                gap: 2
            }}
        >
            <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Amenities & Facilities
                </Typography>

                <Box sx={{ 
                    display: "flex", 
                    flexDirection: "row", 
                    flexWrap: "wrap",
                    gap: 2
                }} >
                    {listing.facilities.map((f, idx) => (
                        <Chip key={idx} variant="outlined" color="info" label={f} icon={iconMap[f]} />
                    ))}
                </Box>
            </Box>

            <Box sx={{ mt: 6 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Reviews
                </Typography>

                <Grid container spacing={3}>
                    {listing.reviews?.length > 0 ? (
                        listing.reviews.map((review, i) => (
                            <Grid size={{ xs: 12, md: 6 }} key={i}>
                                <Paper
                                    elevation={1}
                                    sx={{
                                        p: 2,
                                        borderRadius: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 1.5,
                                    }}
                                >
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Avatar />

                                        <Box>
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                {review.author.username}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {formatDate(review.createdAt)}
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                        {review.comment}
                                    </Typography>

                                    <Typography variant="body1">
                                        <Rating name="read-only" value={review.rating} readOnly size="small" />
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))
                    ) : (
                        <Typography color="text.secondary" sx={{ ml: 1 }}>
                            No reviews yet. Be the first to review this listing!
                        </Typography>
                    )}
                </Grid>
            </Box>
        </Paper>
    )
}