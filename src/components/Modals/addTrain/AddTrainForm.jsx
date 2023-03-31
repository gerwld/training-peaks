import React from "react";
import { Field, Form } from "react-final-form";
import { NavLink } from "react-router-dom";

const AddTrainForm = ({ onAddTrain }) => {
 return (
  <Form
   initialValues={{ remember: true }}
   onSubmit={onAddTrain}
   render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="AddTrainForm">
     <label>
      <span className="l_title">Training Lable:</span>
      <Field component="input" type="text" name="email" placeholder="john@company.com" required />
     </label>
     <label>
      <span className="l_title">Decription:</span>
      <Field component="textarea" type="password" name="pass" placeholder="" required />
     </label>
     <label>
      <span className="l_title">Distance:</span>
      <Field component="input" type="text" name="email" placeholder="john@company.com" required />
     </label>
     <label>
      <span className="l_title">Date:</span>
      <Field component="input" type="password" name="pass" placeholder="••••••••" required />
     </label>
     <label>
      <span className="l_title">Link (not required):</span>
      <Field component="input" type="password" name="pass" placeholder="••••••••" required />
     </label>

     <button type="submit" className="btn_submit">
      Add Training
     </button>
    </form>
   )}
  />
 );
};

export default AddTrainForm;
