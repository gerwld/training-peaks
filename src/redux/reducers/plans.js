import updatePlanDaysIndexes from "../../utils/updatePlanDaysIndexes"

const initialState = {
 isInit: false,
 isEditMode: false,
 isDeleteMode: false,

 currentObj: null,
 currentDays: null,
 currentPlanName: "My Plan #1",
 currentDays: [
  // {
  //  id: 0,
  //  title: "string",
  //  description: "string",
  //  expectedResult: "string",
  //  time: "1:09:15",
  //  distance: 0,
  //  planDayNumber: 0,
  // }
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
      currentDays: action.payload
    }
  case 'SET_CURRENT_PLAN':
    return {...state,
      currentDays: action.payload
    }

  case 'ADD_PLANDAY':
    return {
      ...state,
      currentDays: [...state.currentDays, action.payload]
    }

  case 'DELETE_PLANDAY':
    let currentDaysFiltered = [...state.currentDays].filter(({planDayNumber}) => planDayNumber !== action.payload);
    return {...state,
    currentDays: updatePlanDaysIndexes(currentDaysFiltered, 'planDayNumber')
  }
  case 'UPDATE_PLANDAY':
    return {...state,
    currentDays: [...state.currentDays.filter(({planDayNumber}) => planDayNumber !== action.payload.planDayNumber), action.payload]
  }
  case 'SET_EDITMODE_PLAN': 
    return {...state,
      isEditMode: action.isEditMode,
      currentObj: action.currentObj
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
