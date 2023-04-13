import React from "react"
import { useDispatch } from "react-redux"
import { eventToPlainObj } from "@/utils"
import DayTrain from "./DayTrain"

const RenderEvent = (eventInfo) => {
 const evObj = eventToPlainObj(eventInfo.event)
 const d = useDispatch()

 const toggleEdit = () => {
  d({ type: "TOGGLE_EDIT", payload: evObj })
 }

 return <DayTrain {...{ toggleEdit, evObj }} />
}

export default RenderEvent
