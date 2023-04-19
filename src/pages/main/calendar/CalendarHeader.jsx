import React, { useEffect, useRef, useState } from "react"
import moment from "moment"

import { AiOutlineBarChart, AiOutlinePlus } from "react-icons/ai"
import { setCreateMode } from "redux/actions/app-actions"
import { useDispatch } from "react-redux"
import { epochDateConvert } from "@/utils"
import { StatisticsTooltip } from "components"
import DateRangePicker from "rsuite/esm/DateRangePicker"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const CalendarHeader = ({ calendarRef }) => {
 const d = useDispatch()
 const [title, settitle] = useState(new moment().format("MMMM DD, YYYY"))
 const [calendarApi, setApi] = useState();
 const [value, setValue] = React.useState();
 const [isPicker, setPicker] = useState(false);

 const setTitle = () => settitle(calendarApi.currentData.viewTitle)

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

 const setDateHandle = (dateRange) => {
  calendarApi.gotoDate(new Date(dateRange[0]).toISOString());
  settitle(calendarApi.currentData.viewTitle)
 }

 const handleAddTraining = async () => {
  const currentEpochDay = epochDateConvert(new moment().format("MM, DD, YYYY"))
  d(setCreateMode(true, currentEpochDay))
 }

 useEffect(() => {
  const api = calendarRef.current.getApi();
  if(api?.currentData) {
    settitle(api.currentData.viewTitle)
    setApi(api)
    setValue([
      new Date(api?.currentData.dateProfile.activeRange.start),
      new Date(new Date(api?.currentData.dateProfile.activeRange.end) - (1000 * 60 * 60 * 24))
    ])
  }
 }, [title, calendarRef?.current ])

 return (
  <div className="calendar_header">
   <div className={`calendar_block__ml ${isPicker ? 'opened' : ''}`}>
    <button className="calendar_datepicker">
     <span className="calendar_date">{title}</span>
     <MdOutlineKeyboardArrowDown />
    </button>
    
    <div className="week_picker">
      {value && 
      <DateRangePicker 
      onEnter={() => setPicker(true)} 
      onExit={() => setPicker(false)} 
      isoWeek 
      oneTap 
      showOneCalendar 
      value={value} 
      hoverRange="week" 
      ranges={[]} 
      onChange={setDateHandle}/>}
    </div>
   </div>

   <div className="calendar_block__nav">
    <button onClick={handleAddTraining} className="cl_btn cl_btn__addnew" title="Add Training">
     <AiOutlinePlus />
    </button>

    <div className="calendar_stats_tooltip">
      <button className="cl_btn cl_btn__stats" title="Current week statistics">
      <AiOutlineBarChart />
      </button>
      
      <StatisticsTooltip date={title} />
    </div>

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
