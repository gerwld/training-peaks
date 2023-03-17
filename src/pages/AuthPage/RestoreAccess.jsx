import React from "react";
import { Field, Form } from "react-final-form";

import { NavbarDefault } from "../../components";
import s from "./s.module.css";

const RestoreAccess = () => {

  const onRestore = () => {

  }

 return (
  <div className={s.restore_content}>
      <NavbarDefault />
   <div className={`${s.restore_wrapper} content_wrapper`}>
    <div className={s.restore_block}>
      <h1 className={s.header}>Forgot your password?</h1>
      <p className={s.restore_sub}>Type in your email and we will send you a code to reset your password</p>

      <Form
   initialValues={{remember: true}}
   onSubmit={onRestore}
   render={({ handleSubmit, form }) => (
    <form onSubmit={(e) => {handleSubmit(e); form.reset()}} className={s.LoginForm}>
     <label>
      <span className={s.l_title}>Your Email:</span>
      <Field component="input" type="email" name="email" placeholder="john@company.com" required />
     </label>
    
     <button type="submit" className={s.btn_submit}>Recover Password</button>
    </form>
   )}
  />
    </div>
   </div>
  </div>
 );
};

export default RestoreAccess;
