import { hashById } from '@/utils';

const initState = {
  eventsById: [
    { id: 36,
      name: 'test lable',
      description: 'test descr',
      link: 'link',
      distance: 100,
      epochDate: 1680220800,
      createdAt: '2023-04-02T16:09:22.504198Z',
      start: '2023-03-31'
    },
    { id: 35,
      name: 'test lable',
      description: 'test descr',
      link: 'link',
      distance: 100,
      epochDate: 1680220800,
      createdAt: '2023-04-02T16:09:22.504198Z',
      start: '2023-03-31'
    },
        { id: 33,
      name: 'test lable',
      description: 'test descr',
      link: 'link',
      distance: 100,
      epochDate: 1680220800,
      createdAt: '2023-04-02T16:09:22.504198Z',
      start: '2023-03-31'
    },
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

