import React from "react"
import { Form, Field } from "react-final-form"
import { useDispatch } from "react-redux"

const AddPlanTitleSetPopup = ({isVisible}) => {
 const d = useDispatch()

 const onPlanTitleCreate = (data) => {}

 return (
  <div className={`modal modal_createnew ${isVisible ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">Lets create new plan:</h1>
    <Form
      initialValues={{title: 'New Plan #1'}}
     onSubmit={onPlanTitleCreate}
     render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="addplan_popup">
       <label>
        <span className="l_title">Plan Title:</span>
        <Field component="input" type="text" name="title" placeholder="Plan title..." />
       </label>
       <div className="submit_wrapper">
        <button type="submit">Cancel</button>
        <button type="submit">Create Plan</button>
       </div>
      </form>
     )}
    />
    <button className="btn_close">close</button>
   </div>
  </div>
 )
}

export default AddPlanTitleSetPopup
