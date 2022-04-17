import React from "react";
import { useParams } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import useService from "../../../Hooks/useService";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [servicesData] = useService();

  const service = servicesData.find((service) => service.id == serviceId);

  return (
    <div>
      <div className="d-flex container justify-content-center align-items-center gap-5 my-5">
        <img
          className="rounded"
          style={{ height: "200px" }}
          src={service?.photos[0]}
          alt=""
        />
        <div>
          <h2>{service?.title}</h2>
          <p className="text-danger">{service?.price} Tk</p>
        </div>
        <AiFillDelete className="fs-1 text-danger" />
      </div>
      <button className="btn btn-primary d-block mx-auto">Confirm Order</button>
    </div>
  );
};

export default CheckOut;
