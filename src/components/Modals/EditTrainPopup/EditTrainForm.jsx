import React from "react";
import { Field, Form } from "react-final-form";

const EditTrainForm = ({ onEditTrain }) => {
 return (
  <Form
   initialValues={{ remember: true }}
   onSubmit={() => e}
   render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="AddTrainForm">
     <label>
      <span className="l_title">Training Lable:</span>
      <Field component="input" type="text" name="title" placeholder="Morning Run" autoComplete="false" required />
     </label>
     <label>
      <span className="l_title">Decription:</span>
      <Field component="textarea" type="text" name="desc" placeholder="" required autoComplete="off" />
     </label>
     <label>
      <span className="l_title">Distance:</span>
      <Field component="input" type="text" name="distance" placeholder="5km..." required autoComplete="off" />
     </label>
     <div className="label">
      <span className="l_title">Date:</span>
      <Field component="input" type="date" name="date" placeholder="••••••••" required />
     </div>
     <label>
      <span className="l_title">Link (not required):</span>
      <Field component="input" type="text" name="link" placeholder="strava.com/?training=123" required autoComplete="off" />
     </label>

     <button type="submit" className="btn_submit">
      Add Training
     </button>
    </form>
   )}
  />
 );
};

export default EditTrainForm;
