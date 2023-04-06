import React from "react"
import { Form, Field } from "react-final-form"

const AddPlanForm = ({ onItemSubmit }) => (
 <Form
  onSubmit={onItemSubmit}
  render={({ handleSubmit }) => (
   <form onSubmit={handleSubmit} className="addplan_form">
    <label>
     <span className="l_title">Title:</span>
     <Field component="input" type="text" name="title" placeholder="Title..." />
    </label>
    <label>
     <span className="l_title">Description:</span>
     <Field component="textarea" name="description" placeholder="Describe your plan for that day. Detailed, but short and clear" />
    </label>
    <label>
     <span className="l_title">Expectations (not required):</span>
     
     <Field component="textarea" name="expectedResult" placeholder="The goal or the details what you're expecting from that day" />
    </label>
    <label>
     <span className="l_title">Distance (not required):</span>
     <Field component="input" type="number" name="expectedResult" placeholder="Total distance for the day" />
    </label>
    <label>
     <span className="l_title">Reminder (not required):</span>
     <Field component="input" type="text" name="expectedResult" placeholder="Go on massage after trial..." />
    </label>
   </form>
  )}
 />
)

export default AddPlanForm
