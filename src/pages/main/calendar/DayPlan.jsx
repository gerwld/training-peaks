import React from "react"
import { MdOutlineCenterFocusStrong } from "react-icons/md"
import {CgCalendarToday} from 'react-icons/cg';

const DayPlan = ({ description, distance, planDayNumber, title, isFreeDay }) => {
if(!isFreeDay) return (
  <div className="cf_dayplan">
   <div className="cf_dayplan__header">
    <MdOutlineCenterFocusStrong />
    <span>Day #{planDayNumber}</span>
   </div>
   <div className="cf_dayplan__content">
    <span className="cf_dayplan__title">{title}</span>
    {distance ? <span className="cf_dayplan__distance">{distance}km</span> : ""}
    <span className="cf_dayplan__desc">D: {description}</span>
    <span className="cf_dayplan__param">
     Reminder: <span className="metric">{"$reminder"}</span>
    </span>
   </div>
  </div>
 )
 else return (
  <div className="cf_dayplan">
  <div className="cf_dayplan__header">
   <MdOutlineCenterFocusStrong />
   <span>Day #{planDayNumber}</span>
  </div>
  <div className="cf_dayplan__content">
   <span className="cf_dayplan__title cf_dayplan__title__free"> <CgCalendarToday/> Free day</span>
  </div>
 </div>
 )
}

export default DayPlan
