import React from "react";
import { Carousel, Nav } from "react-bootstrap";
import useService from "../../../Hooks/useService";
import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";
import "./Home.css";

import Service from "../Service/Service";
import Review from "../../Review/Review";

const Home = () => {
  const [servicesData] = useService();

  return (
    <>
      <section>
        <Carousel className="carousel-bg">
          <Carousel.Item>
            <div className="container d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
              <div className="p-2 half-width">
                <h1 className="text-white">
                  Get world best{" "}
                  <span className="text-warning">Photography Services</span>
                </h1>
                <p className="text-light">
                  We provides best photography services for many award winning
                  Brands, Personalities, Editorial/PR & Advertising clients.
                </p>
                <button className="btn btn-primary mb-5">Show Details</button>
              </div>
              <div className="half-width">
                <img className="w-100" src={banner1} alt="First slide" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
              <div className="p-2 half-width">
                <h1 className="text-white">
                  Get Best Width{" "}
                  <span className="text-warning">Elite Photography</span>
                </h1>
                <p className="text-light">
                  We provides best photography services for many award winning
                  Brands, Personalities, Editorial/PR & Advertising clients.
                </p>
                <button className="btn btn-primary mb-5">Show Details</button>
              </div>
              <div className="half-width">
                <img className="w-100" src={banner2} alt="First slide" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
              <div className="p-2 half-width">
                <h1 className="text-white">
                  Customize Your{" "}
                  <span className="text-warning">Products Add</span>
                </h1>
                <p className="text-light">
                  We provides best photography services for many award winning
                  Brands, Personalities, Editorial/PR & Advertising clients.
                </p>
                <button className="btn btn-primary mb-5">Show Details</button>
              </div>
              <div className="half-width">
                <img className="w-100" src={banner3} alt="First slide" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className="row d-flex mx-0 my-3">
        <div className="col-12 col-md-3 shadow">
          <h3 className="text-primary mt-4 p-3">My Services</h3>
          {servicesData.map((service) => (
            <div key={service.id}>
              <Nav.Link className="text-black" href={`home#${service.title}`}>
                {service.title}
              </Nav.Link>
              <hr />
            </div>
          ))}
        </div>
        <div className="col-12 col-md-9">
          {servicesData.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </section>
      <section>
        <Review />
      </section>
    </>
  );
};

export default Home;
