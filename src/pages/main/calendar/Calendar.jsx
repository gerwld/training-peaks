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
import findFeelByDate from "utils/findFeelByDate"
import CalendarHeader from "./CalendarHeader"
import useWindowDimensions from "hooks/useWindowDimensions"
import DayCellMount from "./DayCellMount"

const Calendar = ({ handleEventChange, handleDates, events, feels }) => {
 const fullCalendar = React.useRef()
 const feelsArray = getHashValues(feels)
 const { height } = useWindowDimensions()

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
     eventChange={handleEventChange}
     eventContent={(e) => <RenderEvent {...e} />}
     dayCellContent={(e) => <DayCell {...e} />}
     dayHeaderContent={(e) => {
      const dayFeel = findFeelByDate(e.date, feelsArray)
      return <DayHeader {...{ ...e, dayFeel }} />
     }}

     //custom injection for DayFeel
     dayCellDidMount={(mountData) => {
      ReactDOM.createRoot(mountData.el).render(<DayCellMount {...{ mountData, feelsArray }} />)
     }}
    />
   </div>
  </div>
 )
}

export default withCalendar(Calendar)
