import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchFeels, fetchTrains, updateTrain } from "redux/actions/event-actions"
import eventToPlainObj from "utils/eventToPlainObj"
import {epochDateConvert, epochDayConvert} from "utils/epochConvert"
import { fetchStatistics } from "redux/actions/statistics"

const withCalendar = (Component) => {
 return (props) => {
  const d = useDispatch()

  const handleDates = (rangeInfo) => {
   let fromDate = epochDateConvert(rangeInfo.startStr)
   let toDate = epochDateConvert(rangeInfo.endStr)

   let fromDay = epochDayConvert(rangeInfo.startStr)
   let toDay = epochDayConvert(rangeInfo.endStr)

   d(fetchTrains(fromDate, toDate))
   d(fetchFeels(fromDay, toDay))
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
