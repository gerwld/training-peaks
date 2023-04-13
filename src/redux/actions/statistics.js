import StatisticService from "api/StatisticService"
import showMessage from "react-hot-toast"


export const fetchStatistics = (fromEpochDay, toEpochDay) => {
  return (dispatch) => {
    StatisticService.getRunDistance(fromEpochDay, toEpochDay)
    .then(({data}) => {
      dispatch({type: "SET_STATISTICS", payload: data})
    })
    .catch((error) => {
      showMessage.error(error?.response?.data?.message || error.message || 'Unknown error')
    })
  }
}