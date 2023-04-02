import TrainService from "@/api/TrainService"
import epochConvert from "@/utils/epochConvert";
import showMessage from "react-hot-toast";

import { setCreateMode } from "../reducers/app-reducer";
import { setTrainsInit } from "../reducers/main-reducer";
import timeAddedConvert from "../../utils/timeAddedConvert";


export function fetchEvents(fromDate, toDate) {
  return (dispatch) => {
    dispatch(setTrainsInit(false));
    let fromEpochDate = epochConvert(fromDate);
    let toEpochDate = epochConvert(toDate);

    TrainService.getTrains(fromEpochDate, toEpochDate)
    .then(({data}) => {
      const newData = [...data].map(e => {
        const start = timeAddedConvert(e.createdAt, e.epochDate)
        return {...e, start}
      })
      dispatch({type: 'RECEIVE_EVENTS', plainEventObjects: newData})

      //delay for fullcalendar re-render
      setTimeout(() => {
        dispatch(setTrainsInit(true));
      }, 100)
      
    })
    .catch((error) => {
      showMessage.error(error?.response.data.message || error.message || 'Unknown error')
    })
  }
}

export function createEvent(plainEventObject) {
  return async (dispatch) => {
    let eventObjectWithEpoch = {
     ...plainEventObject,
     epochDate: epochConvert(plainEventObject.date),
     date: null
    }
    return TrainService.createTrain(eventObjectWithEpoch)
      .then(({data}) => {
        const start = timeAddedConvert(data.createdAt, data.epochDate)

        dispatch({
          type: "CREATE_EVENT",
          plainEventObject: {...data, start},
        })

        dispatch(setCreateMode(false));
      })
      .catch((error) => {
        showMessage.error(error?.response.data.message || error.message || 'Unknown error')
      })
  }
}

export function updateEvent(plainEventObject) {
  return async (dispatch) => {
    const eventObject = {...plainEventObject};
    delete eventObject.start;
    delete eventObject.date;

    TrainService.updateTrain(eventObject)
    .then(() => {
      dispatch({
        type: 'UPDATE_EVENT',
        plainEventObject
      })
      dispatch({type: 'SET_EDIT', isEditMode: false, payload: null});
    })
    .catch((error) => {
      showMessage.error(error?.response.data.message || error.message || 'Unknown error')
    })
  }
}

export function deleteEvent(eventID) {
  return async (dispatch) => {
    TrainService.deleteTrain(eventID)
    .then(() => {
      dispatch({
        type: 'DELETE_EVENT',
        eventID
      })
      dispatch({type: 'SET_EDIT', isEditMode: false, payload: null});
    })
    .catch((error) => {
      showMessage.error(error?.response.data.message || error.message || 'Unknown error')
    })
  }
}