import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";
import { ImFacebook, ImLocation2 } from "react-icons/im";
import { AiOutlineTwitter, AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import MenuItems from "../Header/MenuItems";

const Footer = () => {
  return (
    <footer className="container-fluid bg-light py-5 px-0 mt-5">
      <div className="container mx-auto">
        <div className="row px-0">
          <div className="col-12 col-md-6 col-lg-4">
            <Link
              to="/"
              className="fw-bold fs-4 text-secondary text-decoration-none"
            >
              Elite Studio
            </Link>
            <h6 className="d-flex align-items-center gap-3 mt-3">
              <ImLocation2 />
              Level-4, 34, Awal Centre, Banani, Dhaka
            </h6>
            <h6 className="d-flex align-items-center gap-3">
              <CgMail />
              Official: web@programming-hero.com
            </h6>
            <h6 className="d-flex align-items-center gap-3">
              <IoMdCall />
              Helpline : 01322810873 , 01322810869
            </h6>
            <h6>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</h6>
          </div>

          <div className=" col-12 col-md-6 col-lg-4 text-center mt-5">
            <MenuItems />
            <div className=" d-flex align-items-center justify-content-center gap-2 mt-3">
              <a href="https://github.com/dev-nazmulislam">
                <ImFacebook className="fs-3" />
              </a>
              <a href="https://github.com/dev-nazmulislam">
                <AiOutlineTwitter className="fs-3" />
              </a>
              <a href="https://github.com/dev-nazmulislam">
                <AiFillGithub className="fs-3" />
              </a>
              <a href="https://github.com/dev-nazmulislam">
                <FaLinkedinIn className="fs-3" />
              </a>
              <a href="https://github.com/dev-nazmulislam">
                <AiFillYoutube className="fs-3" />
              </a>
            </div>
          </div>

          <div className="d-none d-lg-block col-lg-4 mt-5">
            <img
              className="img-fluid w-100"
              src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4">
        <div className="text-center text-blue-700 pt-12 font-normal flex items-center justify-center">
          All Rights Reserved By &copy; Elite Studio 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
