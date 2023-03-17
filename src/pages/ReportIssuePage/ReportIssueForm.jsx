import React from "react";
import { Field, Form } from "react-final-form";
import s from "./s.module.css";

const ReportIssueForm = ({ onReport }) => {

 return (
  <Form
   initialValues={{ remember: true }}
   onSubmit={onReport}
   render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className={s.form}>
     <label>
      <span className={s.l_title}>Report Title:</span>
      <Field component="input" type="text" name="title" placeholder="Title..." required />
     </label>

     <label>
      <span className={s.l_title}>Describe the Issue:</span>
      <Field component="textarea" type="text" name="desc" placeholder="" className={s.textarea} required />
     </label>


     <button type="submit" className={s.btn_submit}>
      Sumbit
     </button>
    </form>
   )}
  />
 );
};

export default ReportIssueForm;
