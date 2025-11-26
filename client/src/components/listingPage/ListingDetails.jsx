import { Box, Stack, Typography, Button, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function ListingDetails({desc, price}) {
    return (
        <Stack sx={{
                width: "90%",
                mx: "auto",
                mt: 4,
                px: { xs: 2, md: 0 },
                display: "flex",
                flexDirection:{xs: "column", md:"row"},
                justifyContent: "space-around",
            }}
        >
            <Stack sx={{mb: 4}}>
                <Box sx={{mb:4}}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }} >
                        About this accommodation
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "1rem",
                            color: "text.secondary",
                            lineHeight: 1.6
                        }}
                    > {desc} </Typography>
                </Box>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }} >
                        Address
                    </Typography>

                    <Stack direction="row" spacing={1.5} alignItems="center" >
                        <LocationOnIcon color="primary" />
                        <Typography sx={{ fontSize: "1rem", color: "text.secondary" }} >
                            45 MG Road, Near XYZ College, Bengaluru
                        </Typography>
                    </Stack>
                </Box>
            </Stack>

            <Paper elevation={3}
                sx={{
                    p: 3,
                    width: { xs: "90%", md: "250px" },
                    borderRadius: "20px",
                    height: "fit-content",
                }}
            >
                <Typography variant="h6" 
                    sx={{ 
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center" 
                    }} >
                    <CurrencyRupeeIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                    {price} / month
                </Typography>

                <Typography
                    sx={{
                        fontSize: "0.9rem",
                        color: "text.secondary",
                    }}
                >
                    (Excluding utilities)
                </Typography>
                <Typography
                    sx={{
                        fontSize: "0.9rem",
                        color: "text.secondary",
                    }}
                >
                    No booking fee
                </Typography>
                <Typography
                    sx={{
                        fontSize: "0.9rem",
                        color: "text.secondary",
                        mb: 2
                    }}
                >
                    Free cancellation before 24 hours
                </Typography>

                <Button variant="contained"
                    sx={{
                        py: 1.3,
                        fontSize: "1rem",
                        borderRadius: "10px"
                    }}
                >
                    Book Now
                </Button>
            </Paper>
        </Stack>
    );
}
