import React, { useEffect, useState } from "react"
import { v4 as uniqueId } from "uuid"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate, useParams } from "react-router-dom"

import AddPlanItem from "./AddPlanItem"
import AddPlanForm from "./AddPlanForm"
import { MainLoader } from "components"
import { getDaysWithoutFreeDays } from "utils/getDaysWithFreeDays"
import { getPlan, updatePlan } from "redux/actions/plans"

const AddPlanPage = ({ isInit }) => {
 const d = useDispatch()
 const { PLAN_ID } = useParams()
 const nav = useNavigate();
 const [isAddDay, setAddDay] = useState(false)
 const { currentDays, currentObj, planName, planId } = useSelector(({ plans }) => ({
  planName: plans.currentPlanName,
  currentDays: plans.currentDays,
  currentObj: plans.currentObj,
  planId: plans.currentPlanId,
 }))


 const toggleAdd = () => {
  setAddDay(!isAddDay)
 }

 const onSavePlan = () => {
  let newDaysArr = getDaysWithoutFreeDays(currentDays)
  if (PLAN_ID) d(updatePlan(PLAN_ID, newDaysArr))
 }

 useEffect(() => {
  if (Number(PLAN_ID) || Number(PLAN_ID) === 0) {
    d(getPlan(PLAN_ID));
  }
  else nav('/plans');
 }, [])

 const showAddBtnOrForm = (isAddDay) => {
  if (isAddDay)
   return (
    <AddPlanForm
     {...{
      planDayNumber: currentDays?.length + 1 || 1,
      currentObj,
      toggleAdd,
      planId
     }}
    />
   )
  return (
   <div className="plan_choosenext">
    <button onClick={toggleAdd}>Add New</button>
   </div>
  )
 }

 return (
  <div className="addplanpage">
   <div className="addplanpage_title">
    <h2>{planName}</h2>
   </div>

   <div className="addplanpage_content">
    {currentDays?.length ? 
    currentDays.map((item, i) => <AddPlanItem key={uniqueId() + "_planitem"} index={i + 1} item={item} PLAN_ID={PLAN_ID} />) 
    : ""}

    {showAddBtnOrForm(isAddDay)}
   </div>

   <div className="addplan_group">
    <NavLink to="/plans" className="addplab_btn btn">
     Show my Plans
    </NavLink>
    <button onClick={onSavePlan} className="addplab_btn btn">Save Plan</button>
   </div>
   <MainLoader isVisible={!isInit} />
  </div>
 )
}

export default AddPlanPage
