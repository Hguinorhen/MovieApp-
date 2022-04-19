import React from "react";

const Rating = ({ rate, setSearchByRating = () => {} }) => {
  function stars(star) {
    var rateTab = [];
    for (let i = 1; i < 6; i++) {
      if (i <= star) {
        rateTab.push(
          <span
            style={{ fontSize: "150%", color: "yellow" }}
            onClick={() => setSearchByRating(i)}
          >
            ★
          </span>
        );
      } else {
        rateTab.push(
          <span
            style={{ fontSize: "150%", color: "gray" }}
            onClick={() => setSearchByRating(i)}
          >
            ★
          </span>
        );
      }
    }
    return rateTab;
  }
  return <div className="Rating">{stars(rate)}</div>;
};

export default Rating;
