import React from "react";
import s from "./s.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { NavbarDefault } from "@/components";
import { userAuth, userRegister } from "@/redux/reducers/auth-reducer";


const AuthPage = ({ isReg }) => {
 const dispatch = useDispatch();
 const error = "",
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
