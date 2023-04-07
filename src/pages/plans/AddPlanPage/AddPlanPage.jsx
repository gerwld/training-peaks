import React, { useEffect, useState } from "react"
import AddPlanItem from "./AddPlanItem"
import AddPlanForm from "./AddPlanForm"
import { v4 as uniqueId } from "uuid"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const AddPlanPage = () => {
 const [isAddDay, setAddDay] = useState(false)
 const { currentDays, currentObj, planName } = useSelector(({ plans }) => ({
  planName: plans.currentPlanName,
  currentDays: plans.currentDays,
  currentObj: plans.currentObj,
 }))

 const toggleAdd = () => {
  setAddDay(!isAddDay)
 }

 const showAddBtnOrForm = (isAddDay) => {
  if (isAddDay)
   return (
    <AddPlanForm
     {...{
      planDayNumber: currentDays?.length + 1 || 1,
      currentObj,
      toggleAdd
     }}
    />
   );
  return (
   <div className="plan_choosenext">
    <button onClick={toggleAdd}>Add New</button>
   </div>
  )
 }

 return (
  <div className="addplanpage">
   <div className="addplanpage_title">
    <input type="text" placeholder="Click here to set plan name..." value={planName} onChange={() => {}} />
   </div>

   <div className="addplanpage_content">
    {currentDays?.length ? [...Array(currentDays?.length)].map((_, i) => <AddPlanItem key={uniqueId() + "_planitem"} index={i + 1} item={currentDays.find(({ planDayNumber }) => planDayNumber === i + 1)} />) : ""}
    
    {showAddBtnOrForm(isAddDay)}
   </div>

   <div className="addplan_group">
    <NavLink to="/plans" className="addplab_btn btn">Show my Plans</NavLink>
    <button className="addplab_btn btn">Save Plan</button>
   </div>
  </div>
 )
}

export default AddPlanPage
