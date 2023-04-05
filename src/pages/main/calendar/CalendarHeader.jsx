import React, { useEffect, useState } from "react"
import moment from "moment"

import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { AiOutlineBarChart, AiOutlinePlus } from "react-icons/ai"
import { setCreateMode } from "redux/actions/app-actions"
import { useDispatch } from "react-redux"
import epochConvert from "../../../utils/epochConvert"

const CalendarHeader = ({ calendarRef }) => {
 const d = useDispatch()
 const [title, settitle] = useState(new moment().format("MMMM DD, YYYY"))
 const [calendarApi, setApi] = useState()
 const setTitle = () => settitle(calendarApi.currentDataManager.data.viewTitle)

 useEffect(() => {
  settitle(calendarRef.current.getApi().currentDataManager.data.viewTitle)
  setApi(calendarRef.current.getApi())
 }, [title])

 const nextHandle = () => {
  calendarApi.next()
  setTitle()
 }
 const prevHandle = () => {
  calendarApi.prev()
  setTitle()
 }
 const todayHandle = () => {
  calendarApi.today()
  setTitle()
 }


 const handleDateSelect = async () => {
  const currentEpochDay = epochConvert(calendarApi?.currentDataManager.data.currentDate);
  d(setCreateMode(true, currentEpochDay))
 }

 return (
  <div className="calendar_header">
   <div className="calendar_block__ml">
    <button className="calendar_datepicker">
     <span className="calendar_date">{title}</span>
     <MdOutlineKeyboardArrowDown />
    </button>
   </div>

   <div className="calendar_block__nav">
    <button onClick={handleDateSelect} className="cl_btn cl_btn__addnew" title="Add Training">
     <AiOutlinePlus />
    </button>

    <button className="cl_btn cl_btn__stats" title="Current week statistics">
     <AiOutlineBarChart />
    </button>

    <button onClick={prevHandle} className="cl_btn cl_btn__prev" title="Previous week">
     <span className="fc-icon fc-icon-chevron-left" />
    </button>
    <button onClick={nextHandle} className="cl_btn cl_btn__next" title="Next week">
     <span className="fc-icon fc-icon-chevron-right" />
    </button>
    <button onClick={todayHandle} className="cl_btn cl_btn__today" title="This week">
     today
    </button>
   </div>
  </div>
 )
}

export default CalendarHeader
