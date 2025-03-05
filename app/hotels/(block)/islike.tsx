"use client";

import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const IsLike = () => {
  const [like, setLike] = useState(false);
  function liked() {
    setLike(like ? false : true);
  }
  return (
    <button onClick={liked} className="text-red-500">
      {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </button>
  );
};

export default IsLike;
