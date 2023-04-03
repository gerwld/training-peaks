import React from "react";
import { GiRunningShoe } from "react-icons/gi";
import {FaRegEdit} from 'react-icons/fa';
import { useDispatch } from "react-redux";
import eventToPlainObj from "../../../utils/eventToPlainObj";

const RenderEvent = (eventInfo) => {
  const evObj = eventToPlainObj(eventInfo.event);
  const d = useDispatch();

  const toggleEdit =() => {
    d(({type: 'TOGGLE_EDIT', payload: evObj}));
  }

 return (
  <div className="tc_event">

  <span className="tc_title">
    <span className="tc_icon">
      <GiRunningShoe />
    </span>
    {evObj.name}
  </span>

   <div className="tc_content">
    <span className="tc_desc">{evObj.description}</span>
    <span className="tc_dist">{evObj.distance} <span className="metric">km</span></span>
    <span className="tc_rtss">{evObj?.rtss ? evObj?.rtss : '0'} <span className="metric">rTSS</span></span>
   </div>

   <button onClick={toggleEdit} className="tc_edit" title="Edit training"><FaRegEdit/>edit</button>
  </div>
 );
};

export default RenderEvent;
