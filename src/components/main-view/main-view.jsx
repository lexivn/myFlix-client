import { useEffect, useState } from "react";

// Importing a component into another (BookCard -> MainView)
import { MovieCard } from "../movie-card/movie-card";

// Importain BookView component into the MainView
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  // To determine whether to render a specific part of the UI (BookView) in the MainView component, you’ll add a new state
  // "selectedBook" as a flag.

  const [selectedMovie, setSelectedMovie] = useState(null);

  // Implementing Loading Data from API
  useEffect(() => {
    fetch("https://moviesflix-99590597ee12.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log("movies from api: ", data);
        const moviesFromApi = data.map((doc) => {
          // map is reppresenting the index
          return doc;
        });
        setMovies(moviesFromApi);
      });
  }, []);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The movie list is empty</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          // This event handling is added to the BookCard component
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};

// REMEMBER:
// To create and initialized a component use useState function
// const {} = useState([]);    // This is equivalent to:

// Example:
// const [movies, setMovies] = useState([]);

// let movies= [];
// const setMovies = function(newMovieList){
//   movies = newMoviesList;
// };
