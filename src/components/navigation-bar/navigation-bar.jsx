import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut, search, setSearch }) => {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MoboFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Add Links here */}
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/login" onClick={onLoggedOut}>
                  Logout
                </Nav.Link>
                <Form className="d-flex navbar-style">
                  <Form.Control
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />                  
                </Form>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};