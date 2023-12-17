import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MovieCard } from "../movie-card/movie-card";
import { MovieFilter } from "../movie-filter/movie-filter";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const MovieList = ({ user, token, setUser = () => { } }) => {
  const movies = useSelector((state) => state.movies.list);
  const filter = useSelector((state) => state.movies.filter).trim().toLowerCase();

  const filteredMovies = movies.filter((movie) => movie.Title.toLowerCase().includes(filter));

  return (
    <>
      <Row>
        <Col className="m-4">
          <MovieFilter />
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