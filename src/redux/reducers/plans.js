const initialState = {
 isInit: false,
 isEditMode: false,
 isDeleteMode: false,

 currentObj: null,
 currentPlanTotalDays: null,
 currentPlanName: "My Plan #1",
 currentPlanByDays: [
  // {
  //  id: 0,
  //  title: "string",
  //  description: "string",
  //  expectedResult: "string",
  //  time: "1:09:15",
  //  distance: 0,
  //  planDayNumber: 0,
  // },
  // {
  //  id: 1,
  //  title: "string",
  //  description: "string",
  //  expectedResult: "string",
  //  time: "1:09:15",
  //  distance: 0,
  //  planDayNumber: 3,
  // },
  // {
  //  id: 2,
  //  title: "string",
  //  description: "string",
  //  expectedResult: "string",
  //  time: "1:09:15",
  //  distance: 0,
  //  planDayNumber: 5,
  // },
  // {
  //  id: 3,
  //  title: "string",
  //  description: "string",
  //  expectedResult: "string",
  //  time: "1:09:15",
  //  distance: 0,
  //  planDayNumber: 6,
  // },
  // {
  //  id: 4,
  //  title: "string",
  //  description: "string",
  //  expectedResult: "string",
  //  time: "1:09:15",
  //  distance: 0,
  //  planDayNumber: 9,
  // },
  // {
  //  id: 5,
  //  title: "string",
  //  description: "string",
  //  expectedResult: "string",
  //  time: "1:09:15",
  //  distance: 0,
  //  planDayNumber: 10,
  // },
 ],
}

export default function plans(state = initialState, action) {
 switch (action.type) {
  case 'INIT_PLANS':
    return {
      ...state,
      isInit: action.isInit
  }
  case 'SET_PLAN_INTERVAL':
    return {...state, 
      currentPlanTotalDays: action.payload
    }
  case 'SET_CURRENT_PLAN':
    return {...state,
      currentPlanByDays: action.payload
    }

  case 'ADD_PLANDAY':
    return {
      ...state,
      currentPlanByDays: [...state.currentPlanByDays, action.payload]
    }

  case 'DELETE_PLANDAY':
    return {...state,
    currentPlanByDays: [...state.currentPlanByDays].filter(({id}) => id !== action.payload)
  }
  case 'EDIT_PLANDAY':
    return {...state,
    currentObj: action.currentObj,
    isEditMode: action.isEditMode
  }
  case 'CLOSE_EDIT_PLANDAY':
    return {...state,
    isEditMode: false,
    currentObj: null
  }
  default:
   return state
 }
}
