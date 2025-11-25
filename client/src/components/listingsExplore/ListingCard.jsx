import { useState } from 'react'
import {
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Rating,
  IconButton, 
  Box, 
  Paper
} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

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

  return (
    <Paper elevation={5} sx={{width: { xs: 250, md: 210 } }}>
      <CardMedia
        component="img"
        height="118"
        image={listing.image.url}
        alt={listing.title} sx={{ width: { xs: 250, md: 210 }, borderRadius: 1}} />
      <CardContent sx={{ padding: "0.5rem" }}>
        <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0, marginBottom: "0.5rem" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ padding: 0 }} onClick={handleLike} color={isLiked ? "error" : "default"}>
              <FavoriteIcon fontSize="small" />
            </IconButton>
            <Typography>{count}</Typography>
          </Box>
          <Rating name="read-only" size="small" value={3} readOnly />
        </CardActions>

        <Typography variant="body2">{listing.title}</Typography>
      </CardContent>
    </Paper>
  );
}
