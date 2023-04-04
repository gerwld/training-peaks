import { requestEventsInRange, requestEventCreate, requestEventUpdate, requestEventDelete } from '@/api/requests'
import TrainService from '../api/TrainService'

export default {

  requestEvents(startStr, endStr) {
    return (dispatch) => {
      return requestEventsInRange(startStr, endStr).then((plainTrainObjects) => {
        dispatch({
          type: 'RECEIVE_TRAINS',
          plainTrainObjects
        })
      })
    }
  },

  createTrains(plainTrainObject) {
    return async (dispatch) => {
      return TrainService.createTrain(plainTrainObject).then((newEventId) => {
        dispatch({
          type: 'CREATE_TRAIN',
          plainTrainObject: {
            id: newEventId,
            ...plainTrainObject
          }
        })
      })
    }
  },

  updateTrain(plainTrainObject) {
    return (dispatch) => {
      return requestEventUpdate(plainTrainObject).then(() => {
        dispatch({
          type: 'UPDATE_TRAIN',
          plainTrainObject
        })
      })
    }
  },

  deleteTrains(eventId) {
    return (dispatch) => {
      return requestEventDelete(eventId).then(() => {
        dispatch({
          type: 'DELETE_TRAIN',
          eventId
        })
      })
    }
  }

}
