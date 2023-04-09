import React from "react"
import { useDispatch } from "react-redux"
import {epochDateConvert} from "utils/epochConvert"
import { addFeelsMode } from "redux/actions/app-actions"

const withSetFeel = (Children) => {
 return (props) => {
  const d = useDispatch()
  const { dayFeel, date } = props
  const selectedDate = epochDateConvert(date, false)

  const onFeelSelect = async () => {
   d(addFeelsMode(dayFeel, true, selectedDate))
  }

  return <Children {...{ ...props, onFeelSelect }} />
 }
}

export default withSetFeel
