import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Field, Form } from "react-final-form"
import { useNavigate } from "react-router-dom"
import PlanService from "../../../api/PlanService"
import showMessage from "react-hot-toast";

const CreatePlanPopup = ({ isCreatePlanMode }) => {
 const [isOpened, setIsOpened] = useState(isCreatePlanMode)
 const navigate = useNavigate()
 const d = useDispatch()

 const onSubmit = (data) => {
  d({ type: "INIT_PLANS", isInit: false })

  let fetch = PlanService.createPlan(data).then(({ data }) => {
   d({ type: "CREATE_PLAN", currentPlanId: data.id, isCreatePlanMode: false })
   navigate(`/plans/${data.id}`)
   setTimeout(() => {
    d({ type: "INIT_PLANS", isInit: true })
   }, 400)
  })

  showMessage.promise(fetch, {
    loading: "Loading",
    success: `Plan "${data.name}" created successfully.`,
    error: (err) =>  err?.response.data.message || 'Unknown error'
   });
 }

 const onCloseFeels = () => {
  setIsOpened(false)
  setTimeout(() => {
   d({ type: "CLOSE_CREATEMODE_PLAN" })
  }, 300)
 }

 useEffect(() => {
  if (isCreatePlanMode !== isOpened) setIsOpened(isCreatePlanMode)
 }, [isCreatePlanMode])

 return (
  <div className={`modal modal_createnew ${isOpened ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">Create new plan</h1>
    <Form
     initialValues={{ name: "New Plan #1" }}
     onSubmit={onSubmit}
     render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit} className="SetFeelsForm">
       <label>
        <span className="l_title">Title:</span>
        <Field component="input" type="text" name="name" placeholder="New Plan #1" autoComplete="false" />
       </label>
       <label>
        <span className="l_title">Description (not required):</span>
        <Field component="textarea" type="text" name="description" placeholder="Today my mood is decent..." autoComplete="off" />
       </label>

       <button type="submit" className="btn_submit">
        Add New Plan
       </button>
      </form>
     )}
    />
    <button onClick={onCloseFeels} type="button" className="btn_submit btn_submit__delete">
     Cancel
    </button>
    <button onClick={onCloseFeels} className="btn_close">
     close
    </button>
   </div>
  </div>
 )
}

export default CreatePlanPopup
