import React from "react";
import { Field, Form } from "react-final-form";
import s from "./s.module.css";

const RegisterForm = ({ onRegister }) => (
 <Form
  initialValues={{ remember: true }}
  onSubmit={onRegister}
  render={({ handleSubmit, form }) => (
   <form
    onSubmit={(e) => {
     handleSubmit(e);
     form.reset();
    }}
    className={s.LoginForm}
   >
    <label>
     <span className={s.l_title}>Your Email:</span>
     <Field component="input" type="email" name="email" placeholder="john@company.com" required />
    </label>

    <div className={s.select_block}>
     <div className={s.select_item}>
      <Field name="PreferredSport" component="select" required defaultValue="">
       <option value="" disabled>
        Primary Sport
       </option>
       <option value="Swimmer">Swimmer</option>
       <option value="Runner">Runner</option>
       <option value="Duathlete">Duathlete</option>
       <option value="Triathlete">Triathlete</option>
       <option value="Cyclist">Cyclist</option>
       <option value="MTB">Mountain Biker</option>
       <option value="AdventureRacer">Adventure Racer</option>
       <option value="Climber">Climber</option>
       <option value="Other">Other</option>
      </Field>
     </div>

     <div className={s.select_item}>
      <Field name="gender" component="select" required defaultValue="">
       <option value="" disabled>
        Gender
       </option>
       <option value="saab">Male</option>
       <option value="mercedes">Female</option>
      </Field>
     </div>
    </div>

    <label>
     <span className={s.l_title}>Your Password:</span>
     <Field component="input" type="password" name="pass" placeholder="••••••••" required />
    </label>
    <label>
     <span className={s.l_title}>Confirm password:</span>
     <Field component="input" type="password" name="rep-pass" placeholder="••••••••" required />
    </label>
    <label className="checkbox_input_lable">
     <Field component="input" type="checkbox" name="remember" required />
     <span className={s.l_title}>
      I agree to the <a href="/terms">Terms and Conditions</a>
     </span>
    </label>
    <button type="submit" className={s.btn_submit}>
     Sign Up
    </button>
   </form>
  )}
 />
);

export default RegisterForm;
