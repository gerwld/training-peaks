import updatePlanDaysIndexes from "../../utils/updatePlanDaysIndexes"

const initialState = {
 isInit: true,
 isEditMode: false,
 isDeleteMode: false,
 isCreatePlanMode: false,

 allPlans: null,
 currentPlanId: null,
 currentObj: null,
 currentDays: null,
 currentPlanName: "My Plan #1",
 currentDays: [],
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
  case 'SET_CREATEMODE_PLAN': 
    return {...state,
      isCreatePlanMode: action.isCreatePlanMode,
    }
  case 'CREATE_PLAN': 
    return {...state,
      currentPlanId: state.currentPlanId ? state.currentPlanId : action.currentPlanId,
      isCreatePlanMode: action.isCreatePlanMode,
    }

  case 'SET_CREATEMODE_PLAN':
  return {...state,
    isCreatePlanMode: false
  }
  case 'CLOSE_CREATEMODE_PLAN':
    return {...state,
      newPlanId: null,
      isCreatePlanMode: false
  }
  default:
   return state
 }
}
