import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="flex items-center justify-center text-base text-white">
      <ul className="flex items-center font-medium mb-0">
        <li className="mr-10 cursor-pointer hover:text-primary">HOME</li>
        <li className="mr-10 cursor-pointer hover:text-primary">ABOUT</li>
        <li className="mr-10 cursor-pointer hover:text-primary">NEWS</li>
        <li className="cursor-pointer hover:text-primary">OFFERS</li>
      </ul>
      <Link to="/">
        <img
          src={require("../static/img/logo.png")}
          alt="logo"
          className="w-18 mx-24 cursor-pointer"
        />
      </Link>
      <ul className="flex items-center font-medium mb-0">
        <li className="mr-10 cursor-pointer hover:text-primary">GALLERY</li>
        <li className="mr-10 cursor-pointer hover:text-primary">CONTACT</li>
        <li className="mr-10 cursor-pointer hover:text-primary">ADDRESS</li>
        <li className="cursor-pointer hover:text-primary">BLOG</li>
      </ul>
    </header>
  );
}
