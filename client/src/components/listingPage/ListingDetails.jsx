import { Box, Stack, Typography, Button, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ListingDetails() {
    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{
                width: "100%",
                maxWidth: "1100px",
                mx: "auto",
                mt: 4,
                px: { xs: 2, md: 0 },
            }}
        >

            {/* LEFT SECTION — About + Address */}
            <Stack flex={1} spacing={3}>

                {/* About / Description */}
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }} >
                        About this accommodation
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "1rem",
                            color: "text.secondary",
                            lineHeight: 1.6
                        }}
                    >
                        This is a modern and spacious accommodation located in a
                        peaceful residential area. Designed for comfort, the
                        property includes well-maintained rooms, high-quality
                        furnishings, reliable water supply, and easy access to
                        nearby colleges, eateries, and public transport.
                    </Typography>
                </Box>

                {/* Address */}
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

            {/* RIGHT SECTION — Price + CTA */}
            <Paper elevation={3}
                sx={{
                    p: 3,
                    width: { xs: "50%", md: "170px" },
                    borderRadius: "20px",
                    height: "fit-content",
                    position: { md: "sticky" },
                    top: { md: "80px" }   // makes it sticky on desktop
                }}
            >
                {/* Price */}
                <Typography variant="h6" sx={{ fontWeight: 700 }} >
                    ₹6,000 / month
                </Typography>

                <Typography
                    sx={{
                        fontSize: "0.9rem",
                        color: "text.secondary",
                        mb: 2
                    }}
                >
                    (excluding utilities)
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
