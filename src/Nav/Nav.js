import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="mt-5">
      <ul className="nav flex-column mt-5">
        <li className="nav-item">
          <NavLink
            className={(active) => (active.isActive ? "text-danger" : "")}
            aria-current="page"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <hr />
        <li className="nav-item">
          <NavLink
            className={(active) => (active.isActive ? "text-danger" : "")}
            aria-current="page"
            to="/blogs"
          >
            Blogs
          </NavLink>
        </li>
        <hr />
        <li className="nav-item">
          <NavLink
            className={(active) => (active.isActive ? "text-danger" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <hr />
        <li className="nav-item">
          <NavLink
            className={(active) => (active.isActive ? "text-danger" : "")}
            to="/courses"
          >
            Courses
          </NavLink>
        </li>
        <hr />
        <li className="nav-item">
          <NavLink
            className={(active) => (active.isActive ? "text-danger" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
