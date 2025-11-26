import { useEffect, useState } from "react"
import api from "../api/axios"
import ListingCarousel from "../components/listingsExplore/ListingCarousel"
import { Box } from "@mui/material"
import ListingExploreSkeleton from "../components/loaders/ListingExploreSkeleton"
import SearchBar from "../components/dashboard/SearchBar"

export default function ListingExplore() {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchListings = async () => {
        try {
            setLoading(true); //start loading
            let res = await api.get("/listings");
            setListings(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false); //stop loading
        }
    }

    useEffect(() => {
        fetchListings();
    }, []);

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