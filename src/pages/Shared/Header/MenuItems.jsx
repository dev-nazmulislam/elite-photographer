import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const MenuItems = () => {
  return (
    <>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/services">Services</CustomLink>
      <CustomLink to="/blog">Blog</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/login">Login</CustomLink>
    </>
  );
};

export default MenuItems;
