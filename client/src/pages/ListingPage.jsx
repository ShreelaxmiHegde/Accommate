import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { deleteListing, fetchListing } from "../api/listing.js"
import { Box, Stack, Button } from "@mui/material"
import CircularLoader from "../components/loaders/CircularLoader"
import NoListingFound from "./NoListingFound.jsx"
import { useFlash } from "../context/FlashContext.jsx";
import { useAuth } from "../context/AuthContext.jsx"
import ListingDetails from "../components/listingPage/ListingDetails"
import FacilityReview from "../components/listingPage/Facility&Review"
import HostDetailAddReview from "../components/listingPage/HostDetail&AddReview.jsx"

export default function ListingPage() {
    const [listing, setListing] = useState({});
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState(); //add review lift state up
    const navigate = useNavigate();
    const { id } = useParams();
    const { showFlash } = useFlash();
    const { currUser } = useAuth();

    const getListing = async () => {
        try {
            setLoading(true);
            let data = await fetchListing(id);
            setListing(data);
            setReviews(data.reviews);
        } catch (err) {
            setListing(null)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getListing();
    }, [id]);

    if (!listing && !loading) {
        return <NoListingFound />;
    }

    if (loading) {
        return <CircularLoader msg={"Loading your listing..."} />
    }

    const handleEditClick = (evt) => {
        evt.preventDefault();
        try {
            navigate(`/listings/${listing._id}/edit`, { state: { listing } });
        } catch (err) {
            console.log("Error editing listing:", err);
        }
    }

    const handleDeleteClick = async (evt) => {
        evt.preventDefault();
        try {
            if (currUser && currUser._id === listing.owner._id) {
                let data = await deleteListing(id);

                if (data.success) {
                    showFlash("success", "Listing Deleted Successfully!");
                    navigate("/explore");
                }
            } else {
                showFlash("error", "You are not authorized to delete this listing.");
            }
        } catch (err) {
            console.error("Error editing listing:", err.message);
            showFlash("error", `${err.message}! Listing Deletion Failed.`);
        }
    }

    const onReviewCreate = (newReview) => {
        setReviews(prev => [...prev, newReview]);
    }

    const onReviewUpdate = (reviewId, updatedReview) => {
        setReviews(prev =>
            prev.map(r =>
                r._id === reviewId ? updatedReview : r
            )
        );
    }

    const onReviewDelete = (reviewId) => {
        setReviews(prev =>
            prev.filter(r => r._id !== reviewId)
        );
    }

    return (
        <Box sx={{ maxWidth: 1200, mx: "auto", py: 4, px: 2 }}>
            <ListingDetails listing={listing} />
            <FacilityReview 
                listing={listing} 
                reviews={reviews}
                onUpdate={onReviewUpdate}
                onDelete={onReviewDelete}
            />
            <HostDetailAddReview listing={listing} onReviewCreate={onReviewCreate} />

            {currUser && currUser._id === listing.owner._id && (
                <Stack gap={2} direction="row" justifyContent="center" sx={{ mb: 5 }}>
                    <Button
                        variant="contained"
                        onClick={handleEditClick}
                    >Edit Listing</Button>
                    <Button
                        variant="outlined"
                        onClick={handleDeleteClick}
                    >Delete Listing</Button>
                </Stack>
            )}
        </Box>
    );
}