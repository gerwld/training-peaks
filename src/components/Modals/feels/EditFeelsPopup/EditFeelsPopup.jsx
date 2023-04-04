import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import AddFeelsForm from "./EditFeelsForm"
import epochConvert from "utils/epochConvert"

const AddFeelsPopup = ({ isFeelsMode, selectedDate, currentFeelsObj }) => {
 const [newDate, setDate] = useState(null)
 const d = useDispatch()

 const onAddFeel = (data) => {
  onCloseFeels()
 }

 const onCloseFeels = () => {
  d({ type: "CLOSE_FEELSMODE" })
 }

 useEffect(() => {
  selectedDate && setDate(selectedDate)
 }, [selectedDate])

 return (
  <div className={`modal modal_createnew ${isFeelsMode ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">
     {currentFeelsObj ? "Edit" : "Add"} Feel ({epochConvert(newDate, true)})
    </h1>
    <AddFeelsForm {...{ onAddFeel, selectedDate, currentFeelsObj }} />
    <button onClick={onCloseFeels} className="btn_close">
     close
    </button>
   </div>
  </div>
 )
}

export default AddFeelsPopup
