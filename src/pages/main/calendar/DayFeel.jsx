import React, { forwardRef } from "react"
import { IoIosTimer } from "react-icons/io"
import { Provider } from "react-redux"
import store from "redux/store"
import { FaRegEdit } from "react-icons/fa"
import withSetFeel from "hocs/withSetFeel"

const DayFeel = withSetFeel(({ onFeelSelect }) => {
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
})

export default forwardRef((props, ref) => (
 <div ref={ref}>
  <Provider store={store}>
   <DayFeel {...props} />
  </Provider>
 </div>
))
