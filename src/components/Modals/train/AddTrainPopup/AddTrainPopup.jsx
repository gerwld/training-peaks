import React from "react"
import AddTrainForm from "./AddTrainForm"
import { useDispatch } from "react-redux"
import { createEvent } from "@/redux/actions/event-actions"

const AddTrainPopup = ({ isCreateMode, toggleCreate, selectedDate }) => {
 const d = useDispatch()
 const onAddTrain = (data) => {
  d(createEvent(data))
 }

 return (
  <div className={`modal modal_createnew ${isCreateMode ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">Add Training</h1>
    <AddTrainForm {...{ onAddTrain, selectedDate }} />
    <button onClick={toggleCreate} className="btn_close">
     close
    </button>
   </div>
  </div>
 )
}

export default AddTrainPopup
