import React from "react"
import { Form, Field } from "react-final-form"
import { MdClose } from "react-icons/md"

const AddPlanForm = (props) => {
  const currentDay = props.currentObj?.planDayNumber ? props.currentObj?.planDayNumber : props.planDayNumber ? props.planDayNumber + 1 : 1;
  
 return (
  <div className="addplan_wrap">
   <div className="addplanitem__nav">
    <span className="addplanitem__index">Add Day #{currentDay}</span>
    <div className="addplain__btns">
     <button title="Delete Plan Day">
      <MdClose />
     </button>
    </div>
   </div>

   <FormComponent {...{...props,currentDay}} />
  </div>
 )
}

const FormComponent = ({ onItemSubmit, currentObj, currentDay }) => (
 <Form
  onSubmit={onItemSubmit}
  initialValues={{
    ...currentObj,
    planDayNumber: currentDay
  }}
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
      <span className="l_title">Distance: <i className="nt_gray">(not required)</i></span>
      <Field component="input" type="number" name="distance" placeholder="Total distance for the day" />
     </label>
     <label>
      <span className="l_title">Reminder: <i className="nt_gray">(not required)</i></span>
      <Field component="input" type="text" name="reminder" placeholder="Go on massage after trial..." />
     </label>
     <div className="submit_wrapper">
     <button type="button">Cancel</button>
      <button type="submit">Submit</button>
     </div>
   </form>
  )}
 />
)

export default AddPlanForm
