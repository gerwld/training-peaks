import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import SetFeelsForm from "./SetFeelsForm"
import epochConvert from "utils/epochConvert"

const SetFeelsPopup = ({ isFeelsMode, selectedDate, currentFeelsObj }) => {
 const [newDate, setDate] = useState(null)
 const d = useDispatch()
 const onAddTrain = (data) => {
  onCloseFeels()
 }

 const onCloseFeels = () => {
  d({ type: "CLOSE_FEELSMODE" })
 }

 useEffect(() => {
  if (selectedDate) setDate(selectedDate)
 }, [selectedDate])

 return (
  <div className={`modal modal_createnew ${isFeelsMode ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">Add Feel ({epochConvert(newDate, true)})</h1>
    <SetFeelsForm {...{ onAddTrain, selectedDate }} />
    <button onClick={onCloseFeels} className="btn_close">
     close
    </button>
   </div>
  </div>
 )
}

export default SetFeelsPopup
