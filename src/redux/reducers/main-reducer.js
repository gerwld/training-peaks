import { hashById } from '@/utils';

const initState = {
  eventsById: {}
}

export const mainReducer = (state = initState, action) => {
  switch (action.type) {

    case 'RECEIVE_EVENTS':
      let ev = hashById(action.plainEventObjects) ? hashById(action.plainEventObjects) : {};
      return {
        ...state,
        eventsById: ev}

    case 'CREATE_EVENT':
    case 'UPDATE_EVENT':
      return {
        ...state,
        eventsById: {[action.plainEventObject.id]: action.plainEventObject}
      }

    case 'DELETE_EVENT':
      return {
        ...state,
        eventsById: {...state.eventsById}.filter(({eventId}) => eventId == action.eventId)
      }

    default:
      return state
  }
}