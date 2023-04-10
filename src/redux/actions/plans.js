import PlanService from "../../api/PlanService"

export const getAllPlans = () => {
 return (dispatch) => {
  dispatch({ type: "INIT_PLANS", isInit: false })

  PlanService.getAllPlans().then(({ data }) => {
   dispatch({ type: "FETCH_PLANS", payload: data })
   dispatch({ type: "INIT_PLANS", isInit: true })
  })
 }
}
