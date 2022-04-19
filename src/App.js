import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/lists/MovieList";
import SearchMovie from "./Components/Search/SearchMovie";
import { Movies } from "./Movies";

function App() {
  const [movies, setMovies] = useState(Movies);
  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByRating, setSearchByRating] = useState(0);

  const addToList = (film) => {
    setMovies([...movies, film]);
  };

  return (
    <div className="App">
      <SearchMovie
        setSearchByTitle={setSearchByTitle}
        setSearchByRating={setSearchByRating}
        searchByRating={searchByRating}
      />
      <MovieList
        movies={movies}
        setMovies={setMovies}
        searchByTitle={searchByTitle}
        searchByRating={searchByRating}
        addToList={addToList}
      />
    </div>
  );
}

export default App;
