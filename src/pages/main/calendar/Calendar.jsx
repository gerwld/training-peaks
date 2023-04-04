import React, { useEffect } from "react"
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
      const findFeel = feelsArray.find((e) => e.epochDay == date)

      if (findFeel)
       mountData.el.insertAdjacentHTML(
        "afterbegin",
        '<div class="cf_dayfeel"><div class="cf_dayfeel__header"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 456c-110.3 0-200-89.7-200-200 0-54.8 21.7-105.9 61.2-144 6.4-6.2 16.6-6 22.7.4 6.2 6.4 6 16.6-.4 22.7-33.1 32-51.3 74.9-51.3 120.9 0 92.5 75.3 167.8 167.8 167.8S423.8 348.5 423.8 256c0-87.1-66.7-159-151.8-167.1v62.6c0 8.9-7.2 16.1-16.1 16.1s-16.1-7.2-16.1-16.1V72.1c0-8.9 7.2-16.1 16.1-16.1 110.3 0 200 89.7 200 200S366.3 456 256 456z"></path><path d="M175.9 161.9l99.5 71.5c13.5 9.7 16.7 28.5 7 42s-28.5 16.7-42 7c-2.8-2-5.2-4.4-7-7l-71.5-99.5c-3.2-4.5-2.2-10.8 2.3-14 3.6-2.6 8.3-2.4 11.7 0z"></path></svg></div><div class="cf_dayfeel__content"><span class="cf_dayfeel__param">Sleep hours: <span class="metric">8.72h</span></span><span class="cf_dayfeel__param">Weight: <span class="metric">8.72h</span></span><span class="cf_dayfeel__param">Mood: <span class="metric">8</span></span><span class="cf_dayfeel__param">Productiveness: <span class="metric">7</span></span></div></div>'
       )
     }}
    />
   </div>
  </div>
 )
}

export default withCalendar(Calendar)
