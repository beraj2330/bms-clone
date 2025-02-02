import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/main-logo.svg";
import { LoginForm } from "../../components/loginForm";
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
              <div className="auth-box h-full flex flex-col justify-center">
                <div className="text-center">
                  <Link className="2xl:pb-[35px] pb-[35px] float-left" to="/">
                    <img src={Logo} alt="" className="mx-auto" />
                  </Link>
                  <h4 className="!text-[30px] font-bold">Sign in</h4>
                </div>
                <LoginForm />
                <div className="relative"></div>
              </div>
              <div className="auth-footer text-[#000] text-center text-[16px]">
                Copyright {currentYear}, Bid Management System All Rights
                Reserved | Website by{" "}
                <a
                  href="https://www.tender247.com/"
                  className="text-[#2775AB] font-semibold inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" h-5 items-center">
                    <img
                      src={LogoImg}
                      alt="Tender247 Logo"
                      className="h-6 align-middle"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
