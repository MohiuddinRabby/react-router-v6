import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  const makeAuthTrue = () => {
    setAuth(true);
    navigate(-1);
  };
  return (
    <div className="mt-5 bg-light p-2">
      <h2>To access login first</h2>
      <button className="btn btn-primary btn-sm" onClick={makeAuthTrue}>
        Login
      </button>
    </div>
  );
};

export default Login;
