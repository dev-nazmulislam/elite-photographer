import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import "./Cart.css";

const Cart = ({ review }) => {
  const { name, img, time, description } = review;
  return (
    <div className="shadow  bg-white p-2 mb-4 ">
      <div className="d-flex gap-2">
        <img
          style={{ height: "100px", width: "100px" }}
          className="rounded"
          src={img}
          alt=""
        />
        <div>
          <div className="d-flex gap-2">
            <h4>{name}</h4>
            <p>{time}</p>
          </div>
          <p>
            {
              <span className="d-flex">
                <AiOutlineStar className="fs-4 text-warning"></AiOutlineStar>
                <AiOutlineStar className="fs-4 text-warning"></AiOutlineStar>
                <AiOutlineStar className="fs-4 text-warning"></AiOutlineStar>
                <AiOutlineStar className="fs-4 text-warning"></AiOutlineStar>
                <AiOutlineStar className="fs-4 text-warning"></AiOutlineStar>
              </span>
            }
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
