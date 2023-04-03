import React, { useEffect } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

import withCalendar from "hocs/withCalendar";
import RenderEvent from "./RenderEvent";
import DayCell from "./DayCell";
import DayHeader from "./DayHeader";
import { getHashValues } from "../../../utils"


const CalendarNew = ({handleEventChange, handleDates, events}) => {
 return (
  <div className="calendar">
   <div className="calendar-main">
    <FullCalendar
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
    />
   </div>
  </div>
 )
}

export default withCalendar(CalendarNew);
