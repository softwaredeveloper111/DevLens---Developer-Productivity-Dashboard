
import { useCallback } from "react";
import { useDashboardContext, DASHBOARD_ACTIONS } from "../dashboard.context";
import dashboardService from "../services/dashboard.api"


const useDashboard = () => {
  const {state, dispatch} =  useDashboardContext()
  
  const fetchDashboardData =  useCallback( async(username)=>{
    dispatch({ type: DASHBOARD_ACTIONS.FETCH_START });
    try {
      const [profile,repos] = Promise.all([
        dashboardService.getUserProfile(username),
        dashboardService.getUserRepos(username),
      ]);
      dispatch({
        type:DASHBOARD_ACTIONS.FETCH_SUCCESS,
        payload:{profile,repos},
      })
    } catch (error) {

       dispatch({
        type: DASHBOARD_ACTIONS.FETCH_ERROR,
        payload: error.message || "Failed to fetch dashboard data",
      });
      
    }
  } , [dispatch]);


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