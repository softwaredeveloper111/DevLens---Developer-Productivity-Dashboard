import devtoClient from "../../../api/devtoClient";


/**
 * @description  get all articles
 * @route        https://dev.to/api/articles?per_page=12&page=1
 * @method       GET
 * 
 * @params     page:number - required
 *             per_page:number - optional
 *             
 * 
 * @returns   {Object} 200  OK

 */




const articleService ={
  getAllAriticles: async({page=1, per_page=12})=>{
    const res = await devtoClient.get(`/articles?per_page=${per_page}&page=${page}`);
    return res.data
  }
}

export default articleService