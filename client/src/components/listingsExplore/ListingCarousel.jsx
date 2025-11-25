import ListingCard from "./ListingCard"
import { Box, Grid } from "@mui/material";

export default function ListingCarousel({ listings }) {
    return (
        <Grid container wrap="wrap"
            sx={{
                width: "90%",
                mx: "auto",
                mt: "3rem",
                justifyContent: "center",
                alignItems: "center"
            }}>
            {listings.map((listing) => (
                <Box sx={{
                    width: { xs: 250, md: 210 },
                    marginRight: 2,
                    my: 5,
                }}>
                    <ListingCard listing={listing} />
                </Box >
            ))}
        </Grid>
    )
}