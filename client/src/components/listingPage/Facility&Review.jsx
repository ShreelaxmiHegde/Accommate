import {
    Box,
    Typography,
    Rating,
    Stack,
    Paper,
    Grid,
    Avatar,
    Chip,
    TextField
} from "@mui/material";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WifiIcon from '@mui/icons-material/Wifi';
import ChairIcon from '@mui/icons-material/Chair';
import ShowerIcon from '@mui/icons-material/Shower';
import HeatPumpIcon from '@mui/icons-material/HeatPump';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import { editReview, deleteReview } from "../../api/review";
import { useState } from "react";
import { useFlash } from "../../context/FlashContext.jsx";
import { useAuth } from "../../context/AuthContext";

export default function FacilityReview({ listing, reviews, onUpdate, onDelete }) {
    const [editReviewId, setEditReviewId] = useState(null);
    const [comment, setComment] = useState(listing.reviews);
    const { showFlash } = useFlash();
    const { currUser } = useAuth();
    const [loading, setLoading] = useState(false);
    

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

    const handleEditClick = (review) => {
        setEditReviewId(review._id);
        setComment(review.comment);
    }

    const handleSave = async (evt, id, reviewId) => {
        evt.preventDefault();

        let review = {
            comment: comment
        }

        try {
            setLoading(true);
            let res = await editReview(id, reviewId, review);
            onUpdate(reviewId, res.review);
            setEditReviewId(null);
            showFlash("success", "Review updated");
        } catch (err) {
            console.log(err);
            showFlash("error", "Review updation failed");
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = async (evt, id, reviewId) => {
        evt.preventDefault();

        try {
            await deleteReview(id, reviewId);
            onDelete(reviewId);
            showFlash("success", "Review deleted successfully");
        } catch (err) {
            console.log(err)
            showFlash("error", "Review deletion failed");
        }
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
                    {reviews?.length > 0 ? (
                        reviews.map((review, i) => (
                            <Grid key={i}>
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

                                    {editReviewId === review._id ? (
                                        <Box>
                                            <TextField
                                                multiline
                                                value={comment}
                                                variant="outlined"
                                                onChange={e => setComment(e.target.value)}
                                            />
                                        </Box>
                                    ) : (
                                        <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                            {review.comment}
                                        </Typography>
                                    )}

                                    <Typography variant="body1">
                                        <Rating name="read-only" value={review.rating} readOnly size="small" />
                                    </Typography>

                                    {currUser && currUser._id === review.author._id && (
                                        <Box sx={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
                                            {editReviewId === review._id ? (
                                                <Fab size="small"
                                                    onClick={(e) => handleSave(e, listing._id, review._id)}
                                                ><SaveIcon /></Fab>
                                            ) : (
                                                <Fab size="small" onClick={() => handleEditClick(review)}><EditIcon /></Fab>
                                            )}

                                            {loading && editReviewId === review._id && (
                                                <CircularProgress
                                                    size={52}
                                                    thickness={2}
                                                    sx={{
                                                        position: "absolute",
                                                        top: "-10%",
                                                        left: "-3%"
                                                    }}
                                                />
                                            )}

                                            <Fab
                                                size="small"
                                                color="error"
                                                onClick={(e) => handleDelete(e, listing._id, review._id)}
                                            ><DeleteIcon /></Fab>
                                        </Box>
                                    )}
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