import {
    Divider,
    Stack,
    Typography,
    Rating
} from '@mui/material';

export default function ListingHead({title, location}) {
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
            <Typography
                variant="h4"
                sx={{
                    fontSize: { xs: "1.4rem", md: "2rem" },
                    fontWeight: 700,
                }}
            >
                {title}
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    color: "text.secondary",
                    maxWidth: "300px",
                }}
            >
                {location}
            </Typography>

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