import { Grid } from "@mui/material";
import ListingFacility from "./ListingFacility"
import ListingHead from "./ListingHead"
import ListingDetails from "./ListingDetails"
import ListingReview from "./ListingReview"
import HostDetailsCard from "./HostDetailCard"
import AddReviewCard from "./AddReviewCard"
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
