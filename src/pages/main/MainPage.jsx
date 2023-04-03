import React from "react"
import MainPageCalendar from "./calendar/Calendar"
import { useDispatch, useSelector } from "react-redux"
import { SecLoader100 } from "@/components"

const MainPage = () => {
  const d = useDispatch()
  const { events, isTrainInit } = useSelector(({ main }) => ({
    events: main.eventsById,
    isTrainInit: main.isTrainInit,
  }))

  return (
    <div className="page_content main_page">
      <MainPageCalendar {...{events}} />

      <SecLoader100 isVisible={!isTrainInit} />
    </div>
  )
}

export default MainPage
