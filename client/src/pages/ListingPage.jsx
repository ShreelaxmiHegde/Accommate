import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../api/axios"
import {
    Box,
    CardMedia
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
        <ListingHead title={listing.title} location={listing.location} />,
        <CardMedia
            component="img"
            height={300}
            image={listing.image.url}
            alt={listing.image.title}
        />,
        <ListingDetails desc={listing.desc} price={listing.price} />,
        <ListingReview reviews={listing.reviews} />,
        <HostDetailsCard />,
    ]

    return (
        <>
            <Box>
                {children.map((child, index) => (
                    <Box key={index} sx={{ mt: 5, mb: 5 }}>
                        {child}
                    </Box>
                ))}
            </Box>
        </>
    );
}
