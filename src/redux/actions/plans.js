import PlanService from "api/PlanService"
import { toast as showMessage } from "react-hot-toast"
import { getDaysWithFreeDays } from "../../utils/getDaysWithFreeDays"

export const getAllPlans = () => {
 return (dispatch) => {
  dispatch({ type: "INIT_PLANS", isInit: false })

  PlanService.getAllPlans()
  .then(({ data }) => {
   dispatch({ type: "FETCH_PLANS", payload: data })
   dispatch({ type: "INIT_PLANS", isInit: true })
  })
  .catch((error) => {
    throw new Error(error)
  })
 }
}

export const getCurrentPlan = () => {
  return dispatch => {
    PlanService.getCurrentPlan()
    .then(({data}) => {
      dispatch({type: 'SET_CURRENT_PLAN', ...data})
    })
    .catch((error) => {
      throw new Error(error)
    })
  }
}

export const updatePlan = (planId, payload) => {
  return dispatch => {
    PlanService.addPlanItemsBatch(planId, payload)
    .then(({data}) => {
      dispatch({ type: "SET_CURRENT_DAYS", payload: getDaysWithFreeDays(data) })
      showMessage.success('Plan saved successfully.')
    })
    .catch(error => {
      showMessage.error('Plan not saved. Please try again later')
      throw new Error(error)
    })

  }
}

export const getPlan = (planId) => {
  return dispatch => {
    dispatch({ type: "INIT_PLANS", isInit: false })
    PlanService.getPlan(planId)
      .then(({ data }) => {
      dispatch({ type: "SET_EDIT_PLAN", payload: data, days: getDaysWithFreeDays(data.days) })
      dispatch({ type: "INIT_PLANS", isInit: true })
    })
  }
}

export const deletePlan = (planID, itemID) => {
  return dispatch => {
    dispatch({type: 'DELETE_PLANDAY', itemID})
    PlanService.deletePlanItem(planID, itemID)
    .then((_) => {
      showMessage.success('Day has been deleted from the plan.')
    })
    .catch((error) => {
      showMessage.error(error.message || 'Error occured. Please try again');
      throw new Error(error);
    })
  }
}