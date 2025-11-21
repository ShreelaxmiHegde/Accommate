import Button from '@mui/material/Button';
import { Paper, Box, Typography, InputBase, Divider, IconButton, Card } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleIcon from "@mui/icons-material/People";
import "./Hero.css"
import { Container } from "@mui/material";
import IconText from './IconText';


export default function Hero() {

    const hostBenifitList = {
        WorkspacePremiumIcon: "Clean, modern dashboard to manage your property",
        ForumIcon: "In-built chat system with students",
        SyncIcon: "Instant updates & auto-synced listings",
        QueryStatsIcon: "Analytics on listing performance",
        ImageSearchIcon: "Highly optimized search engine"
    }

    const studBenifitList = {
        VerifiedIcon: "Verified listings with real student reviews",
        MessageIcon: "Direct messaging with the host",
        FormatListBulletedIcon: "“Facilities at a glance” complete pin-to-pin details",
        VerifiedUserIcon: "Safe, authenticated user community",
        FeedbackIcon: "Insights from students who previously lived there"
    }

    return (
        <>
            <Container maxWidth="lg">
                <section>
                    <Typography variant="h3"
                        sx={{
                            fontWeight: 800,
                            letterSpacing: "-1px",
                            backgroundColor: "#215da9",
                            textAlign: "center",
                            color: 'white',
                            paddingTop: 5
                        }}
                    >Live closer, hustle harder</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 300 }}>
                        Find your Student Stay. Effortlessly.
                    </Typography>

                    <Button variant="contained">Explore Listings</Button>
                    <Button variant="outlined">Post a Listing</Button>
                </section>

                <section>
                    <Paper
                        elevation={3}
                        sx={{
                            p: "6px 16px",
                            display: "flex",
                            alignItems: "center",
                            borderRadius: "60px",
                            gap: 2,
                            width: "100%",
                            maxWidth: 850,
                            mx: "auto",
                            mt: 4,
                            cursor: "pointer",
                            marginBottom: "10rem"
                        }}
                    >
                        {/* Location */}
                        <Box className="searchbar-box" >
                            <Box className="searchbar-icon-box">
                                <LocationOnIcon fontSize="small" />
                                <Typography variant="caption" color="text.secondary">
                                    Where
                                </Typography>
                            </Box>
                            <InputBase placeholder="Search destinations" fullWidth />
                        </Box>

                        <Divider orientation="vertical" flexItem />

                        {/* Check-in */}
                        <Box className="searchbar-box">
                            <Box className="searchbar-icon-box">
                                <CurrencyRupeeIcon fontSize="small" />
                                <Typography variant="caption" color="text.secondary">
                                    Budget range
                                </Typography>
                            </Box>
                            <InputBase placeholder="Your budget" fullWidth />
                        </Box>

                        <Divider orientation="vertical" flexItem />

                        {/* Category */}
                        <Box className="searchbar-box">
                            <Box className="searchbar-icon-box">
                                <PeopleIcon fontSize="small" />
                                <Typography variant="caption" color="text.secondary">
                                    Category
                                </Typography>
                            </Box>
                            <InputBase placeholder="single/double" fullWidth />
                        </Box>

                        {/* Search button */}
                        <IconButton
                            sx={{
                                bgcolor: "primary.main",
                                color: "white",
                                "&:hover": { bgcolor: "primary.dark" },
                                width: 45,
                                height: 45,
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </section>

                <Divider>Why Accommate?</Divider>

                <section>
                    <Box className="gradient-box1">
                        <Box className="left-gradient-img">
                            <Typography variant="h4" sx={{fontWeight: 800,
                            letterSpacing: "-1px"}}>
                                Designed for Students Who Just Want a Peaceful Stay
                            </Typography>
                            <IconText benifitList={studBenifitList} alignDir={"left"} />
                        </Box>
                    </Box>
                </section>

                <section>
                    <Box className="gradient-box2">
                        <Box className="right-gradient-img">
                            <Typography variant="h4" sx={{ fontWeight: 800,
                            letterSpacing: "-1px", textAlign: "end" }}>
                                Built for Hosts, Powered by Smart Technology
                            </Typography>
                            <IconText benifitList={hostBenifitList} alignDir={"right"} />
                        </Box>
                    </Box>
                </section>
            </Container>
        </>
    )
}