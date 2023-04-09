import TrainService from "api/TrainService"
import {epochDateConvert, epochDayConvert} from "utils/epochConvert";

import { setCreateMode } from "redux/actions/app-actions";
import { setFeelsInit, setTrainsInit } from "../reducers/main-reducer";
import timeAddedConvert from "utils/timeAddedConvert";
import FeelService from "../../api/FeelService";
import showMessage from "react-hot-toast";



// *** TRAINS ***//

export function fetchTrains(fromDate, toDate) {
  return (dispatch) => {
    dispatch(setTrainsInit(false));
    TrainService.getTrains(fromDate, toDate)
    .then(({data}) => {
      const newData = [...data].map(e => {
        const start = new Date(e.epochDate).toISOString()
        return {...e, start}
      })
      dispatch({type: 'RECEIVE_TRAINS', plainTrainObjects: newData})

      //delay for fullcalendar re-render
      setTimeout(() => {
        dispatch(setTrainsInit(true));
      }, 100)
      
    })

  }
}

export function createTrains(plainTrainObject) {
  return async (dispatch) => {
    let eventObjectWithEpoch = {
     ...plainTrainObject,
     epochDate: epochDateConvert(plainTrainObject.date),
     date: null
    }
    return TrainService.createTrain(eventObjectWithEpoch)
      .then(({data}) => {
        const start = new Date(data.epochDate).toISOString()

        dispatch({
          type: "CREATE_TRAIN",
          plainTrainObject: {...data, start},
        })

        dispatch(setCreateMode(false));
      })
      .catch((error) => {
        showMessage.error(error?.response?.data?.message || error.message || 'Unknown error')
        return Promise.reject(error)
      })
  }
}

export function updateTrain(plainTrainObject) {
  return async (dispatch) => {
    let epochDate = epochDateConvert(timeAddedConvert(plainTrainObject.start, plainTrainObject.epochDate));
    const eventObject = {...plainTrainObject, epochDate };
    delete eventObject.start;
    delete eventObject.date;

    TrainService.updateTrain(eventObject)
    .then(() => {
      dispatch({
        type: 'UPDATE_TRAIN',
        plainTrainObject: {...plainTrainObject}
      })
      dispatch({type: 'SET_EDIT', isEditMode: false, payload: null});
    })
    .catch((error) => {
      showMessage.error(error?.response?.data?.message || error.message || 'Unknown error')
      return Promise.reject(error)
    })
  }
}

export function deleteTrains(eventID) {
  return async (dispatch) => {
    TrainService.deleteTrain(eventID)
    .then(() => {
      dispatch({
        type: 'DELETE_TRAIN',
        eventID
      })
      dispatch({type: 'SET_EDIT', isEditMode: false, payload: null});
      showMessage.success('Training was successfully deleted.')
    })
    .catch((error) => {
      showMessage.error(error?.response?.data?.message || error.message || 'Unknown error')
      return Promise.reject(error)
    })
  }
}


// *** FEELS ***//

export function fetchFeels (fromDate, toDate) {
  return async (dispatch) => {
    dispatch(setFeelsInit(true));

    FeelService.getAllFeels(fromDate, toDate).then(({data}) => {
      dispatch({type: 'RECEIVE_FEELS', plainFeelObjects: data})
      dispatch(setFeelsInit(true));
    })
    .catch((error) => {
      showMessage.error(error?.response?.data?.message || error.message || 'Unknown error')
      return Promise.reject(error)
    })
  }
}

export function createFeel (data) {
  return async (dispatch) => {
    const epochDay = epochDayConvert(data.date);
    FeelService.createFeel({ epochDay, ...data })
    .then(({data}) => {
      dispatch({type: 'CREATE_FEEL', payload: data});
    })
  }
}

export function updateFeel (data) {
  return async (dispatch) => {
    FeelService.updateFeel(data)
    .then(({data}) => {

    })
  }
}

export function deleteFeel (eventID) {
  return async (dispatch) => {

  }
}