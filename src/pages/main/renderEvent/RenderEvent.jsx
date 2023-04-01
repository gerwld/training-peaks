import React from "react";
import { GiRunningShoe } from "react-icons/gi";

const RenderEvent = ({ eventInfo }) => {
 console.log(eventInfo);
 return (
  <div className="tc_event">
   <span className="tc_title">
    <span className="tc_icon">
     <GiRunningShoe />
    </span>
    {eventInfo.event.title}
   </span>

   <div className="tc_content">
    <span className="tc_desc">{eventInfo.event.extendedProps.desc}</span>
    <span className="tc_dist">{eventInfo.event.extendedProps.dist}</span>
    <span className="tc_rtss">{eventInfo.event.extendedProps.rtss}</span>
   </div>

   <button className="tc_edit">edit</button>
  </div>
 );
};

export default RenderEvent;
