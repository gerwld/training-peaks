import { hashById } from '@/utils';

const SET_TRAINS_INIT = "@@training-app/app-reducer/SET_TRAINS_INIT";
export const setTrainsInit = (isInit) => ({type: SET_TRAINS_INIT, isInit});

const initState = {
  isTrainInit: false,
  feelsById: {
      "additionalProp1": {
        "date": "string",
        "epochDay": 1680991200,
        "heartRate": 60,
        "text": "Desrciption 1",
        "weight": 89
      },
      "additionalProp2": {
        "date": "string",
        "epochDay": 1680732000,
        "heartRate": 120,
        "text": "Description 2",
        "weight": 85
      },
      "additionalProp3": {
        "date": "string",
        "epochDay": 0,
        "heartRate": 0,
        "text": "string",
        "weight": 0
      }
    },
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
    case SET_TRAINS_INIT:
      return {
        ...state,
        isTrainInit: action.isInit
      }
    


      case 'RECEIVE_FEELS':
        let ev2 = hashById(action.plainEventObjects) ? hashById(action.plainEventObjects) : {};
        return {
          ...state,
          feelsById: ev2}
  
      case 'CREATE_FEELS':
      case 'UPDATE_FEELS':
        return {
          ...state,
          feelsById: {...state.feelsById, [action.plainEventObject.id]: action.plainEventObject}
        }
  
      case 'DELETE_FEELS':
        return {
          ...state,
          feelsById: {...state.feelsById}.filter(({eventId}) => eventId == action.eventId)
        }
      case 'SET_FEELS_INIT':
        return {
          ...state,
          isTrainInit: action.isInit
        }
    default:
      return state
  }
}

