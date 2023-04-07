import React, { useLayoutEffect } from "react"
import findFeelByDate from "../../../utils/findFeelByDate"
import { Provider } from "react-redux"
import store from "../../../redux/store"
import DayFeel from "./DayFeel"

const DayCellMount = ({ mountData, feelsArray }) => {
 const dayCellRef = React.useRef()
 const dayFeel = findFeelByDate(mountData.date, feelsArray)
 const daygrid = mountData?.el?.querySelector(".fc-daygrid-day-frame");
 

 useLayoutEffect(() => {
  const cellHeight = dayCellRef?.current?.offsetHeight;
  if(daygrid) {
    daygrid.style.minHeight = cellHeight > 5 ? `calc(100% - ${cellHeight + 5}px)` : '100%';
  } 
 }, [daygrid])

 return (
  <div className="dayc_mount" ref={dayCellRef}>
   {dayFeel &&
     <DayFeel {...{ dayFeel, date: mountData.date }} />}
  </div>
 )
}

export default (props) => (
 <Provider store={store}>
  <DayCellMount {...props} />
 </Provider>
)
