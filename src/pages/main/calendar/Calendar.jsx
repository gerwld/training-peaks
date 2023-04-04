import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

import withCalendar from "hocs/withCalendar"
import RenderEvent from "./RenderEvent"
import DayCell from "./DayCell"
import DayHeader from "./DayHeader"
import { getHashValues } from "../../../utils"
import DayFeel from "./DayFeel"
import epochConvert from "../../../utils/epochConvert"

const Calendar = ({ handleEventChange, handleDates, events, feels }) => {
 const fullCalendar = React.useRef()
 const feelRef = React.useRef()
 const feelsArray = getHashValues(feels)

 return (
  <div className="calendar">
   <div className="calendar-main">
    <FullCalendar
     ref={fullCalendar}
     plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
     headerToolbar={{
      left: "title",
      center: "",
      right: "prev,next today",
     }}
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
     dayHeaderContent={(e) => <DayHeader {...e} />}
     eventChange={handleEventChange}
     
     //custom injection for DayFeel
     dayCellDidMount={(mountData) => {
      const date = epochConvert(mountData.date)
      const findFeel = feelsArray.find((e) => Number(e.epochDay) === Number(date))

      if (findFeel) {
       ReactDOM.createRoot(mountData.el).render(<DayFeel {...{ findFeel, date }} ref={feelRef} />)

       const cf_height = feelRef?.current;
       mountData.el.querySelector(".fc-daygrid-day-frame").style.minHeight =  `calc(100% - ${cf_height ? cf_height + 16 : '132'}px)`
      }
     }}
    />
   </div>
  </div>
 )
}

export default withCalendar(Calendar)
