import React from "react";
import { Field, Form } from "react-final-form";
import s from "./s.module.css";
import focusOnFirstError from "final-form-focus";
import { validatePass } from "../../validators/validators";

const focusOnError = focusOnFirstError();

const errorClass = (meta) => {
  return meta.error && meta.touched ? "input_error" : "";
};

const RegisterForm = ({ onRegister, t }) => (
  <Form
    initialValues={{ remember: true }}
    validate={validatePass}
    onSubmit={onRegister}
    decorators={[focusOnError]}
    render={({ handleSubmit, submitting, submitError }) => (
      <form onSubmit={handleSubmit} className={s.LoginForm}>
        <label>
          <span className={s.l_title}>Your email:</span>
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
          <span className={s.l_title}>Your password:</span>
          <Field name="pass">
            {({ input, meta }) => (
              <div>
                <input
                  {...input}
                  type="password"
                  className={errorClass(meta)}
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
                {meta.error && meta.touched && <span className="er_red">{meta.error}</span>}
              </div>
            )}
          </Field>
        </label>
        <label>
          <span className={s.l_title}>Confirm password:</span>
          <Field name="confirmPassword">
            {({ input, meta }) => (
              <div>
                <input
                  {...input}
                  className={errorClass(meta)}
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
                {meta.error && meta.touched && <span className="er_red">{meta.error}</span>}
              </div>
            )}
          </Field>
        </label>
        <label className="checkbox_input_lable">
          <Field component="input" type="checkbox" name="remember" required />
          <span className={s.l_title}>
            I Agree to the <a href="/terms">Terms and Conditions</a>
          </span>
        </label>
        {submitError && <span className="er_red">{submitError}</span>}
        <button type="submit" className={s.btn_submit} disabled={submitting}>
          Sign Up
        </button>
      </form>
    )}
  />
);

export default RegisterForm;
