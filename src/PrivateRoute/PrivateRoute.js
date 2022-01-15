import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return (
    <div>
     
      {auth ? children : <Navigate to="/login" />}
    </div>
  );
};

export default PrivateRoute;
