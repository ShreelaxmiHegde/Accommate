import { useNavigate } from "react-router-dom";
import {
    Card,
    Avatar,
    Typography,
    Stack,
    Button,
    Box
} from "@mui/material";
import AddReviewCard from "./AddReviewCard";
import api from "../../api/axios";
import { useFlash } from "../../context/FlashContext.jsx";

export default function HostDetailsCard({ listing }) {
    const { showFlash } = useFlash();
    const navigate = useNavigate();

    const host = {
        name: "Rohit Verma",
        joined: "2021",
        listings: 3,
        photo: "/host.jpg",
    };

    const onReviewSubmit = async (reviewData) => {
        try {
            console.log("Submitted Review:", reviewData);
            let res = await api.post(`/listings/${listing._id}/reviews`, reviewData);
            console.log("Response:", res);
            if (res.data.success) {
                showFlash("success", "Review Created Successfully!");
                navigate(`/explore/listings/${listing._id}`);
            }
        } catch (err) {
            console.log("Error Submitting Review:", err);
            showFlash("error", "Review creation failed!");
        }
    }

    return (
        <Box spacing={2} sx={{
            width: "90%",
            mx: "auto",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around"
        }}
        >
            <Card
                sx={{
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 3,
                    width: { xs: "80%", md: "50%" },
                    mx: "auto",
                    maxWidth: { md: "500px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around"
                }}
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={host.photo} sx={{ width: 56, height: 56 }} />

                    <Stack spacing={0.4}>
                        <Typography variant="h6" fontWeight={600}>
                            {listing.owner.email}
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
            <AddReviewCard onSubmit={onReviewSubmit} />
        </Box>
    );
}
