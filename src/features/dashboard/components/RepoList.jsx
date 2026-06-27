import styles from "../styles/RepoList.module.css";
import { formatDistanceToNow } from "date-fns";


 const LANG_COLORS = {
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#3572A5",
  CSS: "#563D7C",
  HTML: "#E34F26",
  Java: "#B07219",
  "C++": "#F34B7D",
  C: "#555555",
  "C#": "#239120",
  PHP: "#777BB4",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Kotlin: "#A97BFF",
  Swift: "#FA7343",
  Dart: "#0175C2",
  Ruby: "#CC342D",
  Shell: "#89E051",
  SCSS: "#CF649A",
  Vue: "#41B883",
  Svelte: "#FF3E00",
  Dockerfile: "#2496ED",
  Markdown: "#083FA1",
  JSON: "#CBCB41",
  YAML: "#CB171E",
  Jupyter: "#DA5B0B",
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
                Updated {formatDistanceToNow(new Date(repo.updated_at), {
               addSuffix: true,
                 })}
              </span>
              <a
                href={repo.html_url}
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
