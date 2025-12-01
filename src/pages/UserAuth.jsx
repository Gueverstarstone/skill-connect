import React from "react";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function UserAuth() {
  const location = useLocation();

  // if path is /register → show Register
  // otherwise (/ or /login) → show Login
  const isRegisterPage = location.pathname === "/register";

  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover"
      style={{ backgroundImage: "url(/assets/landing.jpg)" }} // from public/assets
    >
      {isRegisterPage ? <Register /> : <Login />}
    </div>
  );
}

export default UserAuth;
