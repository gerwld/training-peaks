import React from "react"
import { useDispatch } from "react-redux"

import EditTrainForm from "./EditTrainForm"
import { updateTrain, deleteTrains } from "redux"

const EditTrainPopup = ({ isEditMode, toggleEdit, currentObj }) => {
 const d = useDispatch()

 const onEditTrain = (data) => {
  d(updateTrain(data))
 }

 const onDeleteTrain = () => {
  d(deleteTrains(currentObj.id))
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
