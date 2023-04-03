import React from "react"
import epochConvert from "utils/epochConvert"
import { useDispatch, useSelector } from "react-redux"
import { setFeelsMode } from "redux/actions/app-actions"
import { IoIosTimer } from "react-icons/io"

const DayHeader = (props) => {
 const d = useDispatch();
 const { feelsById } = useSelector(({ app }) => ({
  feelsById: app.feelsById,
 }))

 const handleFeelSelect = async () => {
  const dateSelected = epochConvert(props.date, false);
  const currentFeelObj = feelsById ? [...feelsById].filter(({epochDate}) => epochDate === dateSelected) : null;
  d(setFeelsMode(currentFeelObj, true, dateSelected))
 }

 return (
  <div className="fc_dayheader">
   <div className="fc_dayheader__content">
    <span className="fc_daygeader__title">{props.text}</span>
    <button onClick={handleFeelSelect} className="fc_daygeader__feelbtn" title={`Click for set feel, etc for ${props.text}`}>
     <IoIosTimer />
    </button>
   </div>
  </div>
 )
}

export default DayHeader
