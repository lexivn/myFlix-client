import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MovieCard } from "../movie-card/movie-card";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

export const ProfileView = ({ user, token, movies, setUser }) => {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);

  let favoriteMovies = movies.filter((m) => user.FavoriteMovies.includes(m._id));
  console.log(favoriteMovies);

  // useEffect(() => {

  //   fetch("https://moviesflix-99590597ee12.herokuapp.com/users", {
  //     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("All the users from my Flix API DB", data);
  //       setUsers(data);        
  //       const user =  users.find((b) => b._id === localStorage.getItem("user_id"));
  //       setUser(user);    // Here user is an object        
  //       // setFavoriteMovies(user.FavoriteMovies);

  //     });

  // }, [users, user]);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch("https://moviesflix-99590597ee12.herokuapp.com/users"+"/"+user.Username, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
      if (response.ok) {
        alert("Profile updated successfully");
        setPassword(response.json().Password);
        setBirthday(response.json().Birthday);
        setEmail(response.json().Email);
        //window.location.reload();
      } else {
        alert("Profile updated failed");
      }
    });
  };

  return (
    <Container>
      <Row>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        minLength={5}
        placeholder="Username"
        disabled
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={5}
        placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required        
        placeholder="Email"
        />
      </Form.Group>

      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        required
        minLength={5}
        placeholder="Birthday"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Row>
      <Row className="justify-content-md-center align-items-center">
        {
          favoriteMovies.map((movie) => {
            return (
            <Col className="mb-4" key={movie._id} md={3} >
              <MovieCard movie={movie} />
            </Col>
          );
          })
        }
      </Row>      
    </Container>


  )
}