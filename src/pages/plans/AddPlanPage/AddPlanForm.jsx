import React from "react"
import { Form, Field } from "react-final-form"
import { MdClose } from "react-icons/md"

const AddPlanForm = ({daysTotal}) => {
 const onItemSubmit = () => {}
 return (
  <div className="addplan_wrap">
   <div className="addplanitem__nav">
    <span className="addplanitem__index">Add Day #{Number(daysTotal) + 1}</span>
    <div className="addplain__btns">
     <button title="Delete Plan Day">
      <MdClose />
     </button>
    </div>
   </div>

   <FormComponent onItemSubmit={onItemSubmit} />
  </div>
 )
}

const FormComponent = ({ onItemSubmit }) => (
 <Form
  onSubmit={onItemSubmit}
  render={({ handleSubmit }) => (
   <form onSubmit={handleSubmit} className="addplan_form">
    <div className="group">
     <label>
      <span className="l_title">Title:</span>
      <Field component="input" type="text" name="title" placeholder="Title..." />
     </label>
     <label>
      <span className="l_title">Description:</span>
      <Field component="textarea" name="description" placeholder="Describe your plan for that day. Detailed, but short and clear" />
     </label>
    </div>
    <div className="group">
     <label>
      <span className="l_title">Expectations: <i className="nt_gray">(not required)</i></span>
      <Field component="textarea" name="expectedResult" placeholder="The goal or the details what you're expecting from that day" />
     </label>
     <label>
      <span className="l_title">Distance: <i className="nt_gray">(not required)</i></span>
      <Field component="input" type="number" name="expectedResult" placeholder="Total distance for the day" />
     </label>
     <label>
      <span className="l_title">Reminder: <i className="nt_gray">(not required)</i></span>
      <Field component="input" type="text" name="expectedResult" placeholder="Go on massage after trial..." />
     </label>
     <div className="submit_wrapper">
     <button type="submit">Cancel</button>
      <button type="submit">Add / Update day</button>
     </div>
    </div>
   </form>
  )}
 />
)

export default AddPlanForm
