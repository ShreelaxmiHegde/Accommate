import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CardMedia,
  CardContent,
  Typography,
  Rating,
  IconButton,
  Box,
  Paper,
} from '@mui/material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationPinIcon from '@mui/icons-material/LocationPin';

export default function ListingCard({ listing }) {
  let [isLiked, setIsLiked] = useState(false);
  let [count, setCount] = useState(15);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setCount(count - 1);
    } else {
      setIsLiked(true);
      setCount(count + 1);
    }
  }

  const navigate = useNavigate();

  const imageClickHandler = async (id) => {
    navigate(`listings/${id}`);
  }

  return (
    <Paper
      elevation={6}
      sx={{
        width: { xs: 250, md: 210 },
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer"
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="140"
          image={listing.image.url}
          alt={listing.title}
          sx={{ objectFit: "cover" }}
          onClick={() => imageClickHandler(listing._id)}
        />

        <IconButton
          onClick={handleLike}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            bgcolor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(4px)",
            padding: "3px",
            "&:hover": { bgcolor: "white" }
          }}
        >
          <FavoriteIcon
            fontSize="small"
            color={isLiked ? "error" : "action"}
          />
        </IconButton>
      </Box>

      <CardContent sx={{ padding: "0.7rem" }}>
        <Typography
          variant="subtitle2"
          fontWeight={600}
          sx={{
            mb: 0.5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {listing.title}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center", mb: 1 }}
        >
          <LocationPinIcon fontSize="inherit" sx={{ mr: 0.3 }} />
          {listing.stateCity}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              display: "flex",
              alignItems: "center"
            }}
          >
            <CurrencyRupeeIcon sx={{ fontSize: 15 }} /> {listing.price}
          </Typography>

          <Rating name="read-only" size="small" value={3} readOnly />

          <Typography variant="caption" sx={{ display: "flex", alignItems: "center" }}>
            ❤️ {count}
          </Typography>
        </Box>
      </CardContent>
    </Paper>
  );
}
