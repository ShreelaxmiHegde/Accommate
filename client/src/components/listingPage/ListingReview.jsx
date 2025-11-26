import {
    Box,
    Typography,
    Rating,
    Stack,
    Paper
} from "@mui/material";
import ListingFacility from "./ListingFacility"

export default function ListingReview({ reviews }) {
    return (
        <Box 
            sx={{
                width: "90%",
                display: "flex",
                flexDirection: {xs:"column", md:"row"},
                justifyContent: "space-around",
                mx: "auto",
                mt: 5
            }}
        >
            <ListingFacility />
            <Box
                sx={{
                    mt: 6,
                    px: { xs: 2, md: 0 }
                }}
            >
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
                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                @{review.author.username}
                            </Typography>

                            <Rating value={review.rating} readOnly size="small" />
                        </Stack>

                        <Typography variant="body2" sx={{ lineHeight: 1.6, color: "text.secondary" }} >
                            {review.comment}
                        </Typography>
                    </Paper>
                )}
            </Box>
        </Box>
    )
}