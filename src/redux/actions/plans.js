import PlanService from "../../api/PlanService"

export const createNewPlan = (data) => {
  return (dispatch) => {
    PlanService.createPlan(data)
    .then(({data}) => {
      dispatch({type: 'CREATE_PLAN', currentPlanId: data.id, isCreatePlanMode: false})
    })
  }
}