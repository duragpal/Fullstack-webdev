import React from "react";
import "../styles/movie-card.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie-list/${movie.imdbID}`}>
      <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} />
        <p>Name : {movie.Title}</p>
        <p>Year : {movie.Year}</p>
      </div>
    </Link>
  );
}
