import React, { useState } from "react";
import "./AuthPage.css";
import Login from "../components/auth/Login";
import MoboLogin from "../components/auth/MoboLogin";

const AuthPage = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      {" "}
      <div className="Auth_main_div">
        <h1 className=" text-[50px] text-center">Welcome to CulinaShare</h1>
        <p>Please log in or sign up below</p>
        <div className="mt-5 flex gap-4">
          <button
            className="border border-[#a7462c] rounded py-2 px-5 text-[18px] font-semibold bg-bg_secondary1 shadow-btn_shadow"
            onClick={() => setLogin(true)}
          >
            Get Started
          </button>
        </div>
      </div>
      {login && <Login setLogin = {setLogin}/>}
      {login && <MoboLogin setLogin = {setLogin}/>}
    </>
  );
};

export default AuthPage;
