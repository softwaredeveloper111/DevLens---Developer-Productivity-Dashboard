import { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "../../dashboard/components/Navbar";
import Sidebar from "../../dashboard/components/Sidebar";
import ArticleCard from "../components/ArticleCard";
import ArticleSearch from "../components/ArticleSearch";
import ArticleFilters from "../components/ArticleFilters";
import SkeletonCard from "../components/SkeletonCard";
import { ARTICLES_DATA, ALL_TAGS } from "../data/articlesData";
import styles from "../styles/Article.module.css";

const PAGE_SIZE = 6;

const Articles = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(true);

  const loaderRef = useRef(null);

  // Simulate initial load
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, activeTag]);

  // Filtered articles
  const filtered = ARTICLES_DATA.filter((a) => {
    const matchesSearch =
      search === "" ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesTag = activeTag === null || a.tags.includes(activeTag);

    return matchesSearch && matchesTag;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Infinite scroll — observe sentinel element
  const handleObserver = useCallback(
    (entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        setVisibleCount((prev) => prev + PAGE_SIZE);
      }
    },
    [hasMore, loading]
  );

  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleObserver, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className={styles.layout}>
      <Navbar onMenuToggle={() => setSidebarOpen((o) => !o)} />

      <div className={styles.main}>
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className={styles.content}>
          {/* Page header */}
          <div className={styles.pageHeader}>
            <div className={styles.headerLeft}>
              <h1 className={styles.pageTitle}>Articles</h1>
              <p className={styles.pageSubtitle}>
                Discover developer articles, tutorials, and deep dives.
              </p>
            </div>
            {!loading && (
              <span className={styles.count}>
                {filtered.length} article{filtered.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>

          {/* Search + Filters */}
          <div className={styles.toolbar}>
            <ArticleSearch value={search} onChange={setSearch} />
            <ArticleFilters
              tags={ALL_TAGS}
              activeTag={activeTag}
              onChange={setActiveTag}
            />
          </div>

          {/* Grid */}
          {loading ? (
            <div className={styles.grid}>
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : visible.length > 0 ? (
            <>
              <div className={styles.grid}>
                {visible.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* Infinite scroll sentinel */}
              <div ref={loaderRef} className={styles.sentinel}>
                {hasMore && (
                  <div className={styles.loadingMore}>
                    <span className={styles.spinner} />
                    <span className={styles.loadingText}>Loading more…</span>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16M4 10h16M4 14h10M4 18h6" />
                </svg>
              </div>
              <p className={styles.emptyTitle}>No articles found</p>
              <p className={styles.emptyDesc}>
                Try adjusting your search or clearing the tag filter.
              </p>
              <button
                className={styles.clearBtn}
                onClick={() => { setSearch(""); setActiveTag(null); }}
              >
                Clear filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Articles;