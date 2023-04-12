import React, { useState } from "react"

import { FaRegEdit } from "react-icons/fa"
import { GiRunningShoe } from "react-icons/gi"
import { MdClose } from "react-icons/md"
import AddPlanForm from "./AddPlanForm"
import { useDispatch } from "react-redux"

const AddPlanItem = ({ item, index }) => {
  const d = useDispatch();
 const [isEditMode, setEditMode] = useState(false)

 const toggleEdit = () => {
  setEditMode(!isEditMode)
 }

 const deleteCurrent = () => {
  d({type: 'DELETE_PLANDAY', payload: item.planDayNumber})
 }

 if (isEditMode) return (
   <AddPlanForm
    {...{
     currentObj: item,
     isEditMode: true,
     toggleEdit,
    }}
   />
  )
 else if (item && !item?.isFreeDay)
  return (
   <div className="addplanitem">
    <div className="addplanitem__nav">
     <span className="addplanitem__index">Day #{index} (planday: {item.planDayNumber})</span>
     <div className="addplain__btns">
      <button onClick={toggleEdit} title="Edit Plan Day">
       <FaRegEdit />
      </button>
      <button onClick={deleteCurrent} title="Delete Plan Day">
       <MdClose />
      </button>
     </div>
    </div>
    <span className="content">
     <div className="tc_title tc_title__addplan">
      <span className="tc_icon">
       <GiRunningShoe />
      </span>
      {item.title}
     </div>
     <span className="ap_desc adp_wrapper">
      {item.distance}
      <span className="bl_dark"> km</span>
     </span>
     <span className="ap_desc adp_wrapper">{item.description}</span>
     <span className="ap_desc adp_wrapper">
      <span className="bl_dark">R: </span>
      {item.reminder}
     </span>
    </span>
   </div>
  )
 return (
  <div className="addplanitem addplanitem__freeday">
   <div className="addplanitem__nav">
    <span className="addplanitem__index">Day #{index}</span>
    <div className="addplain__btns">
     <button onClick={toggleEdit} title="Edit Plan Day">
      <FaRegEdit />
     </button>
     <button onClick={deleteCurrent} title="Delete Plan Day">
      <MdClose />
     </button>
    </div>
   </div>
   <span className="content">Free day</span>
  </div>
 )
}

export default AddPlanItem
