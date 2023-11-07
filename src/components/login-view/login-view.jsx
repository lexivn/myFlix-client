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
          //
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
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required // Form Validation
          minLength="5"
          placeholder="Username"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required // Form Validation
          placeholder="Password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
