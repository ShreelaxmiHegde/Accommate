import {
    Button,
    Typography,
    Box
} from "@mui/material";
import "./SearchBar"
import SearchBar from "./SearchBar";

export default function MainBox() {
    return (
        <section>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "#215da9",
                    textAlign: "center",
                    color: 'white',
                    paddingTop: 5,
                    paddingBottom: 5
                }}>
                <Typography variant="h3"
                    sx={{
                        fontWeight: 800,
                        letterSpacing: "-1px",
                    }}
                >Live closer, hustle harder
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 300 }}>
                    Find your Student Stay. Effortlessly.
                </Typography>

                <Box sx={{marginTop: "2rem", marginBottom: "2rem", display:"flex", flexWrap: "wrap", alignItems: "center", justifyContent:"center"}}>
                    <Button variant="contained" sx={{backgroundColor:"#f6cb3cff", color:"black", marginInline:"0.5rem"}}>Explore Stays</Button>
                    <Button variant="contained"sx={{marginInline:"0.5rem"}}>Post a Stay</Button>
                </Box>

                <SearchBar />
            </Box>
        </section>
    )
}