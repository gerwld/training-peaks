import React from "react"
import { useDispatch } from "react-redux"

import AddTrainForm from "./AddTrainForm"
import { createTrains } from "redux"

const AddTrainPopup = ({ isCreateMode, toggleCreate, selectedDate }) => {
 const d = useDispatch()
 const onAddTrain = (data) => {
  d(createTrains(data))
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
