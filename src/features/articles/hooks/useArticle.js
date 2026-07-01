import { useCallback } from "react";
import { useArticleContext, ARTICLE_ACTIONS } from "../article.context";
import articleService from "../services/article.api";
import { toast } from "sonner";

const useArticle = () => {
  const { state, dispatch } = useArticleContext();

  /**FETCH ARTICLES */
  const fetchArticlesData = useCallback(
    async ({ page = 1, per_page = 12 }) => {
      dispatch({ type: ARTICLE_ACTIONS.FETCH_START });

      try {
        const articles = await articleService.getAllArticles({
          page,
          per_page,
        });

        dispatch({
          type: ARTICLE_ACTIONS.FETCH_SUCCESS,
          payload: { articles, page, per_page },
        });

        if (page === 1) {
          toast.success("Articles loaded successfully", {
            duration: 5000,
            position: "top-right",
          });
        }
        return true;
      } catch (error) {
        dispatch({
          type: ARTICLE_ACTIONS.FETCH_ERROR,
          payload: error.message || "Failed to fetch articles",
        });
        toast.error(error.message || "Something went wrong", {
          duration: 5000,
          position: "top-right",
        });
        return false;
      }
    },
    [dispatch],
  );

  /** RESET ARTICLES */
  const resetArticlesData = useCallback(() => {
    dispatch({ type: ARTICLE_ACTIONS.RESET });
  }, [dispatch]);

  return {
    articles: state.articles,
    loading: state.loading,
    error: state.error,
    page: state.page,
    per_page: state.per_page,
    hasMore: state.hasMore,
    // Action
    fetchArticlesData,
    resetArticlesData,
  };
};

export default useArticle;
