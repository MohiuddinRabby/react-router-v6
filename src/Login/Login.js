import React from "react";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const auth = useAuth();

  return (
    <div className="mt-5 bg-light p-2">
      <h1>Login Here</h1>
      {auth ? <h4>True</h4> : <h4>False</h4>}
      <button>Log in</button>
    </div>
  );
};

export default Login;
