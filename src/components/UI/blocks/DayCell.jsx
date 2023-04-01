import React from "react";
import { useDispatch } from "react-redux";
import { setCreateMode } from "../../../redux/reducers/app-reducer";
import { CiCirclePlus } from "react-icons/ci";
import epochConvert from "@/utils/epochConvert";

const DayCell = (selectInfo) => {
  const d = useDispatch();
 const handleDateSelect = async () => {
  const dateSelected = epochConvert(selectInfo.date, false);
  d(setCreateMode(true, dateSelected));
  // let calendarApi = selectInfo.view.calendar;
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
