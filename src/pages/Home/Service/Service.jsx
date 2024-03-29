import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { id, title, subTitle, description, price, photos } = service;
  return (
    <div id={title} className="shadow p-4 cart-container">
      <h3 className="text-secondary">{title}</h3>
      <p className="mb-4">{subTitle}</p>
      <p className="mb-4">{description}</p>
      <p>
        See the examples of <span className="text-primary">{title}</span> in
        print.
      </p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {photos.map((photo, i) => (
          <div key={i} className="col">
            <img
              className="w-100"
              style={{ width: "200px" }}
              src={photo}
              alt=""
            />
          </div>
        ))}
      </div>
      <p className="mt-3">
        Hourly Rate <span className="text-danger">{price}.00</span> Tk
      </p>
      <button
        onClick={() => navigate(`/service/${id}`)}
        className="btn btn-primary"
      >
        Book Now
      </button>
      <hr />
    </div>
  );
};

export default Service;
