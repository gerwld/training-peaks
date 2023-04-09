import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import SetFeelsForm from "./SetFeelsForm"
import {epochDateConvert} from "utils/epochConvert"
import { createFeel, updateFeel } from "redux/actions/event-actions"

const SetFeelsPopup = ({ isFeelsMode, selectedDate, currentFeelsObj }) => {
 const [isOpened, setIsOpened] = useState(isFeelsMode)
 const d = useDispatch()

 const onSubmit = (data) => {
  if (currentFeelsObj) {
   d(updateFeel(data))
  } else {
   d(createFeel(data))
  }
  onCloseFeels()
 }

 const onCloseFeels = () => {
  setIsOpened(false)
  setTimeout(() => {
   d({ type: "CLOSE_FEELSMODE" })
  }, 300)
 }

 useEffect(() => {
  if (isFeelsMode !== isOpened) setIsOpened(isFeelsMode)
 }, [isFeelsMode])

 return (
  <div className={`modal modal_createnew ${isOpened ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">
     {currentFeelsObj ? "Edit" : "Add"} Feel ({epochDateConvert(selectedDate, true)})
    </h1>
    <SetFeelsForm {...{ onSubmit, selectedDate, currentFeelsObj }} />
    <button onClick={onCloseFeels} type="button" className="btn_submit btn_submit__delete">
     Cancel
    </button>
    <button onClick={onCloseFeels} className="btn_close">
     close
    </button>
   </div>
  </div>
 )
}

export default SetFeelsPopup
