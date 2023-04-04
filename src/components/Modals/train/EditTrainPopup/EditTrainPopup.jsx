import React from "react"
import EditTrainForm from "./EditTrainForm"
import { useDispatch } from "react-redux"
import { updateEvent } from "@/redux/actions/event-actions"
import { deleteEvent } from "@/redux/actions/event-actions"

const EditTrainPopup = ({ isEditMode, toggleEdit, currentObj }) => {
 const d = useDispatch()

 const onEditTrain = (data) => {
  d(updateEvent(data))
 }

 const onDeleteTrain = () => {
  d(deleteEvent(currentObj.id))
 }

 return (
  <div className={`modal modal_createnew ${isEditMode ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">Edit Training</h1>
    <EditTrainForm {...{ currentObj, onEditTrain }} />
    <button onClick={onDeleteTrain} type="button" className="btn_submit btn_submit__delete">
     Delete Training
    </button>
    <button onClick={toggleEdit} className="btn_close">
     close
    </button>
   </div>
  </div>
 )
}

export default EditTrainPopup
