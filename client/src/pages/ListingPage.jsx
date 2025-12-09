import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../api/axios"
import {
    Box,
    CardMedia,
    Button,
    Stack
} from "@mui/material"
import ListingHead from "../components/listingPage/ListingHead"
import ListingDetails from "../components/listingPage/ListingDetails"
import ListingReview from "../components/listingPage/ListingReview"
import HostDetailsCard from "../components/listingPage/HostDetailCard"
import CircularLoader from "../components/loaders/CircularLoader"
import { useFlash } from "../context/FlashContext.jsx";
import { useAuth } from "../context/AuthContext.jsx"

export default function ListingPage() {
    const [listing, setListing] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const { showFlash } = useFlash();
    const { currUser } = useAuth();

    const fetchListing = async () => {
        try {
            setLoading(true);
            let res = await api.get(`/listings/${id}`);
            setListing(res.data.listing);
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchListing();
    }, [id]);

    if (loading) {
        return <CircularLoader />
    }

    const children = [
        <ListingHead title={listing.title} location={listing.location} />, //statecity
        <CardMedia
            component="img"
            height={300}
            image={listing.image.url}
            alt={listing.image.title}
        />,
        <ListingDetails listing={listing} />,
        <ListingReview reviews={listing.reviews} />,
        <HostDetailsCard listing={listing} />,
    ]

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
                let res = await api.delete(`/listings/${listing._id}`);
                console.log(res)
                if (res.data.success) {
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

    return (
        <>
            <Box>
                {children.map((child, index) => (
                    <Box key={index} sx={{ mt: 5, mb: 5 }}>
                        {child}
                    </Box>
                ))}

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
        </>
    );
}
