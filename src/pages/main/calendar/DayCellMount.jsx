import React from "react"
import findFeelByDate from "../../../utils/findFeelByDate"
import { Provider } from "react-redux"
import store from "../../../redux/store"
import DayFeel from "./DayFeel"

const DayCellMount = ({ mountData, feelsArray }) => {
  const dayCellRef = React.useRef()
 const dayFeel = findFeelByDate(mountData.date, feelsArray)

 if (dayFeel) {
  mountData.el.querySelector(".fc-daygrid-day-frame").style.minHeight = `calc(100% - 152px)`
  return <DayFeel {...{ dayFeel, date: mountData.date }} />
 } 
 
}


export default (props) => (
   <Provider store={store}>
    <DayCellMount {...props} />
   </Provider>
 )
 