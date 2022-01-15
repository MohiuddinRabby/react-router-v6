import React from "react";
import { NavLink } from "react-router-dom";
import { navData } from "../navData";

const Nav = () => {
  const data = navData;
  return (
    <div className="mt-5">
      <ul className="nav flex-column mt-5">
        {data.map((nav) => (
          <div key={nav.id}>
            <li className="nav-item">
              <NavLink
                className={(active) => (active.isActive ? "text-danger" : "")}
                aria-current="page"
                to={`${nav.path}`}
              >
                {nav.navName}
              </NavLink>
            </li>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
