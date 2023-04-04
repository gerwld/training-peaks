import React from "react"
import { Field, Form } from "react-final-form"

const EditTrainForm = ({ onEditTrain, currentObj }) => {
 return (
  <Form
   initialValues={{ ...currentObj, date: currentObj?.start.split("T")[0] }}
   onSubmit={onEditTrain}
   render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="AddTrainForm">
     <label>
      <span className="l_title">Training Lable:</span>
      <Field component="input" type="text" name="name" placeholder="Morning Run" autoComplete="false" required />
     </label>
     <label>
      <span className="l_title">Decription:</span>
      <Field component="textarea" type="text" name="description" required autoComplete="off" />
     </label>
     <label>
      <span className="l_title">Distance:</span>
      <Field component="input" type="number" name="distance" placeholder="5km..." required autoComplete="off" />
     </label>
     <div className="label">
      <span className="l_title">Date:</span>
      <Field component="input" type="date" name="date" required />
     </div>
     <label>
      <span className="l_title">Link (not required):</span>
      <Field component="input" type="text" name="link" placeholder="strava.com/?training=123" autoComplete="off" />
     </label>

     <button type="submit" className="btn_submit">
      Submit Changes
     </button>
    </form>
   )}
  />
 )
}

export default EditTrainForm
