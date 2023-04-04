import React, { forwardRef } from "react"
import { IoIosTimer } from "react-icons/io"
import { Provider, useDispatch } from "react-redux"
import store from "redux/store"
import { setFeelsMode } from "redux/actions/app-actions"
import { FaRegEdit } from "react-icons/fa"

const DayFeel = ({ findFeel, date }) => {
 const d = useDispatch()

 const onEditFeels = () => {
  d(setFeelsMode(findFeel, true, date))
 }

 return (
  <div className="cf_dayfeel">
   <div className="cf_dayfeel__header">
    <IoIosTimer />

    <button onClick={onEditFeels} className="tc_edit" title="Edit training">
    <FaRegEdit />
    edit
   </button>
   </div>
   <div className="cf_dayfeel__content">
    <span className="cf_dayfeel__param">
     Sleep hours: <span className="metric">8.72h</span>
    </span>
    <span className="cf_dayfeel__param">
     Weight: <span className="metric">8.72h</span>
    </span>
    <span className="cf_dayfeel__param">
     Mood: <span className="metric">8</span>
    </span>
    <span className="cf_dayfeel__param">
     Productiveness: <span className="metric">7</span>
    </span>
   </div>
  </div>
 )
}

export default forwardRef(() => (
 <Provider store={store}>
  <DayFeel />
 </Provider>
))
