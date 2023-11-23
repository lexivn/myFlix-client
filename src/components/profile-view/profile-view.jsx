import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

export const ProfileView = ({ user, token, movies, setUser }) => {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);

  // Get all the movies from the favourite list of the user. 
  let favoriteMovies = movies.filter((m) => user.FavoriteMovies.includes(m._id));
  console.log(favoriteMovies);

  // SHOW USER INFO

  // UPDATE THE USER PROFILE
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch(`https://moviesflix-99590597ee12.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        alert("Profile updated successfully");
        return response.json();
        // setPassword(response.json().Password);
        // setBirthday(response.json().Birthday);
        // setEmail(response.json().Email);
        //window.location.reload();
      } else {
        alert("Profile updated failed");
      }
    }).then((data) => {
      if (data) {
        // JSON.stringify converts into string the "data" js object.
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      }
    })
      .catch((error) => {
        console.log(error);
      })
  };

  // DELETE USER ACCOUNT
  const deleteAccount = () => {

    fetch(`https://moviesflix-99590597ee12.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: {
        //"Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        setUser(null);
        localStorage.clear();
        alert("You account has been deleted sucessfully");
        window.location.replace("/login");
      } else {
        alert("Something went wrong!");
      }
    }).catch((error) => {
      console.log(error);
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
              placeholder="password"
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
          </Form>       
      </Row>

      <Row className="mt-3">
          <Col md={5}>
            <Button className="text-light" onClick={handleSubmit} variant="primary" type="submit">Update</Button>         
            <Button className="mx-3 text-light" onClick={deleteAccount} variant="danger" >Delete Account</Button>
          </Col>
        </Row>

      <Row className="mt-3 justify-content-md-center align-items-center">
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