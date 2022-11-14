import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./component/search.svg";

// 3b695c80
const API_url = "http://www.omdbapi.com?apikey=3b695c80";

// const movie1 = {
//   Title: "Constantine",
//   Year: "2005",
//   imdbID: "tt0360486",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BODZiMzAxNTctZjdiZC00OGY5LTg2NDAtNWJhNmQwZTcyMWQ2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("constantine");
  }, []);

  return (
    <div className="app">
      <h1 id="merk">Cari Film.mkv</h1>

      <div className="search">
        <input
          type="text"
          value={searchTerm}
          placeholder="Cari Film"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
