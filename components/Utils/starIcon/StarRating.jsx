import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        key={i}
        className={`mx-1 ${i < rating ? "text-yellow-400" : "text-yellow-400"}`} // Apply Tailwind CSS classes for coloring
      />,
    );
  }
  return <div className="flex">{stars}</div>; // Maintain flex container for alignment
}

export default StarRating;
