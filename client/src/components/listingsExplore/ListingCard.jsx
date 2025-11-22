import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, Box } from '@mui/material';

export default function ListingCard() {
  let [ isLiked, setIsLiked ] = useState(false);
  let [ count, setCount ] = useState(15);

  const handleLike = () => {
    if(isLiked) {
      setIsLiked(false);
      setCount(count-1);
    } else {
      setIsLiked(true);
      setCount(count+1);
    }
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 200 }}>
       <CardMedia
        component="img"
        height="100"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish" sx={{backgroundColor: "skyblue"}}/>
      <CardContent sx={{padding:"0.5rem"}}>
        <CardActions disableSpacing sx={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:0, marginBottom:"0.5rem"}}>
          <Box sx={{display:"flex", alignItems:"center"}}>
            <IconButton sx={{padding:0}} onClick={handleLike} color={ isLiked ? "error" : "default"}>
              <FavoriteIcon fontSize="small" /> 
            </IconButton>
            <Typography>{count}</Typography>
          </Box>
          <Rating name="read-only" size="small" value={3} readOnly />
        </CardActions>

        <Typography>New Hostel</Typography>
      </CardContent>
    </Card>
  );
}
