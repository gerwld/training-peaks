import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Field, Form } from "react-final-form"

import { PremiumLeft, UserInfo } from "@/components"
import { getAllPlans, getCurrentPlan, setCurrentPlan } from "redux"
import { epochDayConvert } from "@/utils"


const SettingsPage = () => {
  const d = useDispatch();
 const { authObj, allPlans, globalPlanId, planStartEpoch} = useSelector(({ auth, plans }) => ({
  authObj: auth.authObj,
  allPlans: plans.allPlans,
  globalPlanId: plans.globalPlanId,
  planStartEpoch: plans.startAtEpochDate
 }))

 let date = planStartEpoch ? epochDayConvert(planStartEpoch, true).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

 const onSettingsSave = ({plan_id, plan_date}) => {
  d(setCurrentPlan(plan_id, epochDayConvert(plan_date)));
 }

 const onCreateNewPlan = () => {
  d({ type: "SET_CREATEMODE_PLAN", isCreatePlanMode: true })
 }

 useEffect(() => {
  d(getCurrentPlan());
  d(getAllPlans());
 }, [])

 return (
  <div className="page_content page_content__100 settings_page">
   <div className="page-content dashboard_wrapper">
    <UserInfo username={authObj.email} />
    <PremiumLeft username={authObj.email} />

    <Form
    initialValues={{
      plan_date: date,
      plan_id: globalPlanId ? globalPlanId : allPlans && allPlans[0]?.id
    }}
     onSubmit={onSettingsSave}
     render={({ handleSubmit }) => {
      return (
       <form onSubmit={handleSubmit}>
        <section className="set_plan">
         <h3>Set active plan:</h3>

         {allPlans?.length ?
         <>
          <label>
            <span className="l_title">Choose a plan:</span>
            <Field name="plan_id" component="select">
              {allPlans.map(({id, name}, i) => 
                <option value={id} key={id + "_opt"}>{name}</option>)}
              
            </Field>
          </label>

          <label>
            <span className="l_title">Start date:</span>
            <span className="l_desc">When 1st day of the plan should start. You can change it in settings any time.</span>
            <Field component="input" type="date" name="plan_date" placeholder="Title..." required={true} />
          </label>
         </>
         : 
         <>
          <span className="l_title">Choose a plan:</span>
          <button onClick={onCreateNewPlan} type="button" className="btn btn__line margin-10px-tb db-block">Create New Plan</button>
         </>}

         <button className="btn settings_btn" type="submit">Save</button>
        </section>
       </form>
      )
     }}
    />
   </div>
  </div>
 )
}

export default SettingsPage
