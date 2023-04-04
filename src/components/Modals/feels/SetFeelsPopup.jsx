import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import SetFeelsForm from "./SetFeelsForm"
import epochConvert from "utils/epochConvert"

const SetFeelsPopup = ({ isFeelsMode, selectedDate, currentFeelsObj }) => {
  const [isOpened, setIsOpened] = useState(isFeelsMode);
 const d = useDispatch()

 const onAddFeel = (data) => {
  onCloseFeels()
 }

 const onCloseFeels = () => {
  setIsOpened(false)
  setTimeout(() => {
    d({ type: "CLOSE_FEELSMODE" })
  }, 300);
 }

 useEffect(() => {
  if(isFeelsMode !== isOpened) setIsOpened(isFeelsMode);
 }, [isFeelsMode])

 return (
  <div className={`modal modal_createnew ${isOpened ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">
     {currentFeelsObj ? "Edit" : "Add"} Feel ({epochConvert(selectedDate, true)})
    </h1>
    <SetFeelsForm {...{ onAddFeel, selectedDate, currentFeelsObj }} />
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
