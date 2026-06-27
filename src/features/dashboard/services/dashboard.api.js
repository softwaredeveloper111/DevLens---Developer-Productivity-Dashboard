import axiosInstance from "../../../axios";





/**
 * @description  get user profile details
 * @route        https://api.github.com/users/username
 * @method       GET
 * 
 * @params     {String} username - required

 * 
 * @returns   {Object} 200  OK
 * @returns   {Object} 400  Resources not found
 * 
 */



/**
 * @description  List repositories for a user
 * @route        https://api.github.com/users/username/repos
 * @method       GET
 * 
 * @params     {String} username - required

 * 
 * @returns   {Object} 200  OK
 */




const dashboardService = {
   getUserProfile: async(username)=>{
  const res = await axiosInstance.get(`/users/${username}`);
  return res.data
  },

   getUserRepos: async(username)=>{
    const res = await axiosInstance.get (`/users/${username}/repos?per_page=100&sort=updated&direction=desc`);
    return res.data
   }

}







export default dashboardService