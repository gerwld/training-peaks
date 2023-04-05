import React from "react"

import { FaRegEdit } from "react-icons/fa"
import { MdClose } from "react-icons/md"

const AddPlanItem = ({ item, index }) => {
 if (item)
  return (
   <div className="addplanitem">
      <div className="addplanitem__nav">
    <span className="addplanitem__index">Day #{index}</span>
    <div className="addplain__btns">
     <button title="Edit Plan Day"><FaRegEdit /></button>
     <button title="Delete Plan Day"><MdClose/></button>
    </div>
   </div>
   <span className="content">AddplanItem</span>    
   </div>
  )
 return (
  <div className="addplanitem addplanitem__freeday">
   <div className="addplanitem__nav">
    <span className="addplanitem__index">Day #{index}</span>
    <div className="addplain__btns">
     <button title="Edit Plan Day"><FaRegEdit /></button>
     <button title="Delete Plan Day"><MdClose/></button>
    </div>
   </div>
   <span className="content">Free day</span>
  </div>
 )
}

export default AddPlanItem
