import React from "react";

const Service = ({ service }) => {
  const { title, subTitle, description, price, photos } = service;
  return (
    <div id={title} className="shadow p-4">
      <h3 className="text-secondary">{title}</h3>
      <p className="mb-4">{subTitle}</p>
      <p className="mb-4">{description}</p>
      <p>
        See the examples of <span className="text-primary">{title}</span> in
        print.
      </p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {photos.map((photo, index) => (
          <div className="col">
            <img
              className="w-100"
              key={index}
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
      <button className="btn btn-primary">Book Now</button>
      <hr />
    </div>
  );
};

export default Service;
