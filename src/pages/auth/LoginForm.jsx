import React from "react";
import { Field, Form } from "react-final-form";
import { NavLink } from "react-router-dom";
import s from "./s.module.css";

const LoginForm = ({ onLogin }) => {
  return (
    <Form
      initialValues={{ remember: true }}
      onSubmit={onLogin}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={s.LoginForm}>
          <label>
            <span className={s.l_title}>Your Email:</span>
            <Field component="input" type="text" name="email" placeholder="john@company.com" required />
          </label>
          <label>
            <span className={s.l_title}>Your Password:</span>
            <Field component="input" type="password" name="pass" placeholder="••••••••" required />
          </label>
          <NavLink to="/forgot-password" className={s.lost_link}>
            Lost password?
          </NavLink>
          <button type="submit" className={s.btn_submit}>
            Login
          </button>
        </form>
      )}
    />
  );
};

export default LoginForm;
