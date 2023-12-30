import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
  const [IsLoading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieDetails = async () => {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=aa660442`
      );
      setMovieDetails(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchMovieDetails();
  }, [id]);
  if (IsLoading) {
    return <h1>Movie Details are being Loaded. Please wait....</h1>;
  } else if (movieDetails) {
    return (
      <div className="movie-details">
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
        <h1>{movieDetails.Title}</h1>
        <p>Actors: {movieDetails.Actors}</p>
        <p> Genre: {movieDetails.Genre}</p>
      </div>
    );
  } else {
    return null;
  }
}
