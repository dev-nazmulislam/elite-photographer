import React from "react";
import useService from "../../../Hooks/useService";
import Service from "../Service/Service";

const Services = () => {
  const [servicesData] = useService();
  return (
    <div className="container">
      {servicesData.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
