import React from "react";
import { useState, useEffect } from "react";

export const UserProfile = () => {
  // State to store user information
  const [favoriteMovies, setfavoriteMovies] = useState({});
  const [users, setUsers] = useState([]);
  // State to manage loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch user data
    fetch("https://moviesflix-99590597ee12.herokuapp.com/users", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data)
        const user = users.find(x => x._id === localStorage.getItem("userId"))
        setfavoriteMovies(user.FavoriteMovies);
        
      });
  },[userData, users]

  );
  return (
    <>
     {!favoriteMovies ?<>No  favs</>: favoriteMovies.map((movie) => (
                      
                        <MovieCard movie={movie} />
                      
                    ))}
    </>

  )
}
