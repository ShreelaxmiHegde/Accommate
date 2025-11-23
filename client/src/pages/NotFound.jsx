import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "6rem", md: "10rem" },
          fontWeight: 800,
          lineHeight: 1,
          color: "#1a73e8",
        }}
      >
        404
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mt: 2,
          letterSpacing: "-0.5px",
        }}
      >
        Page Not Found
      </Typography>

      <Typography
        sx={{
          mt: 1,
          maxWidth: 450,
          color: "text.secondary",
          fontSize: "1.05rem",
        }}
      >
        Oops! The page you're looking for doesn’t exist or has been moved.
        Please check the URL or return to the homepage.
      </Typography>

      <Button
        variant="contained"
        size="large"
        component={Link}
        to="/"
        sx={{
          mt: 4,
          textTransform: "none",
          px: 4,
          py: 1.3,
          borderRadius: "10px",
          bgcolor: "#215da9",
          "&:hover": { bgcolor: "#1a4680" },
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
}
