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
   {dayFeel.sleepTime &&
    <span className="cf_dayfeel__param">
     Sleep hours: <span className="metric">{dayFeel.sleepTime}h</span>
    </span>}
    {dayFeel.weight &&
    <span className="cf_dayfeel__param">
     Weight: <span className="metric">{dayFeel.weight}kg</span>
    </span>}
    {dayFeel.heartRate &&
    <span className="cf_dayfeel__param">
     Heart Rate: <span className="metric">{dayFeel.heartRate}bpm</span>
    </span>}
    {(dayFeel.moodRate || dayFeel.moodRate == 0) &&
    <span className="cf_dayfeel__param">
     Mood: <span className="metric">{dayFeel.moodRate}/10</span>
    </span>}
    {dayFeel.text &&
    <span className="cf_dayfeel__param">
     <span className="metric">{dayFeel.text}</span>
    </span>}
   </div>
  </div>
 )
})

export default DayFeel;
