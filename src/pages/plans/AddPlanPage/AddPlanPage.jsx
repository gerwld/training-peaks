import React from "react"
import AddPlanItem from "./AddPlanItem"
import AddPlanForm from "./AddPlanForm"
import { v4 as uniqueId } from "uuid"
import { useDispatch, useSelector } from "react-redux"

const AddPlanPage = () => {
 const d = useDispatch()
 const { currentDays, currentObj, planName } = useSelector(({ plans }) => ({
  planName: plans.currentPlanName,
  currentDays: plans.currentPlanByDays,
  currentObj: plans.currentObj,
 }))

 const getMaxPlanDayNumber = (daysArray) => {
  return [...daysArray].map(({ planDayNumber }) => planDayNumber).sort((a, b) => b - a)[0]
 }

 const onItemSubmit = (data) => {
  d({type: 'ADD_PLANDAY', payload: data})
 }

 return (
  <div className="addplanpage">
   <div className="addplanpage_title">
    <input type="text" placeholder="Click here to set plan name..." value={planName} onChange={() => {}} />
   </div>

   <div className="addplanpage_content">
    {currentDays.length ? [...Array(currentDays.length)].map((_, i) => <AddPlanItem key={uniqueId() + "_planitem"} index={i + 1} item={currentDays.find(({ planDayNumber }) => planDayNumber === i + 1)} />) : ''}

    <AddPlanForm planDayNumber={currentDays.length || 0} currentObj={currentObj} onItemSubmit={onItemSubmit} />
    <div className="plan_choosenext">
     <button>Add New</button>
     <button>Add Free day</button>
    </div>
   </div>

   <div className="addplan_group">
    <button className="addplab_btn btn">Show my Plans</button>
    <button className="addplab_btn btn">Save Plan</button>
   </div>
  </div>
 )
}

export default AddPlanPage
