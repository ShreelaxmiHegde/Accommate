import { useEffect, useState } from "react"
import { fetchListings } from "../api/listing"
import ListingCarousel from "../components/listingsExplore/ListingCarousel"
import { Box } from "@mui/material"
import ListingExploreSkeleton from "../components/loaders/ListingExploreSkeleton"
import SearchBar from "../components/dashboard/SearchBar"
import NoListingsFound from "./NoListing"

export default function ListingExplore() {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://accommate-1.onrender.com/listings")
            .then(res => res.json())
            .then(data => console.log("Backend says:", data))
            .catch(err => console.error("Connection failed", err));
    }, []);

    const getListings = async () => {
        try {
            setLoading(true); //start loading
            let data = await fetchListings();
            setListings(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false); //stop loading
        }
    }

    useEffect(() => {
        getListings();
    }, []);

    if (!loading && listings.length === 0) {
        return <NoListingsFound onRetry={getListings} />
    }

    return (
        <>
            <Box sx={{ paddingTop: "5rem" }}>
                <SearchBar />

                {loading ?
                    (<ListingExploreSkeleton />)
                    :
                    (<ListingCarousel listings={listings} />)
                }
            </Box>
        </>
    )
}