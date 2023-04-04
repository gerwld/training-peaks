import React from "react"
import { useDispatch } from "react-redux"
import epochConvert from "utils/epochConvert"
import { addFeelsMode } from "redux/actions/app-actions"

const withSetFeel = (Children) => {
 return (props) => {
  const d = useDispatch()
  const { findFeel, date } = props
  const selectedDate = epochConvert(date, false)

  const onFeelSelect = async () => {
   d(addFeelsMode(findFeel, true, selectedDate))
  }

  return <Children {...{ ...props, onFeelSelect }} />
 }
}

export default withSetFeel
