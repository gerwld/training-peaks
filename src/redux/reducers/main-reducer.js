import { hashById } from '@/utils';

const initState = {
  eventsById: [
    {
      id: '0',
      start: '2023-04-01',
      title: 'Morning Run',
      type: 'Training Run',
      desc: 'description for train',
      dist: '5.2',
      rtss: '60'
    },
    {
      id: '1',
      title: 'Morning Run',
      type: 'Training Run',
      desc: 'description for train',
      dist: '7.2',
      rtss: '60',
      start: '2023-04-01T12:00:00'
    },
    {
      id: '1',
      title: 'Morning Run',
      type: 'Training Run',
      desc: 'description for train',
      dist: '7.2',
      rtss: '60',
      start: '2023-04-01T12:00:00'
    }
  ]
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
        eventsById: {...state.eventsById, [action.plainEventObject.id]: action.plainEventObject}
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

