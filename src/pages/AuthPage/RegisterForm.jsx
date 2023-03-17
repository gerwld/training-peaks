import React from "react";
import { Field, Form } from "react-final-form";
import s from "./s.module.css";

const RegisterForm = ({onRegister}) => (
  <Form
   initialValues={{remember: true}}
   onSubmit={onRegister}
   render={({ handleSubmit, form }) => (
    <form onSubmit={(e) => {handleSubmit(e); form.reset()}} className={s.LoginForm}>
     <label>
      <span className={s.l_title}>Your Email:</span>
      <Field component="input" type="email" name="email" placeholder="john@company.com" required />
     </label>
     <label>
      <span className={s.l_title}>Your Password:</span>
      <Field component="input" type="password" name="pass" placeholder="••••••••" required />
     </label>
     <label>
      <span className={s.l_title}>Confirm password:</span>
      <Field component="input" type="password" name="rep-pass" placeholder="••••••••" required />
     </label>
     <label className="checkbox_input_lable">
      <Field component="input" type="checkbox" name="remember"/>
      <span className={s.l_title}>I agree to the <a href="/terms">Terms and Conditions</a></span>
     </label>
     <button type="submit" className={s.btn_submit}>Sign Up</button>
     
    </form>
   )}
  />);

export default RegisterForm;
