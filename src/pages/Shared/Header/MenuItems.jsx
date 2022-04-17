import { signOut } from "firebase/auth";
import React from "react";
import { Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const MenuItems = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/services">Services</CustomLink>
      <a className="text-decoration-none text-black" href="/home#review">
        Review
      </a>
      <CustomLink to="/blog">Blog</CustomLink>
      <CustomLink to="/about">About Me</CustomLink>
      {user ? (
        <button onClick={() => signOut(auth)} className="border-0 bg-light">
          Logout
        </button>
      ) : (
        <CustomLink to="/login">Login</CustomLink>
      )}
    </>
  );
};

export default MenuItems;
