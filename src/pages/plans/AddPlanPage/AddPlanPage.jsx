import React, { useEffect, useState } from "react"
import { v4 as uniqueId } from "uuid"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate, useParams } from "react-router-dom"

import AddPlanItem from "./AddPlanItem"
import AddPlanForm from "./AddPlanForm"
import { MainLoader } from "components"
import PlanService from "api/PlanService"

const AddPlanPage = ({ isInit }) => {
 const d = useDispatch()
 const { PLAN_ID } = useParams()
 const nav = useNavigate();
 const [isAddDay, setAddDay] = useState(false)
 const { currentDays, currentObj, planName } = useSelector(({ plans }) => ({
  planName: plans.currentPlanName,
  currentDays: plans.currentDays,
  currentObj: plans.currentObj,
  planId: plans.currentPlanId,
 }))

 const toggleAdd = () => {
  setAddDay(!isAddDay)
 }

 const onSavePlan = () => {
  let newDaysArr = [...currentDays].filter(e => e.isFreeDay !== true).map((e) => {
    delete e.isFreeDay
    return e;
  })
  if(newDaysArr && PLAN_ID)
  PlanService.addPlanItemsBatch(PLAN_ID, newDaysArr)
  .then(({data}) => {
    d({ type: "SET_EDIT_PLAN", payload: data })
  })
 }

 useEffect(() => {
  if (Number(PLAN_ID) || Number(PLAN_ID) === 0) {

   d({ type: "INIT_PLANS", isInit: false })
   PlanService.getPlan(PLAN_ID).then(({ data }) => {
    d({ type: "SET_EDIT_PLAN", payload: data, days: getDaysWithFreeDays(data.days) })
    d({ type: "INIT_PLANS", isInit: true })
   })
  }
  else nav('/plans');
 }, [])

 const getDaysWithFreeDays = (days) => {
  let allTrainDays = [...days].map(e => e.planDayNumber);
  let maxDay = allTrainDays.filter((a, b) => b - a)[0];
  let allFreeDays = [...Array(maxDay)].map((_, i) => i + 1).filter(e => allTrainDays.indexOf(e) === -1);
  let allFreeDaysArr = allFreeDays.map(e => ({isFreeDay: true, planDayNumber: e}))
  return [...days.map(e => ({...e, isFreeDay: false})), ...allFreeDaysArr];
 }

 const showAddBtnOrForm = (isAddDay) => {
  if (isAddDay)
   return (
    <AddPlanForm
     {...{
      planDayNumber: currentDays?.length + 1 || 1,
      currentObj,
      toggleAdd,
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
    {currentDays?.length ? [...Array(currentDays?.length)].map((_, i) => <AddPlanItem key={uniqueId() + "_planitem"} index={i + 1} item={currentDays.find(({ planDayNumber }) => planDayNumber === i + 1)} />) : ""}

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
