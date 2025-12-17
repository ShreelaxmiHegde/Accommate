import {
    CircularProgress,
    Box,
    Typography
} from '@mui/material';

export default function CircularLoader({msg}) {
    return (
        <Box sx={{ display: 'flex', flexDirection: "column", height: "100vh", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress size="3rem" />
            <Typography
                variant="body1"
                sx={{
                    mt: 2,
                    fontSize: "1.1rem",
                    letterSpacing: "0.5px",
                    color: "rgba(0,0,0,0.65)",
                    fontWeight: 500,
                }}
            >
                {msg}
            </Typography>
        </Box>
    );
}