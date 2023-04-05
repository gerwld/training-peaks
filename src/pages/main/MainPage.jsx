import React from "react"
import MainPageCalendar from "./calendar/Calendar"
import { useDispatch, useSelector } from "react-redux"
import { SecLoader100 } from "@/components"

const MainPage = () => {
 const d = useDispatch()
 const { events, feels, isTrainsInit, isFeelsInit, statistics } = useSelector(({ main, statistics }) => ({
  events: main.eventsById,
  feels: main.feelsById,
  statistic: statistics.fetchStatistics,
  isTrainsInit: main.isTrainsInit,
  isFeelsInit: main.isFeelsInit,
 }))

 return (
  <div className="page_content main_page">
   <MainPageCalendar {...{ events, feels, statistics }} />

   <SecLoader100 isVisible={!isTrainsInit || !isFeelsInit} />
  </div>
 )
}

export default MainPage
