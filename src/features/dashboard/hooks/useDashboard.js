
import { useCallback } from "react";
import { useDashboardContext, DASHBOARD_ACTIONS } from "../dashboard.context";
import dashboardService from "../services/dashboard.api"
import {toast} from "sonner"


const useDashboard = () => {
  
  const {state, dispatch} =  useDashboardContext()
  

  /** FETCH DASHBOARD  */
  const fetchDashboardData =  useCallback( async(username)=>{
    dispatch({ type: DASHBOARD_ACTIONS.FETCH_START });
    try {
      const [profile,repos] = await Promise.all([
        dashboardService.getUserProfile(username),
        dashboardService.getUserRepos(username),
      ]);
      dispatch({
        type:DASHBOARD_ACTIONS.FETCH_SUCCESS,
        payload:{profile,repos},
      });
       toast.success("userer profile loaded successfully",{duration:5000,position:"top-right"});
       return true;
       
    } catch (error) {

       dispatch({
        type: DASHBOARD_ACTIONS.FETCH_ERROR,
        payload: error.message || "Failed to fetch dashboard data",
      });
      toast.error(error.message || "Something went wrong",{duration:5000,position:"top-right"});
      return false
      
    }
  } , [dispatch]);


   /** RESET DASHBOARD */
   
    const resetDashboard = useCallback(() => {
    dispatch({ type: DASHBOARD_ACTIONS.RESET });
  }, [dispatch]);



  return {
    profile:  state.profile,
    repos:    state.repos,
    loading:  state.loading,
    error:    state.error,
    // Actions
    fetchDashboardData,
    resetDashboard,
  }
}



export default useDashboard