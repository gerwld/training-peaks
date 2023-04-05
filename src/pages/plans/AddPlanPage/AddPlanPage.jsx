import React from "react"
import AddPlanItem from "./AddPlanItem"
import AddPlanForm from "./AddPlanForm"
import { v4 as uniqueId } from "uuid"

const AddPlanPage = () => {
 const days = [
  {
   id: 0,
   title: "string",
   description: "string",
   expectedRedult: "string",
   time: "1:09",
   distance: 0,
   planDayNumber: 0,
  },
  {
   id: 1,
   title: "string",
   description: "string",
   expectedRedult: "string",
   time: "1:09",
   distance: 0,
   planDayNumber: 3,
  },
  {
   id: 2,
   title: "string",
   description: "string",
   expectedRedult: "string",
   time: "1:09",
   distance: 0,
   planDayNumber: 5,
  },
  {
   id: 3,
   title: "string",
   description: "string",
   expectedRedult: "string",
   time: "1:09",
   distance: 0,
   planDayNumber: 6,
  },
  {
   id: 4,
   title: "string",
   description: "string",
   expectedRedult: "string",
   time: "1:09",
   distance: 0,
   planDayNumber: 9,
  },
  {
   id: 5,
   title: "string",
   description: "string",
   expectedRedult: "string",
   time: "1:09",
   distance: 0,
   planDayNumber: 10,
  },
 ]

 const getMaxPlanDayNumber = (daysArray) => {
  return [...daysArray].map(({ planDayNumber }) => planDayNumber).sort((a, b) => b - a)[0]
 }

 return (
  <div className="addplanpage">
   <div className="addplanpage_title">
    <input type="text" placeholder="Click here to set plan name..." />
   </div>

   <div className="addplanpage_content">
    {[...Array(getMaxPlanDayNumber(days))].map((_, i) => (
     <AddPlanItem key={uniqueId() + "_planitem"} index={i + 1} item={days.find(({ planDayNumber }) => planDayNumber === (i + 1))} />
    ))}
    <AddPlanForm />
    <div className="plan_choosenext">
     <button>Free day</button>
     <button>Add next day</button>
    </div>
   </div>
  </div>
 )
}

export default AddPlanPage
