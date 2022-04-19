import React from "react";
import "./MovieCard.css";
import Rating from "../../rates/Rating";

function MovieCard({
  movie: { title, year, posterURL, description, trailerURL, rating },
}) {
  return (
    <div className="movieCard">
      <div className="cardHeader">
        <h3 className="title">
          {title} <br /> <span> released in </span> {year}
        </h3>
      </div>
      <div className="poster">
        <img src={posterURL} alt={title} />
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <div className="cardBottom">
        <Rating rate={rating} />
      </div>
    </div>
  );
}

export default MovieCard;
