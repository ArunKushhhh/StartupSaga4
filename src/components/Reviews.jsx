import React from "react";
import Star from "../../public/images/review.svg";

const Reviews = () => {
  return (
    <div className="flex gap-3">
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
      <img src={Star} alt="star" />
    </div>
  );
};

export default Reviews;
