import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  console.log(user.email);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  console.log(orders);

  const handleDeleteOrder = (id) => {
    const url = `http://localhost:5000/orders/${id}`;

    if (window.confirm("Are you sure to delete this order?")) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Order deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <Container>
      <h1 className="text-danger fw-bold text-center mt-5 mb-4">
        User Orders: {orders.length}
      </h1>
      <hr className="w-50 m-auto mb-5" />
      <Row xs={1} md={3} className="g-4">
        <div className="table-scrollable">
          <Table striped bordered hover>
            <thead className="text-white">
              <tr>
                <th>Order Id</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>price</th>
                <th> Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone No.</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-white">
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="text-white">{order._id.slice(0, 8)}</td>
                  <td className="text-white">{order.productName}</td>
                  <td>
                    <img className="img-fluid" src={order.imgURL} alt="" />
                  </td>
                  <td className="text-white">${order.price}</td>
                  <td className="text-white">{order.name}</td>
                  <td className="text-white">{order.email}</td>
                  <td className="text-white">{order.address}</td>
                  <td className="text-white">{order.phone}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-danger btn-delete"
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <small className="me-2">Delete</small>
                        <FontAwesomeIcon
                          className="text-white"
                          icon={faTrashAlt}
                        />
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Row>
    </Container>
  );
};

export default MyOrders;
