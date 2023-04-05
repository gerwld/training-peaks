import React from "react"
import { useDispatch } from "react-redux"
import { fetchFeels, fetchTrains, updateTrain } from "redux/actions/event-actions"
import eventToPlainObj from "utils/eventToPlainObj"
import epochConvert from "utils/epochConvert"
import { fetchStatistics } from "redux/actions/statistics"

const withCalendar = (Component) => {
 return (props) => {
  const d = useDispatch()

  const handleDates = (rangeInfo) => {
   let fromDate = epochConvert(rangeInfo.startStr)
   let toDate = epochConvert(rangeInfo.endStr)
   d(fetchTrains(fromDate, toDate))
   d(fetchFeels(fromDate, toDate))
   d(fetchStatistics(fromDate, toDate))
  }

  const handleEventChange = (changeInfo) => {
   let newObj = eventToPlainObj(changeInfo.event)
   d(updateTrain(newObj))
  }

  return <Component {...{ ...props, handleDates, handleEventChange }} />
 }
}

export default withCalendar
