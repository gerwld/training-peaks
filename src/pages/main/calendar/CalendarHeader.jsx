import React, { useEffect, useState } from "react"
import moment from "moment"

const CalendarHeader = ({ calendarRef }) => {
 const [title, settitle] = useState(new moment().format("MMMM DD, YYYY"))
 const [calendarApi, setApi] = useState()
 const setTitle = () => settitle(calendarApi.currentDataManager.data.viewTitle);
 
 useEffect(() => {
  settitle(calendarRef.current.getApi().currentDataManager.data.viewTitle)
  setApi(calendarRef.current.getApi())
 }, [calendarRef])

 const nextHandle = () => {
  calendarApi.next()
  setTitle();
 }
 const prevHandle = () => {
  calendarApi.prev()
  setTitle();
 }
 const todayHandle = () => {
  calendarApi.today()
  setTitle();
 }

 return (
  <div className="calendar_header">
    
   <div className="calendar_block__ml">
    <h2 className="calendar_date">{title}</h2>
   </div>

   <div className="calendar_block__nav">
    <button onClick={prevHandle} className="cl_btn cl_btn__prev" title="Previous week">
     <span class="fc-icon fc-icon-chevron-left" />
    </button>
    <button onClick={nextHandle} className="cl_btn cl_btn__next" title="Next week">
     <span class="fc-icon fc-icon-chevron-right" />
    </button>
    <button onClick={todayHandle} className={`cl_btn cl_btn__today ${true ? 'cl_btn__inactive' : ''}`} title="This week">
     today
    </button>
   </div>

  </div>
 )
}

export default CalendarHeader
