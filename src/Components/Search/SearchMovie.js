import React from "react";
import "./SearchMovie.css";
import Rating from "../../rates/Rating";

function SearchMovie({ setSearchByTitle, setSearchByRating, searchByRating }) {
  return (
    <div className="SearchMovie">
      <div className="search-container">
        <div className="search-title">
          <div className="divTitle">
            <span className="searchTxt"> </span>
          </div>

          <div className="box">
            <form name="search">
              <input
                className="input"
                type="text"
                name="txt"
                onChange={(e) => setSearchByTitle(e.target.value)}
              />
            </form>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="search-rating">
          <span className="searchTxt"></span>
          <Rating setSearchByRating={setSearchByRating} rate={searchByRating} />
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;

