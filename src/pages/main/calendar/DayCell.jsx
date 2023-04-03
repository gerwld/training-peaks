import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setCreateMode } from "@/redux/actions/app-actions"
import { CiCirclePlus } from "react-icons/ci"
import epochConvert from "@/utils/epochConvert"

const DayCell = (selectInfo) => {
 const d = useDispatch()
 const handleDateSelect = async () => {
  const dateSelected = epochConvert(selectInfo.date, false)
  d(setCreateMode(true, dateSelected))
 }

 return (
   <button onClick={handleDateSelect} className="fc_addbtn">
    <CiCirclePlus />
   </button>
 )
}

export default DayCell
