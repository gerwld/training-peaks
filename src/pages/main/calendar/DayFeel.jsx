import React from "react"
import { IoIosTimer } from "react-icons/io"
import { FaRegEdit } from "react-icons/fa"
import withSetFeel from "hocs/withSetFeel"

const DayFeel = withSetFeel((props) => {
  const { onFeelSelect, dayFeel } = props;

 return (
  <div className="cf_dayfeel">
   <div className="cf_dayfeel__header">
    <IoIosTimer />
    <button onClick={onFeelSelect} className="tc_edit" title="Edit feel resource">
     <FaRegEdit />
    </button>
   </div>

   <div className="cf_dayfeel__content">
    <span className="cf_dayfeel__param">
     Sleep hours: <span className="metric">8.72h</span>
    </span>
    <span className="cf_dayfeel__param">
     Weight: <span className="metric">{dayFeel.weight}kg</span>
    </span>
    <span className="cf_dayfeel__param">
     Heart Rate: <span className="metric">{dayFeel.heartRate}bpm</span>
    </span>
    <span className="cf_dayfeel__param">
     Mood: <span className="metric">{8}/10</span>
    </span>
    <span className="cf_dayfeel__param">
     <span className="metric">{dayFeel.text}</span>
    </span>
   </div>
  </div>
 )
})

export default DayFeel;
