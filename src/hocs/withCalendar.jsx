import React from "react"
import { useDispatch } from "react-redux"
import { fetchEvents, updateEvent } from "redux/actions/event-actions"
import eventToPlainObj from "utils/eventToPlainObj"

const withCalendar = (Component) => {
 return (props) => {
  const d = useDispatch()

  const handleDates = (rangeInfo) => {
   d(fetchEvents(rangeInfo.startStr, rangeInfo.endStr))
  }

  const handleEventChange = (changeInfo) => {
   let newObj = eventToPlainObj(changeInfo.event)
   d(updateEvent(newObj))
  }

  return <Component {...{ ...props, handleDates, handleEventChange }} />
 }
}

export default withCalendar
