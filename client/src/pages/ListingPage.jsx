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

export default function ListingPage() {
    const [listing, setListing] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

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

    return (
        <>
            <Box>
                {children.map((child, index) => (
                    <Box key={index} sx={{ mt: 5, mb: 5 }}>
                        {child}
                    </Box>
                ))}

                <Stack gap={2} direction="row" justifyContent="center" sx={{ mb: 5 }}>
                    <Button
                        variant="contained"
                        onClick={handleEditClick}
                    >Edit Listing</Button>
                    <Button variant="outlined">Delete Listing</Button>
                </Stack>
            </Box>
        </>
    );
}
