import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/Auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button onClick={logoutHandler} className="btn btn-square bg-neutral">
      <i className="ri-logout-box-r-line text-slate-200"></i>
    </button>
  );
};

export default LogoutBtn;
