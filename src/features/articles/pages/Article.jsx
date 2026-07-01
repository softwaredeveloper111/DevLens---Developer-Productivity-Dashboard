import { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "../../dashboard/components/Navbar";
import Sidebar from "../../dashboard/components/Sidebar";
import ArticleCard from "../components/ArticleCard";
import ArticleSearch from "../components/ArticleSearch";
import ArticleFilters from "../components/ArticleFilters";
import SkeletonCard from "../components/SkeletonCard";
import { ARTICLES_DATA, ALL_TAGS } from "../data/articlesData";
import styles from "../styles/Article.module.css";
import useArticle from "../hooks/useArticle"



const Articles = () => {


  const {articles,loading,error,page,per_page,hasMore,fetchArticlesData,resetArticlesData} = useArticle();

useEffect(() => {
    fetchArticlesData(3,12)
}, [])



  return (
    <div className={styles.layout}>
      <Navbar/>

      <div className={styles.main}>
        <Sidebar/>

        <main className={styles.content}>
          {/* Page header */}
          <div className={styles.pageHeader}>
            <div className={styles.headerLeft}>
              <h1 className={styles.pageTitle}>Articles</h1>
              <p className={styles.pageSubtitle}>
                Discover developer articles, tutorials, and deep dives.
              </p>
            </div>
         
          </div>

          {/* Search + Filters */}
          <div className={styles.toolbar}>
            {/* <ArticleSearch /> */}
            {/* <ArticleFilters/> */}
          </div>
          

       
        </main>
      </div>
    </div>
  );
};

export default Articles;