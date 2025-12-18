import { Link } from "react-router-dom";
import {
    Box,
    Typography,
    Container,
    Stack,
    Button
} from "@mui/material";
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MainBox from "../components/dashboard/MainBox";

export default function Hero() {
    const iconPlaceholderStyle = {
        width: 40,
        height: 40,
        borderRadius: 2,
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        mb: 2,
    }

    const cardDetailsBox = {
        flex: 1,
        p: 3,
        borderRadius: 4,
        bgcolor: "background.paper",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        transition: "0.3s ease",
        "&:hover": {
            boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
            transform: "translateY(-4px)",
        },
    }

    const ctaCard = {
        flex: 1,
        border: "1px solid #e5e7eb",
        borderRadius: "18px",
        overflow: "hidden",
        bgcolor: "white",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.2s ease",
        "&:hover": {
            boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
        },
    }

    const cardDetails = [
        {
            icon: <SettingsAccessibilityIcon />,
            title: "Personalized Spaces",
            desc: "Whether you want a quiet study-friendly room, a budget-friendly shared space, or a premium stay near your college, we match you with places that feel like they’re made for you.",
        },
        {
            icon: <ReviewsIcon />,
            title: "Trusted Reviews",
            desc: "Students deserve clarity before committing to a stay. Accommate’s review system is designed to highlight real voices from real people who have lived in each accommodation.",
        },
        {
            icon: <AdminPanelSettingsIcon />,
            title: "Secure Authentication",
            desc: "Your account security is our highest priority. Accommate uses modern authentication standards to ensure that only you can access your data. From encrypted sessions to strict authorization flows, every login is protected.",
        },
        {
            icon: <AddHomeWorkIcon />,
            title: "Easy Hosting",
            desc: "Hosting shouldn’t be complicated. That’s why Accommate gives property owners a clean, intuitive dashboard to list rooms, upload images, manage inquiries, and track student interest all in one place.",
        },
    ];

    const ctaCardDetails = [
        {
            src: "./hostel-img-home.jpg",
            title: "Find Your Perfect Stay",
            desc: "Explore verified accommodations near your college with trusted reviews and detailed facilities.",
            ctaText: "Explore Listings",
            to: "/explore"
        },
        {
            src: "./host-img-home.jpg",
            title: "Become a Verified Host",
            desc: "List your property, manage bookings easily, and reach thousands of students nearby.",
            ctaText: "Start Hosting",
            to: "/listings/new"
        }
    ]

    return (
        <>
            <MainBox />
            <Container sx={{ marginTop: "5rem" }}>
                <section style={{ marginBottom: "5rem" }}>
                    <Box sx={{ mx: "auto" }} >
                        <Typography variant="h4"
                            sx={{
                                fontWeight: 800,
                                letterSpacing: "-1px",
                                textAlign: "center",
                                mb: 4,
                            }}
                        >
                            Why Accommate?
                        </Typography>

                        {/* Feature Cards Wrapper */}
                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={3}
                            sx={{ width: "90%", mx: "auto" }}
                        >
                            {cardDetails.map((card, idx) => (
                                <Box key={idx} sx={cardDetailsBox} >
                                    {/* ICON Placeholder */}
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }} >
                                        <Box sx={iconPlaceholderStyle}>{card.icon}</Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }} >
                                            {card.title}
                                        </Typography>
                                    </Box>

                                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }} >
                                        {card.desc}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </section>

                <section style={{ paddingTop: "2rem" }}>
                    <Typography variant="h4"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: "-1px",
                            textAlign: "center",
                        }}
                    >
                        Accommate Is Ready When You Are
                    </Typography>
                    <Box
                        sx={{
                            mt: 5,
                            px: { xs: 2, md: 6 },
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 4,
                        }}
                    >

                        {/* CTA Cards */}
                        {ctaCardDetails.map((card, idx) => (
                            <Box sx={ctaCard} key={idx}>
                                <Box component="img"
                                    src={card.src}
                                    alt="students"
                                    sx={{
                                        width: "100%",
                                        height: 200,
                                        objectFit: "cover",
                                    }}
                                />
                                <Box sx={{ p: 3 }}>
                                    <Typography variant="h6"
                                        sx={{ fontWeight: 700, letterSpacing: "-0.5px", mb: 1 }}
                                    >
                                        {card.title}
                                    </Typography>
                                    <Typography sx={{ color: "text.secondary", mb: 3 }}>
                                        {card.desc}
                                    </Typography>
                                    <Button variant="contained" size="large"
                                        component={Link} to={card.to}
                                        sx={{
                                            textTransform: "none",
                                            borderRadius: "10px",
                                            px: 3,
                                            bgcolor: "#215da9",
                                            "&:hover": { bgcolor: "#1a4680" },
                                        }}
                                    >
                                        {card.ctaText}
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </section>
            </Container>
        </>
    )
}