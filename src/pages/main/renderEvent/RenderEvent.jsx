import React from "react";
import { GiRunningShoe } from "react-icons/gi";
import {FaRegEdit} from 'react-icons/fa';
import { useDispatch } from "react-redux";

const RenderEvent = ({ eventInfo }) => {
  const d = useDispatch();
  const toggleEdit =() => {
    d(({type: 'TOGGLE_EDIT', payload: null}));
  }

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
    <span className="tc_dist">{eventInfo.event.extendedProps.dist} <span className="metric">km</span></span>
    <span className="tc_rtss">{eventInfo.event.extendedProps.rtss} <span className="metric">rTSS</span></span>
   </div>

   <button onClick={toggleEdit} className="tc_edit" title="Edit training"><FaRegEdit/>edit</button>
  </div>
 );
};

export default RenderEvent;
