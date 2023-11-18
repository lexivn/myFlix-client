import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({movies}) => {
  // State to store user information
  const [favoriteMovies, setFavoriteMovies] = useState();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(undefined);
  const { userId } = useParams();


  useEffect(() => {
    
    fetch("https://moviesflix-99590597ee12.herokuapp.com/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("All the users from my Flix API DB", data);
        setUsers(data);        
        const user =  users.find((b) => b._id === localStorage.getItem("user_id"));
        setUser(user);    // Here user is an object        
        // setFavoriteMovies(user.FavoriteMovies);

      });

  }, [users, user]);

  return (
    <>
      {
       user !=undefined ? user.FavoriteMovies.map((movieId) => {
          // return <MovieCard movie={doc}/>
          // Iterate movies prop, and then while iterating you are rendering movieCards with the object line 35
          <p>{movieId}</p>
        }): <></>
      }
    </>

  )
}