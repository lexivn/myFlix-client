// There two props in this code: One object(book) and one function(onBookClick)
// Here We import the PropType library
import React, { useEffect, useState } from "react";
import PropType from "prop-types";
import { Button, Card} from "react-bootstrap";
import { Link } from "react-router-dom";

// Destructure of the props
export const MovieCard = ({ user, token, movie, setUser = () => { } }) => {

  function isFav() {
    return user.FavoriteMovies.includes(movie._id)
  }

  // ADD MOVIE TO FAVORITE LIST
  const addToFavoriteList = () => {
    fetch(`https://moviesflix-99590597ee12.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
      method: "POST", headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
      if (response.ok) {
        alert("The movie was added to you favourite list!")
        return response.json();
      } else {
        console.log("Failed to update your list");
      }
    })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));   // Update the LocalStorage user information
        setUser(data);                                        // Update the user object with the new movie list
        console.log(movie);
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  };

  // REMOVE MOVIE FROM FAVORITE LIST
  const removeFromFavoriteList = () => {
    fetch(`https://moviesflix-99590597ee12.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
      method: "DELETE", headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
      if (response.ok) {
        alert("The movie was removed from you favourite list!")
        console.log(user.Username);
        console.log(response);
        return response.json();
      } else {
        console.log("Failed to remove the movie from your favourite list!");
      }
    })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));   // Update the LocalStorage user information
        setUser(data);
        location.reload();                                    // Update the user object with the new movie list
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <Card className="h-100" >
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director.Name}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="link">Open</Button>
        </Link>
        <>{
          isFav() ? (
            <Button onClick={removeFromFavoriteList} variant="link">Delete from List</Button>

          ) : (
            <Button onClick={addToFavoriteList} variant="link">Add to my List</Button>
          )
        }
        </>
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
