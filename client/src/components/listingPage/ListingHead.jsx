import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function ListingHead() {
    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 1.5, md: 3 }}
            alignItems={{ xs: "flex-start", md: "center" }}
            divider={
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ display: { xs: "none", md: "block" } }}
                />
            }
            sx={{
                p: { xs: 1, md: 2 },
                width: "90%",
                mx: "auto",
                mt: 2,
            }}
        >
            {/* Heading */}
            <Typography
                variant="h4"
                sx={{
                    fontSize: { xs: "1.4rem", md: "2rem" },
                    fontWeight: 700,
                }}
            >
                Listing Heading
            </Typography>

            {/* Address */}
            <Typography
                variant="h6"
                sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    color: "text.secondary",
                    maxWidth: "300px",
                }}
            >
                Address, City
            </Typography>

            {/* Rating */}
            <Rating
                name="read-only"
                size="large"
                value={4}
                readOnly
                sx={{
                    ml: { xs: 0, md: "auto" },
                    mt: { xs: 0.5, md: 0 },
                }}
            />
        </Stack>
    )
}