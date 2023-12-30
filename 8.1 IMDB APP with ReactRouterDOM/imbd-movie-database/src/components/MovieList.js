import React from "react";
import MovieCard from "./MovieCard";
import "../styles/movie-list.css";

export default function MovieList({ movielist, isLoading }) {
  if (isLoading) {
    return "Loading Movies. Please wait..";
  } else {
    return (
      // Loop over all movies
      <div className="movie-list">
        {movielist.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    );
  }
}
