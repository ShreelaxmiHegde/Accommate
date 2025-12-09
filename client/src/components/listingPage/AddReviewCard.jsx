import {
  Card,
  CardContent,
  Typography,
  Rating,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";

export default function AddReviewCard({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  let reviewData = {
    review: {
      rating: rating,
      comment: review
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!rating || review.trim() === "") return; // basic validation

    onSubmit(reviewData);
    setRating(0);
    setReview("");
  };

  return (
    <Card sx={{
      p: 2,
      borderRadius: 3,
      boxShadow: 3,
      width: { xs: "80%", md: "50%" },
      mt: { xs: 5, md: 0 },
      mx: "auto",
      maxWidth: { md: "500px" }
    }}>
      <CardContent>
        <Typography variant="h6" fontWeight={600} mb={1}>
          Add Your Review
        </Typography>

        <Stack spacing={2}>
          <Rating
            value={rating}
            onChange={(e, val) => setRating(val)}
            size="large"
          />

          <TextField
            multiline
            minRows={3}
            fullWidth
            placeholder="Share your experience..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            slotProps={{
              htmlInput: {
                minLength: 3,
                maxLength: 500
              }
            }}
          />

          <Button
            variant="contained"
            fullWidth
            disabled={!rating || review.trim() === ""}
            onClick={handleSubmit}
          >
            Submit Review
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
