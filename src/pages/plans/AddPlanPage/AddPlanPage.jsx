import React, { useEffect, useState } from "react"
import AddPlanItem from "./AddPlanItem"
import AddPlanForm from "./AddPlanForm"
import { v4 as uniqueId } from "uuid"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { MainLoader } from "components"
import PlanService from "../../../api/PlanService"

const AddPlanPage = ({ isInit }) => {
 const d = useDispatch()
 const { plan_id } = useParams()
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

 useEffect(() => {
  if (Number(plan_id) || Number(plan_id) === 0) {
   d({ type: "INIT_PLANS", isInit: false })
   PlanService.getPlan(plan_id).then(({ data }) => {
    d({ type: "SET_EDIT_PLAN", payload: data })
    d({ type: "INIT_PLANS", isInit: true })
   })
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
    <button className="addplab_btn btn">Save Plan</button>
   </div>
   <MainLoader isVisible={!isInit} />
  </div>
 )
}

export default AddPlanPage
