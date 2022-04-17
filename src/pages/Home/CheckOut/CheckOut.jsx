import React from "react";
import { useParams } from "react-router-dom";
import useService from "../../../Hooks/useService";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [servicesData] = useService();
  console.log(servicesData);

  return (
    <div>
      <h1>This is Checkout page</h1>
    </div>
  );
};

export default CheckOut;
