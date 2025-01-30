import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/main-logo.svg";
import Illustation from "../../assets/images/auth/main-illustation.svg";
import LoginForm from "../../components/loginForm";
import { ToastContainer } from "react-toastify";
import LogoImg from "../../assets/images/tender-logo.svg";

const Login = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <ToastContainer limit={1} />
      <div className="loginwrapper">
        <div className="lg-inner-column">
          <div className="left-column relative z-[1]">
            <div className="absolute left-0 2xl:bottom-[-65px] bottom-[-130px] h-full w-full z-[-1]">
              <img
                src={Illustration}
                alt=""
                className="h-full w-[90%] mx-auto"
              />
            </div>
          </div>
          <div className="right-column relative">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
            <div className="auth-box h-full flex flex-col justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
