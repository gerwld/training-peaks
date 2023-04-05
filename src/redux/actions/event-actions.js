import TrainService from "api/TrainService"
import epochConvert from "utils/epochConvert";

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
        const start = timeAddedConvert(e.createdAt, e.epochDate)
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
     epochDate: epochConvert(plainTrainObject.date),
     date: null
    }
    return TrainService.createTrain(eventObjectWithEpoch)
      .then(({data}) => {
        const start = timeAddedConvert(data.createdAt, data.epochDate)

        dispatch({
          type: "CREATE_TRAIN",
          plainTrainObject: {...data, start},
        })

        dispatch(setCreateMode(false));
      })
      .catch((error) => {
        showMessage.error(error?.response.data.message || error.message || 'Unknown error')
      })
  }
}

export function updateTrain(plainTrainObject) {
  return async (dispatch) => {
    const eventObject = {...plainTrainObject};
    delete eventObject.start;
    delete eventObject.date;

    TrainService.updateTrain(eventObject)
    .then(() => {
      dispatch({
        type: 'UPDATE_TRAIN',
        plainTrainObject
      })
      dispatch({type: 'SET_EDIT', isEditMode: false, payload: null});
    })
    .catch((error) => {
      showMessage.error(error?.response.data.message || error.message || 'Unknown error')
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
      showMessage.error(error?.response.data.message || error.message || 'Unknown error')
    })
  }
}


// *** FEELS ***//

export function fetchFeels (fromDate, toDate) {
  return async (dispatch) => {
    dispatch(setFeelsInit(true));

    FeelService.getAllFeels(fromDate, toDate).then((data) => {
      dispatch({type: 'RECEIVE_FEELS', plainFeelObjects: data})
      dispatch(setFeelsInit(true));
    })
    .catch((error) => {
      showMessage.error(error?.response.data.message || error.message || 'Unknown error')

    })
  }
}

export function createFeels (plainFeelObject) {
  return async (dispatch) => {
    FeelService.createFeel(plainFeelObject)
    .then(plainTrainObject => {
      dispatch({type: 'CREATE_FEEL', plainTrainObject});
    })
  }
}

export function updateFeels (plainFeelObject) {
  return async (dispatch) => {

  }
}

export function deleteFeels (eventID) {
  return async (dispatch) => {

  }
}