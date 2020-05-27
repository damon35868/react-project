import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="flex items-center justify-center text-base text-white">
      <ul className="flex items-center font-medium mb-0">
        <li className="mr-10 cursor-pointer hover:text-primary">primary</li>
        <li className="mr-10 cursor-pointer hover:text-primary">primary</li>
        <li className="mr-10 cursor-pointer hover:text-primary">primary</li>
        <li className="cursor-pointer hover:text-primary">primary</li>
      </ul>
      <Link to="/">
        <img
          src={require("../static/img/logo.png")}
          alt="logo"
          className="w-18 mx-24 cursor-pointer"
        />
      </Link>
      <ul className="flex items-center font-medium mb-0">
        <li className="mr-10 cursor-pointer hover:text-primary">primary</li>
        <li className="mr-10 cursor-pointer hover:text-primary">primary</li>
        <li className="mr-10 cursor-pointer hover:text-primary">primary</li>
        <li className="cursor-pointer hover:text-primary">primary</li>
      </ul>
    </header>
  );
}
