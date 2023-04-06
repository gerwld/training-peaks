import React from "react"
import { Form, Field } from "react-final-form"
import { useDispatch } from "react-redux"

const AddPlanDayPopup = ({ isVisible }) => {
 const d = useDispatch()

 const onSubmit = (data) => {}

 return (
  <div className={`modal modal_addplanday ${true ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">Add day #3:</h1>
    <Form
     onSubmit={onSubmit}
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
         <span className="l_title">
          Expectations: <i className="nt_gray">(not required)</i>
         </span>
         <Field component="textarea" name="expectedResult" placeholder="The goal or the details what you're expecting from that day" />
        </label>
        <label>
         <span className="l_title">
          Distance: <i className="nt_gray">(not required)</i>
         </span>
         <Field component="input" type="number" name="expectedResult" placeholder="11,5" />
        </label>
        <label>
         <span className="l_title">
          Reminder: <i className="nt_gray">(not required)</i>
         </span>
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
    <button className="btn_close">close</button>
   </div>
  </div>
 )
}

export default AddPlanDayPopup
