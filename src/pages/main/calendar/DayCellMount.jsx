import React, { useLayoutEffect } from "react"
import { Provider, useSelector } from "react-redux"
import store from "redux/store"
import DayFeel from "./DayFeel"
import DayPlan from "./DayPlan"
import { epochDayConvert } from "utils/epochConvert"

const DayCellMount = ({ mountData }) => {
 const dayCellRef = React.useRef()
 const daygrid = mountData?.el?.querySelector(".fc-daygrid-day-frame");
  const {feels} = useSelector(({main}) => ({
    feels: main.feelsById
  }))

 const epochDay = epochDayConvert(mountData.date);
 const dayFeel = feels[epochDay];
 
 

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

     <DayPlan/>
  </div>
 )
}

export default (props) => (
 <Provider store={store}>
  <DayCellMount {...props} />
 </Provider>
)
