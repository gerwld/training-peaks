import React from "react"
import { FaRegEdit } from "react-icons/fa"
import { GiRunningShoe } from "react-icons/gi"

const DayTrain = ({ toggleEdit, evObj }) => {
 return (
  <div className="tc_train">
   <span className="tc_title">
    <span className="tc_icon">
     <GiRunningShoe />
    </span>
    {evObj.name}
   </span>

   <div className="tc_content">
    <span className="tc_desc">{evObj.description}</span>
    <span className="tc_dist">
     {evObj.distance} <span className="metric">km</span>
    </span>
    <span className="tc_rtss">
     {evObj?.rtss ? evObj?.rtss : "0"} <span className="metric">rTSS</span>
    </span>
   </div>

   <button onClick={toggleEdit} className="tc_edit" title="Edit training">
    <FaRegEdit />
    edit
   </button>
  </div>
 )
}

export default DayTrain
