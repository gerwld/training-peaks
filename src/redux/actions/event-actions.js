import TrainService from "@/api/TrainService"
import epochConvert from "@/utils/epochConvert";
import showMessage from "react-hot-toast";

import { setCreateMode } from "../reducers/app-reducer";
import { setTrainsInit } from "../reducers/main-reducer";

export function createEvent(plainEventObject) {
  return async (dispatch) => {
    let eventObjectWithEpoch = {
     ...plainEventObject,
     epochDate: epochConvert(plainEventObject.date),
     date: null
    }
    return TrainService.createTrain(eventObjectWithEpoch)
      .then(({data}) => {
        const timeAdded = data.createdAt.split('T')[1];
        const date = `${epochConvert(data.epochDate, true)}T${timeAdded}`;

        dispatch({
          type: "CREATE_EVENT",
          plainEventObject: {...data, start:date},
        })

        dispatch(setCreateMode(false));
      })
      .catch(({err}) => {
        showMessage.error(err?.response.data.message || 'Unknown error')
      })
  }
}


export function fetchEvents(fromDate, toDate) {
  return (dispatch) => {
    dispatch(setTrainsInit(false));
    let fromEpochDate = epochConvert(fromDate);
    let toEpochDate = epochConvert(toDate);

    TrainService.getTrains(fromEpochDate, toEpochDate)
    .then(({data}) => {
      const newData = [...data].map(e => {
        return {...e, start: epochConvert(e.epochDate, true)}
      })
      dispatch({type: 'RECEIVE_EVENTS', plainEventObjects: newData})
      dispatch(setTrainsInit(true));
    })
    .catch(({err}) => {
      showMessage.error(err?.response.data.message || 'Unknown error')
    })
  }

}