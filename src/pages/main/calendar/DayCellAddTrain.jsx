import React from "react"
import { useDispatch } from "react-redux"
import { setCreateMode } from "@/redux/actions/app-actions"
import { CiCirclePlus } from "react-icons/ci"
import { epochDateConvert } from "@/utils"

const DayCellAddTrain = (selectInfo) => {
 const d = useDispatch()
 const handleDateSelect = async () => {
  const dateSelected = epochDateConvert(selectInfo.date, false)
  d(setCreateMode(true, dateSelected))
 }

 return (
  <button onClick={handleDateSelect} className="fc_addbtn">
   <CiCirclePlus />
  </button>
 )
}

export default DayCellAddTrain
