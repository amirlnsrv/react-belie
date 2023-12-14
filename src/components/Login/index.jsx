import React from "react";

import Form from "../Form";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";

import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogin = (email, password) => {};

  return <Form title="sign in" handleClick={handleLogin} />;
};

export default Login;
