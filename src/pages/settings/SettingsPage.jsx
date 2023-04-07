import React from "react"
import { useSelector } from "react-redux"
import { Field, Form } from "react-final-form"

import PremiumLeft from "components/UI/blocks/PremiumLeft"
import UserInfo from "../../components/UI/blocks/UserInfo"


const SettingsPage = () => {
 const { authObj } = useSelector(({ auth }) => ({
  authObj: auth.authObj,
 }))

 const onSettingsSave = () => {}

 return (
  <div className="page_content page_content__100 settings_page">
   <div className="page-content dashboard_wrapper">
    <UserInfo username={authObj.email} />
    <PremiumLeft username={authObj.email} />

    <Form
     onSubmit={onSettingsSave}
     render={({ handleSumbit }) => {
      return (
       <form onSubmit={handleSumbit}>
        <section className="set_plan">
         <h3>Set active plan:</h3>

         <label>
          <span className="l_title">Choose a plan:</span>
          <Field name="plans" component="select" >
            <option value="plan1">New Plan #1</option>
            <option value="plan2">New Plan #2</option>
          </Field>
         </label>

         <label>
          <span className="l_title">Start date:</span>
          <span className="l_desc">When 1st day of the plan should start. You can change it in settings any time.</span>
          <Field component="input" type="date" name="title" placeholder="Title..." required={true} />
         </label>

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
