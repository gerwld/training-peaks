import React from "react";
import { useDispatch } from "react-redux";
import { setCreateMode } from "../../../redux/reducers/app-reducer";
import { CiCirclePlus } from "react-icons/ci";
import createEvent from '@/api/'

const DayCell = (selectInfo) => {
  const d = useDispatch();
 const handleDateSelect = async () => {
  let calendarApi = selectInfo.view.calendar;

  d(setCreateMode(true));

  createEvent()

  d(createEvent)

  // calendarApi.addEvent(
  //  {
  //   title: "Morning Run",
  //   type: "Training Run",
  //   desc: "description for train",
  //   dist: "5.2",
  //   rtss: "60",
  //   start: selectInfo.date,
  //   allDay: false,
  //   editable: true,
  //  },
  //  true
  // );
 };

 return (
  <button onClick={handleDateSelect} className="fc_addbtn">
   <CiCirclePlus/>
  </button>
 );
};

export default DayCell;
