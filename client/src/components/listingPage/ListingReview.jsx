import {
    Box,
    Typography,
    Rating,
    Stack,
    Paper
} from "@mui/material";


export default function ListingReview() {

    const reviews = [
        {
            name: "Aarav Patel",
            rating: 5,
            review:
                "Amazing stay! The room was clean and well-maintained, and the host responded instantly. Perfect for students looking for a peaceful environment."
        },
        {
            name: "Meera Sharma",
            rating: 4,
            review:
                "Great value for money. The location is close to my college and the amenities were exactly as shown. Just wish the kitchen area was a bit bigger."
        },
        {
            name: "Rohan Desai",
            rating: 5,
            review:
                "Super comfortable and safe. The Wi-Fi speed was excellent which really helped with my online classes. Definitely recommended."
        },
        {
            name: "Ishita Verma",
            rating: 3,
            review:
                "Decent experience. The room was okay and the landlord was polite, but water supply had issues during peak hours."
        },
        {
            name: "Vikram Singh",
            rating: 4,
            review:
                "Very convenient and the listing matched the photos. The terrace area was a nice bonus. Had a pleasant stay overall."
        }
    ];



    return (
        <Box
            sx={{
                mt: 6,
                width: "90%",
                mx: "auto",
                px: { xs: 2, md: 0 }
            }}
        >
            {/* Section Heading */}
            <Typography
                variant="h5"
                sx={{ fontWeight: 700, mb: 2 }}
            >
                Reviews
            </Typography>

            {reviews.map((review) =>
                <Paper elevation={1}
                    sx={{
                        p: 2,
                        mb: 2,
                        borderRadius: 3,
                        bgcolor: "background.paper"
                    }}
                >
                    <Stack sx={{ mb: 1 }}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {/* Reviewer Name */}
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {review.name}
                        </Typography>

                        <Rating value={review.rating} readOnly size="small" />
                    </Stack>

                    {/* Review Text */}
                    <Typography variant="body2" sx={{ lineHeight: 1.6, color: "text.secondary" }} >
                        {review.review}
                    </Typography>
                </Paper>
            )}
        </Box>
    )
}