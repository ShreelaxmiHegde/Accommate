import { Grid } from "@mui/material";
import ListingFacility from "../components/listingPage/ListingFacility"
import ListingHead from "../components/listingPage/ListingHead"
import ListingDetails from "../components/listingPage/ListingDetails"
import ListingReview from "../components/listingPage/ListingReview"
import HostDetailsCard from "../components/listingPage/HostDetailCard"
import AddReviewCard from "../components/listingPage/AddReviewCard"
import Box from '@mui/material/Box';


export default function ResponsiveGrid() {
    const children = [
        // <ListingDetails />,
        <ListingFacility />,
        <ListingReview />,
        <HostDetailsCard />,
        <AddReviewCard />
    ]

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <ListingHead />
                <ListingDetails />
                <Grid 
                    container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 2, sm: 8, md: 12 }}
                    sx={{width: "90%", mx: "auto"}}
                >
                    {children.map((child, index) => (
                        <Grid size={{ xs: 2, sm: 6 }} key={index}>
                            {child}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}
