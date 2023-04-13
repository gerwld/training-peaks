import React from "react"
import { IoIosTimer } from "react-icons/io"
import { withSetFeel } from "hocs"

const DayHeader = ({ text, onFeelSelect }) => {
 return (
  <div className="fc_dayheader">
   <div className="fc_dayheader__content">
    <span className="fc_daygeader__title">{text}</span>
    <button onClick={onFeelSelect} className="fc_daygeader__feelbtn" title={`Click for set feel, etc for ${text}`}>
     <IoIosTimer />
    </button>
   </div>
  </div>
 )
}

export default withSetFeel(DayHeader)
