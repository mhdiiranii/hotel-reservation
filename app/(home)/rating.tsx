"use client";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { SetStateAction, useState } from "react";


type rating = {setRating:(value : SetStateAction<null|number>)=>void}

export default function RatingHotel({setRating}:rating) {
  const [value, setValue] = useState<number | null>(0);
  return (
    <Box sx={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
          setRating(newValue)
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
}
