import React from "react"
import { MdOutlineCenterFocusStrong } from "react-icons/md"

const DayPlan = ({ description, distance, epochDay, id, planDayNumber, title }) => {
 return (
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
}

export default DayPlan
