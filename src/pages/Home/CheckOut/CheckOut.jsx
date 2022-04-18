import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import useService from "../../../Hooks/useService";
import toast, { Toaster } from "react-hot-toast";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [servicesData] = useService();
  const [checkDelete, setCheckDelete] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const navigate = useNavigate();

  const service = servicesData.find((service) => service.id == serviceId);

  const success = () => toast.success("Confirm Order Please Check Your Email.");
  const handleOrder = () => {
    success();
    setConfirmOrder(!confirmOrder);
  };
  return (
    <div>
      {checkDelete ? (
        <div className="shadow p-5 text-center my-5">
          <h1 className="text-danger my-5 fs-1 ">Yore Service is Deleted!!</h1>
          <button onClick={() => navigate("/home")} className="btn btn-primary">
            Choise Again
          </button>
        </div>
      ) : confirmOrder ? (
        <div className="shadow p-5 text-center text-success my-5">
          <h1>Your Service is Confirm. Please Check Your email.</h1>
        </div>
      ) : (
        <div className="d-flex flex-column flex-md-row container justify-content-center align-items-center shadow p-5 gap-5 my-5">
          <img
            className="rounded"
            style={{ height: "200px" }}
            src={service?.photos[0]}
            alt=""
          />
          <div>
            <h2>{service?.title}</h2>
            <p>{service?.subTitle}</p>
            <p className="text-danger">{service?.price} Tk</p>
          </div>
          <AiFillDelete
            onClick={() => setCheckDelete(!checkDelete)}
            className="fs-1 text-danger"
          />
        </div>
      )}

      <button onClick={handleOrder} className="btn btn-primary d-block mx-auto">
        Hire me for {service?.title}
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default CheckOut;
