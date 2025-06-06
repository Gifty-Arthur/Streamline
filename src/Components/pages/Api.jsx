import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const MovieRow = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const rowRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "f67ffdf6b00898aa4687cd07f7acc84e",
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft -= 400;
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft += 400;
    }
  };

  return (
    <div className="relative w-full bg-black text-white p-6 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4">Trending Now</h2>

      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full px-2 py-1 hover:bg-opacity-80"
      >
        ◀
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full px-2 py-1 hover:bg-opacity-80"
      >
        ▶
      </button>

      {/* Scrollable Movie Row */}
      <div
        ref={rowRef}
        className="flex space-x-4 overflow-x-scroll"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        {/* Hide scrollbar for WebKit browsers */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
            className="min-w-[200px] transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-md shadow-md"
            />
            <div className="p-2">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <p className="text-sm text-gray-300">
                Rating: {movie.vote_average}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedMovie && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-gray-900 rounded-md p-6 w-[90%] md:w-[600px]">
            <h2 className="text-2xl font-bold mb-2">{selectedMovie.title}</h2>
            <p className="text-gray-300 text-sm mb-2">
              Released: {selectedMovie.release_date}
            </p>
            <p className="text-gray-200 mb-4">{selectedMovie.overview}</p>
            <div className="flex space-x-4">
              <button className="bg-[#e50914] px-4 py-2 rounded-md font-semibold hover:bg-red-700">
                Get Started
              </button>
              <button
                onClick={() => setSelectedMovie(null)}
                className="border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieRow;
