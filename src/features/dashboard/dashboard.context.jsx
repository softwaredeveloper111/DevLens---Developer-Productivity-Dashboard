import {createContext,useContext,useReducer} from "react";



/** INITIAL STATE */

const initialState = {
  profile:null,
  repos:[],
  loading:false,
  error:null
}



/** ACTION TYPES */

export const DASHBOARD_ACTIONS = {
  FETCH_START:   "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR:   "FETCH_ERROR",
  RESET:         "RESET",
};





/** REDUCER FUNCTION */
const dashboardReducer = (state,action)=>{

  switch (action.type) {
    case DASHBOARD_ACTIONS.FETCH_START:
      return {...state,loading:true,error:null};
      

    case DASHBOARD_ACTIONS.FETCH_SUCCESS:
      return {...state,loading:false,error:null};


    case DASHBOARD_ACTIONS.FETCH_ERROR:
      return {...state,loading:false, error:action.payload}

    
    case DASHBOARD_ACTIONS.RESET:
      return initialState

    default:
      return state
      
  }
}






/** Context */

const DashboardContext = createContext(null);


export const DashboardProvider = ({children}) => {

  const [state, dispatch] = useReducer( dashboardReducer , initialState);

  return (
    <DashboardContext.Provider value={{state, dispatch}}>{children}</DashboardContext.Provider>
  )
}



/** Consumer Hook (only used inside custom hook, not in pages directly) **/

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("useDashboardContext must be used within DashboardProvider");
  return context;
};



