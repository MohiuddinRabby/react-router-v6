import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateOutlet = () => {
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useContext(AuthContext);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
