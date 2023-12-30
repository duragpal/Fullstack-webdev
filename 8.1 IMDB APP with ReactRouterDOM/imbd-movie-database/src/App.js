import { useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { NavBar } from "./components";
import About from "./pages/About";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import "./styles/movie-details.css";

const API_BASEURL = "https://www.omdbapi.com";
//&apikey=aa660442

function App() {
  const [isLoading, setisLoading] = useState(false);
  // const [dataVar, helperFn] = useState(initializer)
  const [movies, setmovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const search = async (e) => {
    if (e.code === "Enter") {
      setisLoading(true);
      // console.log(inputValue, "<=== THis is our inputValue");
      // // Promises get resolved then execute
      const response = await axios.get(
        API_BASEURL + "/?s=" + inputValue + "&apikey=aa660442"
      );
      // console.log(response.data, " <--- This is our data");
      setmovies(response.data.Search);
      setisLoading(false);
    }
  };

  return (
    <div className="main">
      <NavBar
        search={search}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {/* Navbar -> searcBar
      Body -> MovieList
       */}
      {/* {isLoading ? "Loading" : "NotLoading"} */}

      <Router>
        <Routes>
          <Route
            path="/movie-list"
            element={<Movie isLoading={isLoading} movielist={movies} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          {/* DYnamic Route using colon */}

          <Route path="/movie-list/:id" element={<MovieDetails />} />
        </Routes>
      </Router>

      {/* <MovieList isLoading={isLoading} movielist={movies} /> */}
    </div>
  );
}

export default App;
