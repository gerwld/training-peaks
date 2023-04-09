import React from "react";
import { BsCalendar3, BsAward, BsChatRightText } from 'react-icons/bs';
import { useDispatch } from "react-redux";

const PlanPageStart = () => {
  const d = useDispatch();
  const onCreateNewPlan = () => {
    d({type: 'SET_CREATEMODE_PLAN', isCreatePlanMode: true})
  }
 return (
  <div className="plan_page">
   <div className="plan_content">
    <h1 className="plan_title">Getting Started</h1>
    <div className="plan_blocks">
     <div className="plan_block">
      <h2 className="plan_block__title">Do It Yourself</h2>
      <p className="plan_block__desc">Track, analyze and plan on the web.</p>
      <div className="plan_block__icon">
        <BsAward/>
      </div>
      <button onClick={onCreateNewPlan} className="plan_btn btn">Start Now</button>
     </div>
     <div className="plan_block">
      <h2 className="plan_block__title">Get On A Plan</h2>
      <p className="plan_block__desc">Select an expertly designed training plan.</p>
      <div className="plan_block__icon">
        <BsCalendar3/>
      </div>
      <button className="plan_btn btn" disabled>Start Now</button>
     </div>
     <div className="plan_block">
      <h2 className="plan_block__title">Work With A Coach</h2>
      <p className="plan_block__desc">Get matched with a certified coach.</p>
      <div className="plan_block__icon">
        <BsChatRightText/>
      </div>
      <button className="plan_btn btn" disabled>Start Now</button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default PlanPageStart;
