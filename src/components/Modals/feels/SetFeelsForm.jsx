import React from "react"
import { Field, Form } from "react-final-form"
import epochConvert from "@/utils/epochConvert"

const SetFeelsForm = ({ onAddFeel, selectedDate }) => {
 const date = epochConvert(selectedDate, true)

 return (
  <Form
   initialValues={{ date, mood: 8 }}
   onSubmit={onAddFeel}
   render={({ handleSubmit }) => (
    <form onSubmit={handleSubmit} className="SetFeelsForm">
     <label>
      <span className="l_title">Weight:</span>
      <Field component="input" type="number" name="weight" placeholder="72" required autoComplete="off" />
      <i>KG</i>
     </label>
     <label>
      <span className="l_title">Heart Rate:</span>
      <Field component="input" type="number" name="heartRate" placeholder="90" autoComplete="false" required />
      <i>BPM</i>
     </label>
     <label>
      <span className="l_title">Sleep Hours:</span>
      <Field component="input" type="number" name="heartRate" placeholder="8" autoComplete="false" required />
      <i>hrs</i>
     </label>

     <label>
      <span className="l_title">Mood:</span>
      <div className="l_group">
       <Field component="input" className="slider" type="range" name="mood" min="0" max="10" autoComplete="false" required />
       <Field component="input" type="number" name="mood" />
      </div>
     </label>

     <label>
      <span className="l_title">More info (not required):</span>
      <Field component="textarea" type="text" name="text" placeholder="Today my mood is decent..." required autoComplete="off" />
     </label>

     <button type="submit" className="btn_submit">
      Add Feel
     </button>
    </form>
   )}
  />
 )
}

export default SetFeelsForm
