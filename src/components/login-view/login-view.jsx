// Verifying Login Data
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Created the login form
export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    //This will prevent the default behavior of the form which is to relad the entire page
    event.preventDefault();

    const data = {
      username: username,
      password: password
    };

    fetch("https://moviesflix-99590597ee12.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          // Data storage across browser sessions
          localStorage.setItem("user", JSON.stringify(data.user));         
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user._id);
          localStorage.setItem("Username", data.user.Username);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    // This callback tells the Login API to validate user and password
  <Form onSubmit={handleSubmit}>
      <Form.Group conttrolId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          minLength="5"
          placeholder="Username"
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>


    </Form>
  );
};
