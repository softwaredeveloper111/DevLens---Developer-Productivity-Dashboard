import {useContext,createContext,useReducer} from "react";

/**INITIAL STATE */
const initialState = {
    articles:[],
    page:1,
    per_page:12,
    hasMore:true,
    loading:false,
    error:null,
}


/** ACTION TYPES */

export const ARTICLE_ACTIONS = {
  FETCH_START:   "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR:   "FETCH_ERROR",
  RESET:         "RESET",
};



/** REDUCER FUNCTION */
const articleReducer = (state,action)=>{

  switch (action.type) {    
    case ARTICLE_ACTIONS.FETCH_START:
      return {...state,loading:true,error:null};
      

    case ARTICLE_ACTIONS.FETCH_SUCCESS:
        return {
            ...state,
            loading: false,
            error: null,
            page: action.payload.page,
            per_page: action.payload.per_page,
            articles: action.payload.page === 1  ?  action.payload.articles : [...state.articles, ...action.payload.articles],
        };

    case ARTICLE_ACTIONS.FETCH_ERROR:
      return {...state,loading:false, error:action.payload}

    
    case ARTICLE_ACTIONS.RESET:
      return initialState

    default:
      return state
      
  }
}





/** CONTEXT */
const ArticleContext = createContext(null);
export const ArticleProvider = ({children})=>{
      const [state, dispatch] = useReducer( articleReducer , initialState);
      return (
        <ArticleContext.Provider value={{state,dispatch}}>{children}</ArticleContext.Provider>
      )
}



/** CONSUMER HOOK */
export const useArticleContext = ()=>{
      const context = useContext(ArticleContext);
      if(!context) throw new Error("useArticleContext must be used within ArticleProvider");
      return context;
}