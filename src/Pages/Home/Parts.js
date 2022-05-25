import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleParts from "./SingleParts";

const Parts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  //   const slicedParts = parts.slice(0, 3);
  return (
    <Container className="bg-neutral">
      <h1 className="text-white fw-bold text-center mt-11 mb-4 text-5xl ">
        Our Products
      </h1>
      <hr className="w-50 m-auto mb-5" />
      <Row xs={1} md={3} className="g-4">
        {parts.slice(0, 6).map((part) => (
          <SingleParts key={part._key} part={part}></SingleParts>
        ))}
      </Row>
    </Container>
  );
};

export default Parts;
