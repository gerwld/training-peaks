import React from "react"
import { FaRegEdit } from "react-icons/fa"
import { MdOutlineCenterFocusStrong } from "react-icons/md"

const DayPlan = () => {
 return (
  <div className="cf_dayplan">
   <div className="cf_dayplan__header">
    <MdOutlineCenterFocusStrong /> 
    <span>Day #1</span>
    {/* <button className="tc_edit" title="Edit plan resource">
     <FaRegEdit />
    </button> */}
   </div>
   <div className="cf_dayplan__content">
    <span className="cf_dayplan__title">Title</span>
    <span className="cf_dayplan__distance">15km</span>
    <span className="cf_dayplan__desc">D: Description</span>
    <span className="cf_dayplan__param">
     Reminder: <span className="metric">Sleep more</span>
    </span>
   </div>
  </div>
  
 )
}

export default DayPlan
