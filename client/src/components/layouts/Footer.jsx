import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
    return (
        <Box component="footer" 
            sx={{
                backgroundColor:"#f5f5f5", 
                padding:2, 
                display:"flex", 
                flexWrap:"wrap", 
                justifyContent:"space-around", 
                alignItems:"center", 
                gap:2,
                mt: 10
            }}>
            <Typography sx={{textAlign:"center"}}>Copyright &copy; 2025 Accommate. All rights reserved.</Typography>
            <Box sx={{display:"flex", gap:2, flexWrap:"wrap"}}>
                <Link href="/support#about" underline="hover" color="text.secondary" varient="body2">About</Link>
                <Link href="/support#help" underline="hover" color="text.secondary" varient="body2">Help</Link>
                <Link href="/support#terms" underline="hover" color="text.secondary" varient="body2">Terms</Link>
                <Link href="/support#privacy" underline="hover" color="text.secondary" varient="body2">Privacy</Link>
            </Box>
        </Box>
    )
}