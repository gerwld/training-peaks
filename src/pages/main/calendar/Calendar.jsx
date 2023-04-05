import React from "react"
import ReactDOM from "react-dom/client"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"

import withCalendar from "hocs/withCalendar"
import RenderEvent from "./RenderEvent"
import DayCell from "./DayCellAddTrain"
import DayHeader from "./DayHeader"
import { getHashValues } from "utils"
import DayFeel from "./DayFeel"
import findFeelByDate from "utils/findFeelByDate"
import CalendarHeader from "./CalendarHeader"
import useWindowDimensions from "hooks/useWindowDimensions"

const Calendar = ({ handleEventChange, handleDates, events, feels }) => {
 const fullCalendar = React.useRef()
 const feelRef = React.useRef()
 const feelsArray = getHashValues(feels)
 const {height} = useWindowDimensions();

 return (
  <div className="calendar">
   <div className="calendar-main">
    <CalendarHeader calendarRef={fullCalendar} />
    <FullCalendar
     ref={fullCalendar}
     plugins={[dayGridPlugin, interactionPlugin]}
     height={Math.max(height - 158, 700)}
     headerToolbar={null}
     initialView="dayGridWeek"
     editable={true}
     allDaySlot={false}
     slotEventOverlap={false}
     selectable={false}
     eventDurationEditable={false}
     selectMirror={true}
     displayEventTime={false}
     dayMaxEvents={true}
     firstDay={1}
     weekends={true}
     datesSet={handleDates}
     events={getHashValues(events)}
     eventContent={(e) => <RenderEvent {...e} />}
     dayCellContent={(e) => <DayCell {...e} />}
     dayHeaderContent={(e) => {
      const findFeel = findFeelByDate(e.date, feelsArray)
      return <DayHeader {...{ ...e, findFeel }} />
     }}
     eventChange={handleEventChange}
     
     //custom injection for DayFeel
     dayCellDidMount={(mountData) => {
      const findFeel = findFeelByDate(mountData.date, feelsArray)
      if (findFeel) {
       ReactDOM.createRoot(mountData.el).render(<DayFeel {...{ findFeel, date: mountData.date }} ref={feelRef} />)

       const cf_height = feelRef.current?.clientHeight
       mountData.el.querySelector(".fc-daygrid-day-frame").style.minHeight = `calc(100% - ${cf_height ? cf_height + 16 : "152"}px)`
      }
     }}
    />
   </div>
  </div>
 )
}

export default withCalendar(Calendar)
