import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { NavLink } from "react-router-dom"

import { MainLoader } from "components"
import { getAllPlans } from "redux/actions/plans"

const PlanPageAll = () => {
 const d = useDispatch()
 const { allPlans, isInit } = useSelector(({ plans }) => ({
  isInit: plans.isInit,
  allPlans: plans.allPlans,
 }))
 const noItems = allPlans?.length === 0

 const onCreateNewPlan = () => {
  d({ type: "SET_CREATEMODE_PLAN", isCreatePlanMode: true })
 }

 useEffect(() => {
  d(getAllPlans())
 }, [])

 return (
  <div className="planpg_all">
   <div className="planpg_all__content">
    <h2 className="plan_title">{noItems ? "No plans here yet. Create new?" : "Your Plans"}</h2>

    {noItems ?
     <div className="no_plans">
      <button>Lets get started</button>
     </div>
    : allPlans?.map((item) => <PlanPageSelItem key={uuidv4()} {...{ ...item }} />)}

    <div className="add_new">
     <button onClick={onCreateNewPlan}>Add new plan</button>
    </div>
   </div>
   <MainLoader isVisible={!isInit} />
  </div>
 )
}

const PlanPageSelItem = ({ name, id }) => {
 return (
  <div className="planpg_all__item">
   <span className="planpg_all__title">{name ? name : "My Plan #1"}</span>
   <div className="group">
    <NavLink to={`/plans/${id}`}>Show</NavLink>
    <NavLink to={`/plans/${id}`}>Edit</NavLink>
   </div>
  </div>
 )
}

export default PlanPageAll
