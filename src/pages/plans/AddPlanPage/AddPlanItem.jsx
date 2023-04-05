import React from "react"

const AddPlanItem = ({ item, index }) => {
 if (item)
  return (
   <div className="addplanitem">
    <span className="addplanitem__index">#{index}</span>
    AddplanItem
   </div>
  )
 return (
  <div className="addplanitem addplanitem__freeday">
   <span className="addplanitem__index">#{index}</span>
   <span>Free day</span>
  </div>
 )
}

export default AddPlanItem
