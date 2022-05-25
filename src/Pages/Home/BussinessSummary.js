import React from "react";

const BussinessSummary = () => {
  return (
    <div class="card lg:card-side bg-base-100 shadow-xl mx-10 mt-20">
      <figure>
        <img
          src="https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg"
          className="w-3/4 rounded"
          alt="Album"
        />
      </figure>
      <div class="card-body w-3/4">
        <h2 class="card-title">Bussiness Summary</h2>
        <p>
          <h2 className="font-bold text-xl">Our Mission</h2> <br /> Part-T-ake.
          offers superior on-site computer parts sitting and exercising services
          for your computer, providing the good service and machanic . Our team
          will ensure that best parts and desing for your computer. <br />{" "}
          <br />
          <h2 className="font-bold text-xl">Our Services</h2> <br />
          Ensure best parst and service. <br /> Providing the home delivery
          service.
        </p>
      </div>
    </div>
  );
};

export default BussinessSummary;
