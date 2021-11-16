import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchBar = ({ setSearchText, setCurrentPage }) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setSearchText(value);
    setValue("");
    setCurrentPage(1)
  };

  return (
    <Row className="my-5  ">
      <Form
        onSubmit={handleClick}
        className="d-flex flex-nowrap justify-content-around"
      >
        <Col xs={10}>
          <Form.Control
            type="search"
            placeholder="Search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="btn btn-dark">
            Find{" "}
          </Button>
        </Col>
      </Form>
    </Row>
  );
};

export default SearchBar;
