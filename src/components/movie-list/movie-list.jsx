import React, { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieFilter } from "../movie-filter/movie-filter";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const MovieList = ({ user, token, movies, setUser = () => { } }) => {
  const [search, setSearch] = useState("");
  
  console.log("Movies on the MovieList", movies, movies.length);

  const handleFilterChange = (newFilter) => {
    setSearch(newFilter);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      <Row>
        <Col className="m-4">
          <MovieFilter onFilterChange={handleFilterChange} />
        </Col>
      </Row>
      <Row>
        {movies.length === 0 ? (
          <Col>The list is empty!</Col>
        ) : (
          filteredMovies.map((movie) => (
            <Col className="mb-4" key={movie._id} md={3}>
              <MovieCard
                user={user}
                setUser={setUser}
                movie={movie}
                token={token}
              />
            </Col>
          ))
        )}
      </Row>
    </>
  );

}