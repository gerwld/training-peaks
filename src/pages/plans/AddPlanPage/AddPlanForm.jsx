import React, { useEffect, useState } from "react"
import { Form, Field } from "react-final-form"
import { MdClose } from "react-icons/md"
import { useDispatch } from "react-redux"

const AddPlanForm = (props) => {
 const { isEditMode, toggleEdit, currentObj, toggleAdd } = props;
 const currentDay = currentObj?.planDayNumber ? currentObj?.planDayNumber 
                  : props.planDayNumber ? props.planDayNumber
                  : 1;

const onClose = () => {
  if(toggleAdd) toggleAdd();
  else toggleEdit();
  }

 return (
  <div className="addplan_wrap">
   <div className="addplanitem__nav">
    <span className="addplanitem__index">{isEditMode ? 'Edit' : 'Add'} Day #{currentDay}</span>
    <div className="addplain__btns">
     <button onClick={onClose} title="Delete Plan Day">
      <MdClose />
     </button>
    </div>
   </div>

   <FormComponent {...{ ...props, currentDay, onClose }} />
  </div>
 )
}

const FormComponent = ({ currentObj, currentDay, isEditMode, onClose }) => {
 const [isFreeDay, setFreeDay] = useState(currentObj?.isFreeDay || false)
 const d = useDispatch()

 const onFreeDayChange = () => {
  setFreeDay(!isFreeDay)
 }

 const onSubmit = (data) => {
  if (isFreeDay || isEditMode)
       d({ type: "UPDATE_PLANDAY", payload: {...data, isFreeDay, planDayNumber: currentDay} });
  else d({ type: "ADD_PLANDAY", payload: {...data, isFreeDay, planDayNumber: currentDay} });
 }

 useEffect(() => {
  setFreeDay(currentObj?.isFreeDay || false)
 }, [currentDay])

 return (
   <Form
    onSubmit={onSubmit}
    initialValues={{
     ...currentObj,
     planDayNumber: currentDay,
    }}
    render={({ handleSubmit }) => (
     <form onSubmit={handleSubmit} className="addplan_form">
      {/* FREE DAY SET  */}
      <label className="checkbox_input_lable">
       <input type="checkbox" checked={isFreeDay} onChange={onFreeDayChange} />
       <span className="l_title">Set as free day</span>
      </label>

      <label>
       <span className="l_title">Title:</span>
       <Field component="input" type="text" name="title" placeholder="Title..." required={!isFreeDay} />
      </label>
      <label>
       <span className="l_title">Description:</span>
       <Field component="textarea" name="description" placeholder="Describe your plan for that day. Detailed, but short and clear" />
      </label>
      <label>
       <span className="l_title">
        Distance: <i className="nt_gray">(not required)</i>
       </span>
       <Field component="input" type="number" name="distance" placeholder="Total distance for the day" />
      </label>
      <label>
       <span className="l_title">
        Reminder: <i className="nt_gray">(not required)</i>
       </span>
       <Field component="input" type="text" name="reminder" placeholder="Go on massage after trial..." />
      </label>
      <div className="submit_wrapper">
       <button onClick={onClose} type="button">Cancel</button>
       <button type="submit">Submit</button>
      </div>
     </form>
    )}
   />
  )
}
export default AddPlanForm
