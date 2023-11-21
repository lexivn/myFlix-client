// There two props in this code: One object(book) and one function(onBookClick)

// Here We import the PropType library
import React from "react";
import PropType from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// Destructure of the props
export const MovieCard = ({ movie }) => {  
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="link">Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
//  The props object is being destrucured
// export const MovieCard = (props) => {
//   const { movie } = props;
//   return <div>{movie.title}</div>;
// };

MovieCard.propTypes = {
  movie: PropType.shape({
    Title: PropType.string.isRequired, // propType is working
    ImagePath: PropType.string.isRequired, // propType is working
    author: PropType.string // Why this propType is not working?
  }).isRequired 
};
