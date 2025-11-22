import {
    Paper,
    Box,
    Typography,
    InputBase,
    Divider,
    Button
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleIcon from "@mui/icons-material/People";
import "./Hero.css"

export default function SearchBar() {

    return (
        <Paper
            elevation={3}
            sx={{
                p: { xs: 2, sm: "6px 16px" },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "stretch", sm: "center" },
                justifyContent: { xs: "center" },
                borderRadius: { xs: "20px", sm: "60px" },
                gap: { xs: 1, sm: 2 },
                width: { xs: "70%", md: "90%" },
                maxWidth: 750,
                mx: "auto",
                position: "relative",
                transform: "translateY(50%)"
            }}
        >
            {/* Location */}
            <Box className="searchbar-item">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOnIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                    <Typography sx={{ fontSize: { xs: "0.8rem", sm: "0.75rem" }, fontWeight: 600 }}>
                        Where
                    </Typography>
                </Box>

                <InputBase
                    placeholder="Search college"
                    className="searchbar-item-inputbase"
                />
            </Box>

            {/* Divider for desktop only */}
            <Divider sx={{ display: { xs: "none", sm: "block" } }} orientation="vertical" flexItem />

            {/* Price */}
            <Box className="searchbar-item">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CurrencyRupeeIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                    <Typography sx={{ fontSize: { xs: "0.8rem", sm: "0.75rem" }, fontWeight: 600 }}>
                        Price Range
                    </Typography>
                </Box>

                <InputBase
                    placeholder="Your budget"
                    className="searchbar-item-inputbase"
                />
            </Box>

            {/* Divider for desktop only */}
            <Divider sx={{ display: { xs: "none", sm: "block" } }} orientation="vertical" flexItem />

            {/* Category */}
            <Box className="searchbar-item">
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <PeopleIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                    <Typography sx={{ fontSize: { xs: "0.8rem", sm: "0.75rem" }, fontWeight: 600 }}>
                        Category
                    </Typography>
                </Box>

                <InputBase
                    placeholder="Category"
                    className="searchbar-item-inputbase"
                />
            </Box>

            {/* Desktop → round icon button; Mobile → full-width rectangle button */}
            <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: { xs: 1, sm: 0 },
                        borderRadius: { xs: "14px", sm: "50%" },
                        px: { xs: 2, sm: 0 },
                        width: { xs: "100%", sm: 50 },
                        height: { xs: 45, sm: 45 },
                    }}
                >
                    {/** Mobile: 'Search' text | Desktop: SearchIcon */}
                    <Box sx={{ display: { xs: "block", sm: "none" } }}>Search</Box>
                    <SearchIcon sx={{ display: { xs: "none", sm: "block" } }} />
                </Button>
            </Box>
        </Paper>


    )
}