import React from "react";

import Form from "../Form";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (email, password) => {};

  return <Form title="register" handleClick={handleRegister} />;
};

export default SignUp;
