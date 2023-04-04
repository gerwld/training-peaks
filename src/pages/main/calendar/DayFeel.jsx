import React, { forwardRef } from "react"
import { IoIosTimer } from "react-icons/io"

const DayFeel = () => {
 return (
  <div className="cf_dayfeel">
   <div className="cf_dayfeel__header">
    <IoIosTimer />
   </div>
   <div className="cf_dayfeel__content">
    <span className="cf_dayfeel__param">Sleep hours: <span className="metric">8.72h</span></span>
    <span className="cf_dayfeel__param">Weight: <span className="metric">8.72h</span></span>
    <span className="cf_dayfeel__param">Mood: <span className="metric">8</span></span>
    <span className="cf_dayfeel__param">Productiveness: <span className="metric">7</span></span>
   </div>
  </div>
 )
}

export default forwardRef(DayFeel);
