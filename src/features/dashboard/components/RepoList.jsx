import styles from "../styles/RepoList.module.css";

const LANG_COLORS = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3572A5",
  CSS: "#563D7C",
  HTML: "#E34F26",
  Rust: "#DEA584",
  Go: "#00ADD8",
  Java: "#B07219",
  "C++": "#F34B7D",
  Ruby: "#CC342D",
  Shell: "#89E051",
  Vue: "#41B883",
  Svelte: "#FF3E00",
  Kotlin: "#A97BFF",
  Swift: "#F05138",
  Dart: "#00B4AB",
};

const getLangColor = (lang) => LANG_COLORS[lang] || "#A1A1AA";

const RepoList = ({ repos, visibleCount, onLoadMore }) => {
  const visible = repos.slice(0, visibleCount);

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
        <span className={styles.sectionTitle}>Recent Repositories</span>
        <span className={styles.repoCount}>{repos.length} repos</span>
      </div>

      <div className={styles.grid}>
        {visible.map((repo) => (
          <div key={repo.id} className={styles.card}>
            <div className={styles.repoHeader}>
              <span className={styles.repoName}>{repo.name}</span>
              <span className={styles.repoVisibility}>{repo.visibility}</span>
            </div>

            {repo.description && (
              <p className={styles.repoDesc}>{repo.description}</p>
            )}

            <div className={styles.repoFooter}>
              {repo.language && (
                <span className={styles.repoBadge}>
                  <span
                    className={styles.langDot}
                    style={{ background: getLangColor(repo.language) }}
                  />
                  {repo.language}
                </span>
              )}
              <span className={styles.repoBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {repo.stars}
              </span>
              <span className={styles.repoBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <path d="M18 9v1a2 2 0 01-2 2H8a2 2 0 01-2-2V9" />
                  <line x1="12" y1="12" x2="12" y2="15" />
                </svg>
                {repo.forks}
              </span>
              <span className={styles.repoBadge}>
                Updated {repo.updatedAt}
              </span>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewRepoBtn}
              >
                View
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < repos.length && (
        <div className={styles.loadMoreRow}>
          <button className={styles.loadMoreBtn} onClick={onLoadMore}>
            Load More Repositories
          </button>
        </div>
      )}
    </div>
  );
};

export default RepoList;
