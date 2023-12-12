import React from "react";
import Form from "react-bootstrap/Form";


export const MovieFilter = ({ onFilterChange }) => {

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    onFilterChange(newFilter);   
  };

  return (
    <Form.Control
      type="text"
      placeholder="Search"
      onChange={handleFilterChange}
    />
  );
};