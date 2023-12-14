import React from "react";
import { useAuth } from "../../hooks/use-auth";
import { Navigate } from "react-router";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/slices/userSlice";

const Profile = () => {
  const { isAuth, email } = useAuth();

  const dispatch = useDispatch();

  return isAuth ? (
    <div>
      <h2>Профиль</h2>

      <button onClick={() => dispatch(removeUser())}>Выйти из аккаунта</button>
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
};

export default Profile;
