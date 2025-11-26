import {
    Box,
    Grid,
    Skeleton
} from '@mui/material';

export default function ListingExploreSkeleton() {
    return (
        <Grid container wrap="wrap"
            sx={{
                width: "90%",
                mx: "auto",
                justifyContent: "center",
                alignItems: "center"
            }}>
            {Array.from(new Array(15)).map((item, index) => (
                <Box key={index}
                    sx={{
                        width: { xs: 170, md: 210 },
                        marginRight: 2,
                        my: 5,
                    }}>

                    <Skeleton variant="rectangular" height={118} sx={{ width: { xs: 170, md: 210 } }} />

                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton width="60%" />
                        <Skeleton />
                    </Box>
                </Box>
            ))}
        </Grid>
    );
}
