import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);
  const { orderId } = useParams();
  const { register, handleSubmit, reset } = useForm();

  console.log(user?.email);
  const onSubmit = (data) => {
    console.log(data);
    console.log("form submitted");
    axios
      .post("https://nameless-thicket-75744.herokuapp.com/orders", {
        ...data,
        status: "pending",
      })
      .then((res) => {
        if (res.data.insertedId) {
          alert("order placed successfully");
          reset();
        }
      });
    console.log(data);
  };

  useEffect(() => {
    fetch(`https://nameless-thicket-75744.herokuapp.com/products/${orderId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [orderId]);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={product?.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-10">
                  <div className="card-body">
                    <h6 className="card-title border-bottom pb-3">
                      {product?.name}
                    </h6>
                    <small className="card-text">{product?.description}</small>
                    <br />
                    <span className="text-danger d-inline-block mt-1 fw-bold">
                      $ {product?.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 px-5">
            <h1 className="text-white fw-bold text-center   mb-4">
              Place an order
            </h1>
            <hr className="w-50 m-auto mb-5" />
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="name"
                  value={user?.displayName}
                  type="text"
                  {...register("name")}
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="email"
                  value={user?.email}
                  type="email"
                  {...register("email")}
                />
              </div>

              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="service name"
                  type="text"
                  value={product?.name}
                  {...register("productName", { required: true })}
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  placeholder="price in US dollar"
                  type="number"
                  value={product?.price}
                  {...register("price", { required: true })}
                />
              </div>

              <div className="col-12">
                <input
                  className="form-control"
                  placeholder="image url"
                  type="text"
                  value={product?.image}
                  {...register("imgURL", { required: true })}
                />
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  placeholder="phone no."
                  type="tel"
                  {...register("phone")}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="address"
                  type="text"
                  {...register("address")}
                />
              </div>

              <input
                type="submit"
                className="btn btn-danger"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchase;
