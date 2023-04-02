import React, { useEffect } from "react"
import MainPageCalendar from "./Calendar"
import { useDispatch, useSelector } from "react-redux"
import { SecLoader100 } from "@/components"
import { fetchEvents } from "../../redux/actions/event-actions"

const MainPage = () => {
  const d = useDispatch();
  const { events, isTrainInit } = useSelector(({ main }) => ({
    events: main.eventsById,
    isTrainInit: main.isTrainInit,
  }))

  const fetchEventsCallback = (fromDate, toDate) => {
    d(fetchEvents(fromDate, toDate));
  }

  useEffect(() => {
    console.log(events);
  }, [events])

    return (
      <div className="page_content main_page">
        <MainPageCalendar {...{events, fetchEventsCallback}} />

        {!isTrainInit && <SecLoader100 />}
      </div>
    )
}

export default MainPage
