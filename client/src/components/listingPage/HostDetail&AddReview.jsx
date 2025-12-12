import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    Card,
    Avatar,
    Typography,
    Stack,
    Button,
    Paper,
    CardContent,
    Rating,
    TextField
} from "@mui/material"
import { addReview } from "../../api/review.js";
import { useFlash } from "../../context/FlashContext.jsx";

export default function HostDetailAddReview({ listing }) {
    const { showFlash } = useFlash();
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    let reviewData = {
        review: {
            rating: rating,
            comment: review
        }
    }

    const onReviewSubmit = async() => {
        try {
            if(currUser) {
                let data = await addReview(listing._id, reviewData);
    
                if (data.success) {
                    showFlash("success", "Review Created Successfully!");
                    navigate(`/explore/listings/${listing._id}`);
                }
            } else {
                return showFlash("error", "Please log in before creating a review.");
            }
        } catch (err) {
            showFlash("error", "Review creation failed!");
        }
    }

    return (
        <Paper
            elevation={2}
            sx={{
                borderRadius: 4,
                overflow: "hidden",
                mb: 4,
                py: 4, px: 4,
                gap: 2,
                display: "flex",
                flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" }
            }}
        >
            <Card
                sx={{
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 3,
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around"
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar sx={{ width: 56, height: 56 }} />

                    <Stack spacing={0.4}>
                        <Typography variant="h6" fontWeight={600}>
                            {listing.owner.username}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Host since 2021
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            4 Active Listings
                        </Typography>
                    </Stack>
                </Stack>

                <Stack spacing={1.5} mt={2}>
                    <Button variant="contained" fullWidth>
                        Contact Host
                    </Button>
                    <Button variant="outlined" fullWidth>
                        View All Listings
                    </Button>
                </Stack>
            </Card>

            <Card sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
                width: { xs: "100%", md: "50%" }
            }}>
                <CardContent>
                    <Typography variant="h6" fontWeight={600} mb={1}>
                        Add Your Review
                    </Typography>
                    
                    <Stack spacing={2}>
                        <Rating
                            value={rating}
                            onChange={(e, val) => setRating(val)}
                            size="large"
                        />

                        <TextField
                            multiline
                            minRows={3}
                            fullWidth
                            placeholder="Share your experience..."
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            slotProps={{
                                htmlInput: {
                                    minLength: 3,
                                    maxLength: 500
                                }
                            }}
                        />

                        <Button
                            variant="contained"
                            fullWidth
                            disabled={!rating || review.trim() === ""}
                            onClick={onReviewSubmit}
                        >
                            Submit Review
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Paper>
    );
}
