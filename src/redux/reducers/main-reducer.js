import { hashById } from "@/utils";

const SET_TRAINS_INIT = "@@training-app/app-reducer/SET_TRAINS_INIT"
const SET_FEELS_INIT = "@@training-app/app-reducer/SET_FEELS_INIT"
export const setTrainsInit = (isInit) => ({ type: SET_TRAINS_INIT, isInit })
export const setFeelsInit = (isInit) => ({ type: SET_FEELS_INIT, isInit })

const initState = {
 isTrainsInit: false,
 isFeelsInit: false,
 feelsById: [],
 eventsById: [],
}

const mainReducer = (state = initState, action) => {
 switch (action.type) {
  case SET_TRAINS_INIT:
   return {
    ...state,
    isTrainsInit: action.isInit,
   }
  case SET_FEELS_INIT:
   return {
    ...state,
    isFeelsInit: action.isInit,
   }

  case "RECEIVE_TRAINS":
   return {
    ...state,
    eventsById: hashById(action.plainTrainObjects),
   }


  case "CREATE_TRAIN":
  case "UPDATE_TRAIN":
   return {
    ...state,
    eventsById: { ...state.eventsById, [action.plainTrainObject.id]: action.plainTrainObject },
   }

  case "DELETE_TRAIN":
    const newObj = {...state.eventsById};
    delete newObj[Number(action.eventID)];
   return {
    ...state,
    eventsById: newObj,
   }





  case "RECEIVE_FEELS": 
   return {
    ...state,
    feelsById: action.plainFeelObjects,
   }

  case "CREATE_FEEL":
  case "UPDATE_FEEL":
   return {
    ...state,
    feelsById: { ...state.feelsById, [action.payload.epochDay]: action.payload },
   }

  case "DELETE_FEEL":
   return {
    ...state,
    feelsById: { ...state.feelsById }.filter(({ eventId }) => eventId == action.eventId),
   }
  case "SET_FEELS_INIT":
   return {
    ...state,
    isTrainsInit: action.isInit,
   }
  default:
   return state
 }
}

export default mainReducer;