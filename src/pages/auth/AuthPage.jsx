import React from "react";
import s from "./s.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { NavbarDefault } from "@/components";
import { userAuth, userRegister } from "@/redux/reducers/auth-reducer";
import useRegSuccess from "@/hooks/useRegSuccess";

const AuthPage = ({ isReg }) => {
 useRegSuccess();
 const dispatch = useDispatch();

 let error = "",
  message = "";

 const onLogin = (res) => {
  dispatch(userAuth(res));
 };

 const onRegister = (res) => {
  dispatch(userRegister(res));
 };

 return (
  <div className={s.bg_wrapper}>
   <div className={s.login_content}>
    <NavbarDefault />
    <div className={`${s.login_wrapper} content_wrapper`}>
     <div className={s.login_block}>
      <div className={s.login_block_content}>
       <h1 className={s.header}>{isReg ? "Create an account" : "Sign In to our platform"}</h1>

       <div className={s.fast_auth}>
        <NavLink to="/oauth/google/" className={s.fast_auth_block}>
         <img src="./assets/img/google.svg" />
         <span>Continue with Google</span>
        </NavLink>
        {/* <button className={s.fast_auth_block}>
         <img src="./assets/img/apple.svg" />
         <span>Continue with Apple</span>
        </button> */}

        <div className={s.fast_auth_sub_wrapper}>
         <span className={s.fast_auth_sub}>Or sign {isReg ? "up" : "in"} with email</span>
        </div>
       </div>

       {error?.length ? <span className="error-box">{error}</span> : ""}
       {message?.length ? <span className="success-box">{message}</span> : ""}

       {isReg ? <RegisterForm onRegister={onRegister} /> : <LoginForm onLogin={onLogin} />}

       {isReg ? (
        <span className={s.log_nav}>
         Already have an account? <NavLink to="/sign-in">Login here</NavLink>
        </span>
       ) : (
        <span className={s.log_nav}>
         Not registered? <NavLink to="/sign-up">Create account</NavLink>
        </span>
       )}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AuthPage;
