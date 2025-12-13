import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function NoListingsFound({ onRetry }) {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <ErrorOutlineIcon
        sx={{
          fontSize: { xs: 60, sm: 80 },
          color: "error.main",
          mb: 2,
        }}
      />

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, mb: 1, fontSize: { xs: "1.4rem", sm: "1.8rem" } }}
      >
        No Listings Found
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 400, mb: 3, lineHeight: 1.6 }}
      >
        We couldn’t load any listings right now. This may be due to a network
        issue or an unexpected error. Please try again.
      </Typography>

      {/* <Button
        variant="contained"
        sx={{ px: 4, py: 1.2, borderRadius: 3, fontWeight: 600 }}
        onClick={onRetry}
      >
        Retry
      </Button> */}
    </Box>
  );
}
