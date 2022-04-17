import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MenuItems from "./MenuItems";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="container-fluid sticky-top bg-light">
      <div className="container py-3 d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center header-container">
        <div>
          <Link
            to="/"
            className="fw-bold fs-4 text-secondary text-decoration-none"
          >
            Elite Photographer
          </Link>
        </div>

        <div className="d-flex justify-content-between align-items-start">
          <div
            className={`d-flex flex-column  flex-md-row gap-4 ${
              open ? "d-block" : "d-none"
            }`}
          >
            <MenuItems />
          </div>

          <div className="d-block d-md-none" onClick={() => setOpen(!open)}>
            {open ? (
              <AiOutlineClose
                className={open ? "d-block" : "d-none"}
              ></AiOutlineClose>
            ) : (
              <AiOutlineMenu
                className={open ? "d-none" : "d-block"}
              ></AiOutlineMenu>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
