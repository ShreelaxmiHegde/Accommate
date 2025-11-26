import {
    Card,
    Avatar,
    Typography,
    Stack,
    Button,
    Box
} from "@mui/material";
import AddReviewCard from "./AddReviewCard";

export default function HostDetailsCard() {
    const host = {
        name: "Rahul Mehta",
        joined: "2021",
        listings: 3,
        photo: "/host.jpg",
    };

    return (
        <Box spacing={2} sx={{
            width: "90%",
            mx: "auto",
            display: "flex", 
            flexDirection:{xs:"column", md:"row"}, 
            justifyContent:"space-around"
            }}
        >
            <Card
                sx={{
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 3,
                    width:{xs:"80%", md:"50%"},
                    mx: "auto",
                    maxWidth:{md: "500px"},
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around"
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={host.photo} sx={{ width: 56, height: 56 }} />

                    <Stack spacing={0.4}>
                        <Typography variant="h6" fontWeight={600}>
                            {host.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Host since {host.joined}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {host.listings} Active Listings
                        </Typography>
                    </Stack>
                </Stack>

                <Stack spacing={1.5} mt={2}>
                    <Button variant="contained" fullWidth>
                        Contact Host
                    </Button>
                    <Button variant="outlined" fullWidth>
                        View All Listings
                    </Button>
                </Stack>
            </Card>
            <AddReviewCard />
        </Box>
    );
}
