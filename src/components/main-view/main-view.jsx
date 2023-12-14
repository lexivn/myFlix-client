import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../singup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { MovieList } from "../movie-list/movie-list";

import { useSelector, useDispatch } from "react-redux";
import { setMovies } from "../../redux/reducers/movies";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser ? storedUser : null);
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  
  const [token, setToken] = useState(storedToken ? storedToken : null);
 
  //const [movies, setMovies] = useState([]);
  // To determine whether to render a specific part of the UI (MovieView) in the MainView component, you’ll add a new state
  // "selectedMovie" as a flag.
  // const [selectedMovie, setSelectedMovie] = useState(null);

  // Using useEffect is Best Practive to handle Movie Filters
  // const [search, setSearch] = useState("");
  //  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (!token) {
      return;
    }
    // Implementing Loading Data from API
    fetch("https://moviesflix-99590597ee12.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        // Debug
        console.log("Movies from api: ", data);
        const moviesFromApi = data.map((doc) => {
          // map is reppresenting the index
          return doc;
        });
        // setMovies(moviesFromApi);
        dispatch(setMovies(moviesFromApi));

      });
  }, [token]);

  // Using useEffect is Best Practive to handle Movie Filters
  // const getSearchedMovies = (arr, query) => {
  //   return arr.filter((movie) => {
  //     return movie.Title.toLowerCase().includes(query.toLowerCase());
  //   });
  // };
  // console.log(getSearchedMovies(movies, search));

  // useEffect(() => {
  //   setFilteredMovies(getSearchedMovies(movies, search));
  // }, [search, movies]);


  return (
    <BrowserRouter>
      <NavigationBar 
        user={user}
        movies={movies}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <ProfileView
                  user={user}
                  token={token}
                  movies={movies}
                  setUser={setUser}
                />
              </>
            }
          />

          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty!</Col>
                ) : (
                  <Col md={8}>
                    {/* <MovieView movies={movies} /> */}
                    <MovieView />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <>
                    <MovieList
                      movies={movies}
                      user={user}
                      token={token}
                      setUser={setUser}
                    />
                  </>
                )
                }
              </>
            }
          />

        </Routes>
      </Row>
    </BrowserRouter>
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
