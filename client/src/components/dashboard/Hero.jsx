import { 
    Box, 
    Typography, 
    Divider,
    Container
} from "@mui/material";
import IconText from './IconText';
import "./Hero.css"
import "./MainBox"
import MainBox from "./MainBox";

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
            <MainBox />
            <Container maxWidth="lg" sx={{position: "relative", transform:{xs:"translateY(30%)", md:"translateY(10%)"}}}>

                <Divider>Why Accommate?</Divider>

                <section>
                    <Box className="gradient-box1" sx={{marginY: "3rem"}} >
                        <Box className="left-gradient-img">
                            <Typography variant="h4" sx={{fontWeight: 800,
                            letterSpacing: "-1px", color:"#215da9", fontSize:{xs:"1.7rem", md:"2rem"}}}>
                                Designed for Students Who Just Want a Peaceful Stay
                            </Typography>
                            <IconText benifitList={studBenifitList} alignDir={"left"} />
                        </Box>
                    </Box>
                </section>

                <section>
                    <Box className="gradient-box2" sx={{marginY: "3rem"}} >
                        <Box className="right-gradient-img">
                            <Typography variant="h4" sx={{ fontWeight: 800,
                            letterSpacing: "-1px", textAlign: "end", color:"#215da9", fontSize:{xs:"1.7rem", md:"2rem"} }}>
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