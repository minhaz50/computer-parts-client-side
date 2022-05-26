import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleParts = ({ part }) => {
  const { _id, name, image, description, price } = part;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="border-bottom pb-3">{name}</Card.Title>
          <Card.Text className="border-bottom pb-3">
            {description.slice(0, 200)}...
          </Card.Text>
          <small className="text-danger  mx-4">$ {price}</small>
          <Link to={`/purchase/${_id}`}>
            <Button variant="danger" className="ms-5 mt-3">
              Purchase Now{" "}
              <FontAwesomeIcon
                className="ms-2 text-white"
                icon={faShoppingCart}
              />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleParts;
