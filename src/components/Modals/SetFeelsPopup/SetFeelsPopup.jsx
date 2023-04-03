import React from "react"
import { useDispatch } from "react-redux"
import SetFeelsForm from "./SetFeelsForm"

const SetFeelsPopup = ({ isFeelsMode, selectedDate, currentFeelsObj }) => {
 const d = useDispatch()
 const onAddTrain = (data) => {
  onCloseFeels();
 }

 const onCloseFeels = () => {
  d({ type: "CLOSE_FEELSMODE" })
 }
 return (
  <div className={`modal modal_createnew ${isFeelsMode ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">Add Feel</h1>
    <SetFeelsForm {...{ onAddTrain, selectedDate }} />
    <button onClick={onCloseFeels} className="btn_close">
     close
    </button>
   </div>
  </div>
 )
}

export default SetFeelsPopup
