import { requestEventsInRange, requestEventCreate, requestEventUpdate, requestEventDelete } from '@/api/requests'
import TrainService from '../api/TrainService'

export default {

  requestEvents(startStr, endStr) {
    return (dispatch) => {
      return requestEventsInRange(startStr, endStr).then((plainEventObjects) => {
        dispatch({
          type: 'RECEIVE_EVENTS',
          plainEventObjects
        })
      })
    }
  },

  createEvent(plainEventObject) {
    return async (dispatch) => {
      return TrainService.createTrain(plainEventObject).then((newEventId) => {
        dispatch({
          type: 'CREATE_EVENT',
          plainEventObject: {
            id: newEventId,
            ...plainEventObject
          }
        })
      })
    }
  },

  updateEvent(plainEventObject) {
    return (dispatch) => {
      return requestEventUpdate(plainEventObject).then(() => {
        dispatch({
          type: 'UPDATE_EVENT',
          plainEventObject
        })
      })
    }
  },

  deleteEvent(eventId) {
    return (dispatch) => {
      return requestEventDelete(eventId).then(() => {
        dispatch({
          type: 'DELETE_EVENT',
          eventId
        })
      })
    }
  }

}
